package com.FirearmMuseum.FirearmMuseum.persistence.PostgresDao;

import com.FirearmMuseum.FirearmMuseum.models.Manufacturer;
import com.FirearmMuseum.FirearmMuseum.persistence.Dao.ManufacturerDao;
import com.FirearmMuseum.FirearmMuseum.persistence.mappers.idMappers.ManufacturerIdMapper;
import com.FirearmMuseum.FirearmMuseum.persistence.mappers.ManufacturerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.io.InvalidObjectException;
import java.util.List;

@Component
public class PostgresManufacturerDao implements ManufacturerDao {

    @Autowired
    JdbcTemplate template;

    public List<Manufacturer> getAllManufacturers(){
        List<Manufacturer> allManufacturers = template.query("SELECT * FROM \"Manufacturer\"",
                new ManufacturerMapper());

        return allManufacturers;
    }

    public Manufacturer addManufacturer(Manufacturer toAdd) throws InvalidObjectException {
        if(toAdd==null)
            throw new InvalidObjectException("The entered manufacturer was null");
        if(toAdd.getManufacturer()==null)
            throw new IllegalArgumentException("the entered manufacturer was null");

        try{
            Integer ManufacturerId = template.queryForObject("INSERT INTO \"Manufacturer\" " +
                            "(\"manufacturername\", \"manufacturerdescription\",\"manufacturerurl\")" +
                            "VALUES (?,?,?) RETURNING \"manufacturersid\";",
                    new ManufacturerIdMapper(),
                    toAdd.getManufacturer(),
                    toAdd.getManufacturerDescription(),
                    toAdd.getManufacturerUrl());
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

        String newManufacturer = toEdit.getManufacturer().replace("'","''");
        String newManufacturerDescription = toEdit.getManufacturerDescription().replace("'","''");
        String newUrl = toEdit.getManufacturerUrl();
        Manufacturer original = getManufacturerById(id);

        if (newManufacturer != null) {
            template.update("UPDATE \"Manufacturer\" SET \"manufacturername\" = '" + newManufacturer + "' WHERE \"manufacturersid\" = '" + id + "';");
            original.setManufacturer(newManufacturer);
        }
        if (newManufacturerDescription!=null) {
            template.update("UPDATE \"Manufacturer\" SET \"manufacturerdescription\" = '" + newManufacturerDescription + "' WHERE \"manufacturersid\" = '" + id + "';");
            original.setManufacturerDescription(newManufacturerDescription);
        }
        if (newUrl!=null) {
            template.update("UPDATE \"Manufacturer\" SET \"manufacturerurl\" = '" + newUrl + "' WHERE \"manufacturersid\" = '" + id + "';");
            original.setManufacturerUrl(newUrl);
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
