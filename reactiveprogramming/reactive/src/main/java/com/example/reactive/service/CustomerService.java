package service;

import dao.CustomerDao;
import dto.Customer;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    private CustomerDao customerDao;

    public List<Customer> loadAllCustomer(){
        long start=System.currentTimeMillis();
        List<Customer> customers=customerDao.getCustomers();
        long end=System.currentTimeMillis();
        System.out.println("Total execution:"+(end-start));
        return customers;

    }

}
