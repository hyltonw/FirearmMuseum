package com.FirearmMuseum.FirearmMuseum.persistence;

import com.FirearmMuseum.FirearmMuseum.models.Caliber;

import java.util.List;

public interface CaliberDao {
    List<Caliber> getAllCalibers();

    Caliber addCaliber(Caliber toAdd);

    Caliber removeCaliberById(Integer id);

    void editCaliber(Integer id, Caliber toEdit);

    Caliber getCaliberById(Integer id);

}
