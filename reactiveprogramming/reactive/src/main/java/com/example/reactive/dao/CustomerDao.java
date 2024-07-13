package dao;


import dto.Customer;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Component
public class CustomerDao {

    public List<Customer> getCustomers(){
        return IntStream.rangeClosed(1,50)
                .peek(i->System.out.println("processing count"+i))
                .mapToObj(i->new Customer(i,"Customer"+i))
                .collect(Collectors.toList());

    }
}
