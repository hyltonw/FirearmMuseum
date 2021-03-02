package com.FirearmMuseum.FirearmMuseum.persistence;

import com.FirearmMuseum.FirearmMuseum.models.Caliber;
import com.FirearmMuseum.FirearmMuseum.persistence.Dao.CaliberDao;
import com.FirearmMuseum.FirearmMuseum.persistence.mappers.CaliberMapper;
import org.springframework.beans.factory.annotation.Autowired;
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
            Integer caliberId = template.queryForObject("INSERT INTO \"Caliber\" (\"calibersize\",\"caliberunit\")" +
                    "VALUES (?,?) RETURNING \"caliberid\";",
                    new )
        }
    }

    @Override
    public Caliber removeCaliberById(Integer id) {
        return null;
    }

    @Override
    public void editCaliber(Integer id, Caliber toEdit) {

    }

    @Override
    public Caliber getCaliberById(Integer id) {
        return null;
    }
}
