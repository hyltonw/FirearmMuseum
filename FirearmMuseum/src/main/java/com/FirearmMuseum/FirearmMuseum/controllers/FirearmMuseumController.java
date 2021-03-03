package com.FirearmMuseum.FirearmMuseum.controllers;

import com.FirearmMuseum.FirearmMuseum.exceptions.*;
import com.FirearmMuseum.FirearmMuseum.models.*;
import com.FirearmMuseum.FirearmMuseum.services.FirearmMuseumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.InvalidObjectException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class FirearmMuseumController {

    @Autowired
    FirearmMuseumService service;

    @GetMapping("/firearms")
    public List<HydratedFirearm> getAllFirearms(){
        return service.getAllFirearms();
    }

    @PostMapping("/firearm/add")
    public ResponseEntity addFirearm(@RequestBody Firearm toAdd)  {
        try {
            Firearm completed = service.addFirearm(toAdd);
        } catch( InvalidFirearmException | InvalidFirearmAttributeException | InvalidManufactureIdException |
                InvalidCaliberIdException | InvalidFirearmTypeIdException | InvalidActionTypeIdException|
                DataIntegrityViolationException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(toAdd);
    }

    @DeleteMapping("/firearm/remove/{id}")
    public String removeFirearm(@PathVariable Integer id) {
        try {
            service.removeFirearmById(id);
        } catch( InvalidFirearmIdException e){
            return e.getMessage();
        }

        return "The firearm with id "+id+" was removed.";
    }

    @PostMapping("/firearm/edit/{id}")
    public String editFirearm(@PathVariable Integer id,@RequestBody Firearm toEdit){

        try {
            service.editFirearm(id,toEdit);
        } catch( InvalidFirearmIdException e){
            return e.getMessage();
        }

        return "The firearm with id "+id+" was edited.";

    }

    @GetMapping("/firearms/filtered")
    public List<Firearm> getFilteredFirearms(@RequestBody Firearm toSearch){
        return service.getFilteredFirearms(toSearch);
    }

    @GetMapping("/firearm/{id}")
    public ResponseEntity getFirearmById(@PathVariable Integer id){
        Firearm retrieved;
        try {
            retrieved = service.getFirearmById(id);
        } catch (InvalidFirearmIdException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        return ResponseEntity.ok(retrieved);
    }

    @GetMapping("/firearms/from/{startYear}/to/{endYear}")
    public List<Firearm> getFirearmsByYearRange(@PathVariable Integer startYear,@PathVariable Integer endYear){
        return service.getFirearmsByYearRange(startYear,endYear);
    }




    @GetMapping("/actiontype")
    public List<ActionType> getAllActionTypes(){
        return service.getAllActionTypes();
    }

    @PostMapping("/actiontype/add")
    public ResponseEntity addActionType(@RequestBody ActionType toAdd) throws InvalidObjectException {
        ActionType completed = service.addActionType(toAdd);

        return ResponseEntity.ok(toAdd);
    }

    @DeleteMapping("/actiontype/remove/{id}")
    public String removeActionType(@PathVariable Integer id) {

        service.removeActionTypeById(id);

        return "The action type with id "+id+" was removed.";
    }

    @PostMapping("/actiontype/edit/{id}")
    public String editActionType(@PathVariable Integer id,@RequestBody ActionType toEdit){

        service.editActionType(id,toEdit);

        return "The action type with id "+id+" was edited.";

    }

    @GetMapping("/actiontype/{id}")
    public ResponseEntity getActionTypeById(@PathVariable Integer id){

        ActionType retrieved = service.getActionTypeById(id);

        return ResponseEntity.ok(retrieved);
    }




    @GetMapping("/caliber")
    public List<Caliber> getAllCalibers(){
        return service.getAllCalibers();
    }

    @PostMapping("/caliber/add")
    public ResponseEntity addCaliber(@RequestBody Caliber toAdd) throws InvalidObjectException {
        Caliber completed = service.addCaliber(toAdd);

        return ResponseEntity.ok(toAdd);
    }

    @DeleteMapping("/caliber/remove/{id}")
    public String removeCaliber(@PathVariable Integer id) {

        service.removeCaliberById(id);

        return "The caliber with id "+id+" was removed.";
    }

    @PostMapping("/caliber/edit/{id}")
    public String editCaliber(@PathVariable Integer id,@RequestBody Caliber toEdit){

        service.editCaliber(id,toEdit);

        return "The caliber with id "+id+" was edited.";

    }

    @GetMapping("/caliber/{id}")
    public ResponseEntity getCaliberById(@PathVariable Integer id){

        Caliber retrieved = service.getCaliberById(id);

        return ResponseEntity.ok(retrieved);
    }




    @GetMapping("/firearmtype")
    public List<FirearmType> getAllFirearmTypes(){
        return service.getAllFirearmTypes();
    }

    @PostMapping("/firearmtype/add")
    public ResponseEntity addFirearmType(@RequestBody FirearmType toAdd) throws InvalidObjectException {
        FirearmType completed = service.addFirearmType(toAdd);

        return ResponseEntity.ok(toAdd);
    }

    @DeleteMapping("/firearmtype/remove/{id}")
    public String removeFirearmType(@PathVariable Integer id) {

        service.removeFirearmTypeById(id);

        return "The firearm type with id "+id+" was removed.";
    }

    @PostMapping("/firearmtype/edit/{id}")
    public String editFirearmType(@PathVariable Integer id,@RequestBody FirearmType toEdit){

        service.editFirearmType(id,toEdit);

        return "The firearm type with id "+id+" was edited.";

    }

    @GetMapping("/firearmtype/{id}")
    public ResponseEntity getFirearmTypeById(@PathVariable Integer id){

        FirearmType retrieved = service.getFirearmTypeById(id);

        return ResponseEntity.ok(retrieved);
    }




    @GetMapping("/manufacturer")
    public List<Manufacturer> getAllManufacturers(){
        return service.getAllManufacturers();
    }

    @PostMapping("/manufacturer/add")
    public ResponseEntity addManufacturer(@RequestBody Manufacturer toAdd) throws InvalidObjectException {
        Manufacturer completed = service.addManufacturer(toAdd);

        return ResponseEntity.ok(toAdd);
    }

    @DeleteMapping("/manufacturer/remove/{id}")
    public String removeManufacturer(@PathVariable Integer id) {

        service.removeManufacturerById(id);

        return "The manufacturer with id "+id+" was removed.";
    }

    @PostMapping("/manufacturer/edit/{id}")
    public String editManufacturer(@PathVariable Integer id,@RequestBody Manufacturer toEdit){

        service.editManufacturer(id,toEdit);

        return "The manufacturer with id "+id+" was edited.";

    }

    @GetMapping("/manufacturer/{id}")
    public ResponseEntity getManufacturerById(@PathVariable Integer id){

        Manufacturer retrieved = service.getManufacturerById(id);

        return ResponseEntity.ok(retrieved);
    }





    //getAll        @get    ActionType
    //add           @post   Caliber
    //removeById    @delete FirearmType
    //edit(by id)   @post   Manufacturer
    //getById       @get


}
