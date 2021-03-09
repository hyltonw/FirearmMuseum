package com.FirearmMuseum.FirearmMuseum.services;

import com.FirearmMuseum.FirearmMuseum.exceptions.*;
import com.FirearmMuseum.FirearmMuseum.models.*;
import com.FirearmMuseum.FirearmMuseum.persistence.Dao.CaliberDao;
import com.FirearmMuseum.FirearmMuseum.persistence.Dao.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.InvalidObjectException;
import java.util.ArrayList;
import java.util.List;

@Component
public class FirearmMuseumService {

    @Autowired
    FirearmDao firearmDao;

    @Autowired
    CaliberDao caliberDao;

    @Autowired
    ActionTypeDao actionTypeDao;

    @Autowired
    FirearmTypeDao firearmTypeDao;

    @Autowired
    ManufacturerDao manufacturerDao;

//    @Autowired
//    CaliberDao caliberDao;

//    public List<Firearm> getAllFirearms(){
//        return firearmDao.getAllFirearms();
//    }

    public List<HydratedFirearm> getAllHydratedFirearms(){

        List<Firearm> arr = firearmDao.getAllFirearms();
        List<HydratedFirearm> toReturn = new ArrayList<>();
        for (int i = 0; i < arr.size(); i++) {
            Firearm toHydrate = arr.get(i);
            HydratedFirearm toArray = new HydratedFirearm(toHydrate);

            toArray.setActionType(actionTypeDao.getActionTypeById(toHydrate.getActionTypeId()));
            toArray.setCaliber(caliberDao.getCaliberById(toHydrate.getCaliberId()));
            toArray.setFirearmType(firearmTypeDao.getFirearmTypeById(toHydrate.getFirearmTypeId()));
            toArray.setManufacturer(manufacturerDao.getManufacturerById(toHydrate.getManufacturerId()));
            toReturn.add(toArray);
        }

        return toReturn;
    }



    public List<Firearm> getAllFirearms(){
        return firearmDao.getAllFirearms();
    }

    public Firearm addFirearm(Firearm toAdd)throws InvalidFirearmTypeIdException, InvalidActionTypeIdException,
            InvalidCaliberIdException, InvalidManufactureIdException, InvalidFirearmAttributeException, InvalidFirearmException  {

        if(toAdd.getProductionDate() > 2021)
            throw new InvalidFirearmAttributeException(toAdd.getProductionDate() + " Has not happened yet.");
        if(toAdd.getProductionDate() < 1288)
            throw new InvalidFirearmAttributeException(toAdd.getProductionDate() + "  is too early for firearms.");

        return firearmDao.addFirearm(toAdd);
    }

    public void removeFirearmById(Integer id) throws InvalidFirearmIdException {
        firearmDao.removeFirearmById(id);
    }

    public void editFirearm(Integer id, Firearm toEdit) throws InvalidFirearmIdException {
        firearmDao.editFirearm(id,toEdit);
    }

    public List<Firearm> getFilteredFirearms(Firearm toSearch) {
        return firearmDao.getFilteredFirearms(toSearch);
    }

    public HydratedFirearm getFirearmById(Integer id) throws InvalidFirearmIdException {
        Firearm toHydrate = firearmDao.getFirearmById(id);
        HydratedFirearm toReturn = new HydratedFirearm(toHydrate);
        toReturn.setActionType(actionTypeDao.getActionTypeById(toHydrate.getActionTypeId()));
        toReturn.setCaliber(caliberDao.getCaliberById(toHydrate.getCaliberId()));
        toReturn.setFirearmType(firearmTypeDao.getFirearmTypeById(toHydrate.getFirearmTypeId()));
        toReturn.setManufacturer(manufacturerDao.getManufacturerById(toHydrate.getManufacturerId()));
        return toReturn;
    }

    public List<Firearm> getFirearmsByYearRange(int startYear, int endYear) {
        return firearmDao.getFirearmsByYearRange(startYear,endYear);
    }




    public List<ActionType> getAllActionTypes(){ return actionTypeDao.getAllActionTypes();}

    public ActionType addActionType(ActionType toAdd) throws InvalidObjectException { return actionTypeDao.addActionType(toAdd);}

    public void removeActionTypeById(Integer id){ actionTypeDao.removeActionTypeById(id);}

    public void editActionType(Integer id, ActionType toEdit){ actionTypeDao.editActionType(id, toEdit);}

    public ActionType getActionTypeById(Integer id){ return actionTypeDao.getActionTypeById(id);}




    public List<Caliber> getAllCalibers(){ return caliberDao.getAllCalibers();}

    public Caliber addCaliber(Caliber toAdd) throws InvalidObjectException { return caliberDao.addCaliber(toAdd);}

    public void removeCaliberById(Integer id) { caliberDao.removeCaliberById(id);}

    public void editCaliber(Integer id, Caliber toEdit){ caliberDao.editCaliber(id, toEdit);}

    public Caliber getCaliberById(Integer id) { return caliberDao.getCaliberById(id);}




    public List<FirearmType> getAllFirearmTypes(){ return firearmTypeDao.getAllFirearmTypes();}

    public FirearmType addFirearmType(FirearmType toAdd) throws InvalidObjectException { return firearmTypeDao.addFirearmType(toAdd);}

    public void removeFirearmTypeById(Integer id) { firearmTypeDao.removeFirearmTypeById(id);}

    public void editFirearmType(Integer id, FirearmType toEdit ) { firearmTypeDao.editFirearmType(id,toEdit);}

    public FirearmType getFirearmTypeById (Integer id){ return firearmTypeDao.getFirearmTypeById(id);}




    public List<Manufacturer> getAllManufacturers(){ return manufacturerDao.getAllManufacturers();}

    public Manufacturer addManufacturer(Manufacturer toAdd) throws InvalidObjectException { return manufacturerDao.addManufacturer(toAdd);}

    public void removeManufacturerById(Integer id){ manufacturerDao.removeManufacturerById(id);}

    public void editManufacturer(Integer id, Manufacturer toEdit){ manufacturerDao.editManufacturer(id,toEdit);}

    public Manufacturer getManufacturerById( Integer id) { return manufacturerDao.getManufacturerById(id);}

}
