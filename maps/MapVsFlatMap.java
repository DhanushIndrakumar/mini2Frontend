import java.util.List;
import java.util.stream.Collectors;

public class MapVsFlatMap {

    public static void main(String args[]){

        List<Customer> customers=EkartDataBase.getAll();

        //List<Customer> convert List<String>  ->Data Transformation
        List<String> emails=customers.stream().map(customer->customer.getEmail()).collect(Collectors.toList());
        System.out.println(emails);

        //how do I get all the phone numbers

        List<List<String>> phoneNumbers=customers.stream().map(customer->customer.getPhoneNumbers()).collect(Collectors.toList());
        System.out.println(phoneNumbers);
        //here we get List<List<String>>

        //Inorder to get List<String> use flatMap method
        List<String> flatPhoneNumbers=customers.stream().flatMap(customer->customer.getPhoneNumbers().stream()).collect(Collectors.toList());
        System.out.println(flatPhoneNumbers);
        //here we get List<String>


    }
    
}
