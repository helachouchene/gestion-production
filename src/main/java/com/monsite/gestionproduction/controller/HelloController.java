package com.monsite.gestionproduction.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {
        return "Bienvenue dans l'application de gestion de production !";
    }
}
