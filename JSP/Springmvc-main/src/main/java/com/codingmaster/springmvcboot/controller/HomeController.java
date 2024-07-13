package com.codingmaster.springmvcboot.controller;


import com.codingmaster.springmvcboot.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    private UserService userService;

    public HomeController(UserService userService) {
        System.out.println("Constructor Injection");
        this.userService = userService;
    }

    @RequestMapping("/")
    public String home() {
        return "home";
    }

    @RequestMapping("/createUser")
    public String registerUser() {
        String msg = userService.saveUser();
        System.out.println(msg);
        return "success";
    }

    @GetMapping("/test")
    public String home(Model model) {
        model.addAttribute("message", "Welcome to our Spring MVC App!");
        return "index";
    }

}
