package com.FirearmMuseum.FirearmMuseum.persistence.PostgresDao;

import com.FirearmMuseum.FirearmMuseum.models.Caliber;
import com.FirearmMuseum.FirearmMuseum.persistence.Dao.CaliberDao;
import com.FirearmMuseum.FirearmMuseum.persistence.mappers.idMappers.CaliberIdMapper;
import com.FirearmMuseum.FirearmMuseum.persistence.mappers.CaliberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.io.InvalidObjectException;
import java.util.List;

@Component
public class PostgresCaliberDao implements CaliberDao {

    @Autowired
    private JdbcTemplate template;

    @Override
    public List<Caliber> getAllCalibers() {

        List<Caliber> allCalibers = template.query("SELECT * FROM \"Caliber\"",
                new CaliberMapper());

        return allCalibers;
    }

    @Override
    public Caliber addCaliber(Caliber toAdd) throws InvalidObjectException {

        if(toAdd==null)
            throw new InvalidObjectException("The entered caliber was null");
        if(toAdd.getCaliberId()==null)
            throw new IllegalArgumentException("the entered caliber Id was null");
        if(toAdd.getCaliberSize()==null)
            throw new IllegalArgumentException("the entered caliber size was null");
        if(toAdd.getCaliberUnit()==null)
            throw new IllegalArgumentException("the entered caliber unit was null");


        try{
            Integer caliberId = template.queryForObject("INSERT INTO \"Caliber\" (\"calibersize\",\"caliberunit\",\"caliberdescription\")" +
                    "VALUES (?,?,?) RETURNING \"caliberid\";",
                    new CaliberIdMapper(),
                    toAdd.getCaliberSize(),
                    toAdd.getCaliberUnit(),
                    toAdd.getCaliberDescription());
                    toAdd.setCaliberId(caliberId);
        } catch (DataIntegrityViolationException e){
            throw new DataIntegrityViolationException("an invalid Id was entered");
        }

        if(toAdd.getCaliberId()==null){
            throw new IllegalArgumentException("the caliber id was null");
        }
        return toAdd;
    }

    @Override
    public void removeCaliberById(Integer id) {
        boolean idEXists = false;
        for(int i = 0;i < getAllCalibers().size() && !idEXists;i++){
            if(getAllCalibers().get(i).getCaliberId().equals(id))
                idEXists=true;
        }

        if(idEXists) {
            template.update("DELETE FROM \"Caliber\"" +
                    "WHERE \"Caliber\".caliberid = '" + id + "';");
        } else
            throw new IllegalArgumentException("The caliber with that id doesn't exist");
    }

    @Override
    public void editCaliber(Integer id, Caliber toEdit) {

        boolean idExists = false;
        for (int i = 0; i < getAllCalibers().size(); i++) {
            if(getAllCalibers().get(i).getCaliberId().equals(id)){
                idExists=true;
            }
        }

        if(!idExists)
            throw new IllegalArgumentException("The id entered does not exist");

        String newCaliberUnit = toEdit.getCaliberUnit();
        Double newCaliberSize = toEdit.getCaliberSize();
        String newCaliberDescription = toEdit.getCaliberDescription();
        Caliber original = getCaliberById(id);

        if(newCaliberSize!=null){
            template.update("UPDATE \"Caliber\" SET \"calibersize\" = '" + newCaliberSize + "' WHERE \"caliberid\" = '" + id + "';");
            original.setCaliberSize(newCaliberSize);
        }
        if(newCaliberUnit!=null){
            template.update("UPDATE \"Caliber\" SET \"caliberunit\" = '" + newCaliberUnit + "' WHERE \"caliberid\" = '" + id + "';");
            original.setCaliberUnit(newCaliberUnit);
        }
        if(newCaliberDescription!=null){
            template.update("UPDATE \"Caliber\" SET \"caliberdescription\" = '" + newCaliberDescription + "' Where \"caliberid\" = '" + id + "';");
            original.setCaliberDescription(newCaliberDescription);
        }
    }

    @Override
    public Caliber getCaliberById(Integer id) {
        Caliber toReturn = null;

        for (int i = 0; i < getAllCalibers().size(); i++) {
            if(id == getAllCalibers().get(i).getCaliberId()){
                toReturn = getAllCalibers().get(i);
            }
        }
        if(toReturn==null)
            throw new IllegalArgumentException("Caliber with id " + id + " does not exist");
        return toReturn;
    }
}
