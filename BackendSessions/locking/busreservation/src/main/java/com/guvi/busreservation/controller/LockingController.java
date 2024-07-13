package com.guvi.busreservation.controller;


import com.guvi.busreservation.entity.BusDetails;
import com.guvi.busreservation.repository.BusDetailsRepository;
import com.guvi.busreservation.service.BookingService;
import org.apache.commons.lang3.function.Failable;
import org.apache.commons.lang3.function.FailableRunnable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

//import static jdk.internal.vm.PostVMInitHook.run;

@RestController
@RequestMapping("/api")
public class LockingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private BusDetailsRepository busDetailsRepository;

    //endpoint to book ticket  use executors service
    @GetMapping("/bookTicket")
    public void bookTicket(){
        ExecutorService executor= Executors.newFixedThreadPool(2);
        //executor reference to book 2 tickets simutaneoulsy
        executor.execute(run(bookingService::bookTicket1));//Thread 1
        executor.execute(run(bookingService::bookTicket2));//Thread 2


        //once the ticket is booked shutdown

    }
    //endpoint to add a new bus
    @GetMapping("/addBus")
    public void addBus(@RequestParam String number,@RequestParam int capacity){
        //create busDetails object
        BusDetails busDetails=new BusDetails();
        busDetails.setCapacity(capacity);
        busDetails.setNumber(number);
        busDetails.setDepartDateTime(LocalDateTime.now());

        //save the bus details
        busDetailsRepository.save(busDetails);

    }
    //helper function to handle exception in Runnaable class


    private Runnable run(FailableRunnable<Exception> runnable){
        return()->{
            try{
                runnable.run();
            }catch(Exception e) {
                e.printStackTrace();
            }
        };
        //return null;
    }
}
