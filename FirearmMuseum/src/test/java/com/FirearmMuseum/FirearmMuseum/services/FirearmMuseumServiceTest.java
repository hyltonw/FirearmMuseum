package com.FirearmMuseum.FirearmMuseum.services;

import com.FirearmMuseum.FirearmMuseum.models.ActionType;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ExtendWith(SpringExtension.class)
class FirearmMuseumServiceTest {

    @Autowired
    FirearmMuseumService service;

    @Test
    void getAllActionTypes() {
        List<ActionType> list = service.getAllActionTypes();
        System.out.println(list.get(0).getActionType());
    }
}