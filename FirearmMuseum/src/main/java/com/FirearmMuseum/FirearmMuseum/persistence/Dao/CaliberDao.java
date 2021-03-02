package com.FirearmMuseum.FirearmMuseum.persistence.Dao;

import com.FirearmMuseum.FirearmMuseum.models.Caliber;

import java.io.InvalidObjectException;
import java.util.List;

public interface CaliberDao {
    List<Caliber> getAllCalibers();

    Caliber addCaliber(Caliber toAdd) throws InvalidObjectException;

    void removeCaliberById(Integer id);

    void editCaliber(Integer id, Caliber toEdit);

    Caliber getCaliberById(Integer id);

}
