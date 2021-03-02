package com.FirearmMuseum.FirearmMuseum.persistence;

import com.FirearmMuseum.FirearmMuseum.models.Caliber;
import com.FirearmMuseum.FirearmMuseum.persistence.mappers.CaliberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PostgresCaliberDao implements CaliberDao{

    @Autowired
    private JdbcTemplate template;

    @Override
    public List<Caliber> getAllCalibers() {

        List<Caliber> allCalibers = template.query("SELECT * FROM \"Caliber\"",
                new CaliberMapper());

        return allCalibers;
    }

    @Override
    public Caliber addCaliber(Caliber toAdd) {
        return null;
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
