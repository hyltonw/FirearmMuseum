package com.FirearmMuseum.FirearmMuseum.persistence;

import com.FirearmMuseum.FirearmMuseum.models.Manufacturer;
import com.FirearmMuseum.FirearmMuseum.persistence.mappers.ManufacturerIdMapper;
import com.FirearmMuseum.FirearmMuseum.persistence.mappers.ManufacturerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.jdbc.core.JdbcTemplate;

import java.io.InvalidObjectException;
import java.util.List;

public class PostgresManufacturerDao {

    @Autowired
    JdbcTemplate template;

    public List<Manufacturer> getAllManufacturers(){
        List<Manufacturer> allManufacturers = template.query("SELECT * FROM \"Manufacturers\"",
                new ManufacturerMapper());

        return allManufacturers;
    }

    public Manufacturer addManufacturer(Manufacturer toAdd) throws InvalidObjectException {
        if(toAdd==null)
            throw new InvalidObjectException("The entered manufacturer was null");
        if(toAdd.getManufacturerId()==null)
            throw new IllegalArgumentException("the entered manufacturer Id was null");
        if(toAdd.getManufacturer()==null)
            throw new IllegalArgumentException("the entered manufacturer was null");

        try{
            Integer ManufacturerId = template.queryForObject("INSERT INTO \"Manufacturer\" (\"manufacturername\")" +
                            "VALUES (?) RETURNING \"manufacturersid\";",
                    new ManufacturerIdMapper(),
                    toAdd.getManufacturer());
                    toAdd.setManufacturerId( ManufacturerId );

        } catch (DataIntegrityViolationException e){
            throw new DataIntegrityViolationException("an invalid Id was entered");
        }

        if(toAdd.getManufacturerId()==null){
            throw new IllegalArgumentException("the manufacturer id was null");
        }
        return toAdd;
    }

    public void removeById(Integer id){
        boolean idEXists = false;
        for(int i = 0;i < getAllManufacturers().size() && !idEXists;i++){
            if(getAllManufacturers().get(i).getManufacturerId().equals(id))
                idEXists=true;
        }

        if(idEXists) {
            template.update("DELETE FROM \"Manufacturer\"" +
                    "WHERE \"Manufacturer\".manufacturersid = '" + id + "';");
        } else
            throw new IllegalArgumentException("The Manufacturer with that id doesn't exist");
    }

    public void editManufacturer(Integer id, Manufacturer toEdit) {
        boolean idExists = false;
        for (int i = 0; i < getAllManufacturers().size(); i++) {
            if (getAllManufacturers().get(i).getManufacturerId().equals(id)) {
                idExists = true;
            }
        }

        if (!idExists)
            throw new IllegalArgumentException("The id entered does not exist");

        String newActionType = toEdit.getManufacturer();
        Manufacturer original = getManufacturerById(id);

        if (newActionType != null) {
            template.update("UPDATE \"Manufacturer\" SET \"manufacturername\" = '" + newActionType + "' WHERE \"manufacturersid\" = '" + id + "';");
            original.setManufacturer(newActionType);
        }
    }

    public void removeManufacturerById(Integer id){
        boolean idEXists = false;
        for(int i = 0;i < getAllManufacturers().size() && !idEXists;i++){
            if(getAllManufacturers().get(i).getManufacturerId().equals(id))
                idEXists=true;
        }

        if(idEXists) {
            template.update("DELETE FROM \"Manufacturer\"" +
                    "WHERE \"Manufacturer\".manufacturersid = '" + id + "';");
        } else
            throw new IllegalArgumentException("The manufacturer with that id doesn't exist");
    }

    public Manufacturer getManufacturerById(Integer id){
        Manufacturer toReturn = null;

        for (int i = 0; i < getAllManufacturers().size(); i++) {
            if(id == getAllManufacturers().get(i).getManufacturerId()){
                toReturn = getAllManufacturers().get(i);
            }
        }
        if(toReturn==null)
            throw new IllegalArgumentException("Manufacturer with id " + id + " does not exist");
        return toReturn;
    }
}
