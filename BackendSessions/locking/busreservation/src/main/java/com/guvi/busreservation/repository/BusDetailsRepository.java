package com.guvi.busreservation.repository;

import com.guvi.busreservation.entity.BusDetails;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;

import java.util.Optional;

public interface BusDetailsRepository extends JpaRepository<BusDetails,Long> {
    //get the difference between OPTIMISTIC AND OPTIMISTIC_FORCE_INCREMENT
    //@Lock(LockModeType.OPTIMISTIC_FORCE_INCREMENT)
    //Optional<BusDetails> findWithLockingById(Long id);
    //2 thread will be created

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    Optional<BusDetails> findWithLockingById(Long id);
}
