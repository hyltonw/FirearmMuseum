package com.FirearmMuseum.FirearmMuseum.persistence.Dao;

import com.FirearmMuseum.FirearmMuseum.models.Firearm;
import com.FirearmMuseum.FirearmMuseum.models.FirearmType;

import java.util.List;

public interface FirearmTypeDao {

    List<FirearmType> getAllFirearmTypes();

    FirearmType addFirearmType(FirearmType toAdd);

    void editFirearmType(Integer id, FirearmType toEdit);

    FirearmType removeFirearmType(Integer id);

    FirearmType getFirearmTypeById(Integer id);
}
