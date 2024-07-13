package com.guvi.busreservation.service;


import com.guvi.busreservation.entity.BusDetails;
import com.guvi.busreservation.entity.Ticket;
import com.guvi.busreservation.repository.BusDetailsRepository;
import com.guvi.busreservation.repository.TicketRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BusDetailsRepository busDetailsRepository;

    @Autowired
    private TicketRepository ticketRepository;

    //method to save ticket
    private void saveTicket(String firstName,
                            String lastName,
                            String gender,
                            BusDetails busDetails
                            ) throws SeatNotAvailable {
        //check if bus capacity is less than or equal to the number of tickets
        if(busDetails.getCapacity()<busDetails.getTickets().size()){
            throw new SeatNotAvailable();
        }

        Ticket ticket=new Ticket();
        ticket.setFirstName(firstName);
        ticket.setLastName(lastName);
        ticket.setGender(gender);
        //add ticket to the bus details

        busDetails.addTicket(ticket);
        ticketRepository.save(ticket);
    }

    //Two methods to book 2 tickets

    @Transactional
    public void bookTicket1() throws SeatNotAvailable, InterruptedException {
        //fetch bus details by id
        Optional<BusDetails> busOptional =busDetailsRepository.findWithLockingById(1L);

        //Optional<BusDetails> busOptional =busDetailsRepository.findById(1L);
        //check if bus is present or not
        if(busOptional.isPresent()){
            saveTicket("Lavish","Jain","Male",busOptional.get());
        }

        //create a delay
        Thread.sleep(1000);//1 second
    }

    //method 2
    //How would you ensure that you are making a transaction
    @Transactional //when are we performing concurrent operations
    public void bookTicket2() throws SeatNotAvailable, InterruptedException {
        //fetch bus details by id
        Optional<BusDetails> busOptional =busDetailsRepository.findWithLockingById(1L);

        // Optional<BusDetails> busOptional =busDetailsRepository.findById(1L);
        //check if bus is present or not
        if(busOptional.isPresent()){
            saveTicket("Swapnil","Selokar","Male",busOptional.get());
        }

        //create a delay
        Thread.sleep(1000);//1 second
    }



}
