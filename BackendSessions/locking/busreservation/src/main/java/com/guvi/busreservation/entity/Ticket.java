package com.guvi.busreservation.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="ticket_details")
@AllArgsConstructor
@NoArgsConstructor
public class Ticket {

    @Id
    @GeneratedValue
    private Long id;

    private String firstName;

    private String lastName;

    private String gender;

//    @Version
//    private Long version;//which is used for optimistic LOCKING

    //map a relation between bus and ticket
    @ManyToOne(fetch=FetchType.LAZY)//lazily loaded one by one
    @JoinColumn(name="bus_id")
    private BusDetails busDetails;

}
