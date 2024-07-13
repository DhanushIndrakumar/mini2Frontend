package com.codingmaster.springmvcboot.service;


import com.codingmaster.springmvcboot.repository.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;
    public  String saveUser(){
        boolean f=userDao.save();
        if(f){
            return "Registered sucessfully";

        }else{
            return "Server Error";
        }
    }
}
