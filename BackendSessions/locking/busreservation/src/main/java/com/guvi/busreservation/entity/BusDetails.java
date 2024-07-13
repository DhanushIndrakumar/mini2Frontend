package com.guvi.busreservation.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name="bustable")
@AllArgsConstructor
@NoArgsConstructor
public class BusDetails {

    @Id
    @GeneratedValue
    private Long id;

    private LocalDateTime departDateTime;
    private Integer capacity;
    private String number;

    //mapping ticket entity
    @OneToMany(mappedBy = "busDetails")
    private Set<Ticket> tickets;

//    @Version
//    private Long version;

    //This one as doubt
    public void addTicket(Ticket ticket){
        //while creating bus u need to add a ticket
        ticket.setBusDetails(this);
        getTickets().add(ticket);
    }



}
