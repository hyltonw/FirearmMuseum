package com.FirearmMuseum.FirearmMuseum.persistence.Dao;

import com.FirearmMuseum.FirearmMuseum.models.FirearmType;

import java.io.InvalidObjectException;
import java.util.List;

public interface FirearmTypeDao {

    List<FirearmType> getAllFirearmTypes();

    FirearmType addFirearmType(FirearmType toAdd) throws InvalidObjectException;

    void editFirearmType(Integer id, FirearmType toEdit);

    void removeFirearmTypeById(Integer id);

    FirearmType getFirearmTypeById(Integer id);
}
