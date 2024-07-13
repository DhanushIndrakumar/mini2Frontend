package controller;


import dto.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.CustomerService;
import java.util.List;

@RestController
        //RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/cust/all")
    public List<Customer> getAllCustomers(){
        return customerService.loadAllCustomer();

    }
}
