import java.util.ArrayList;
import java.util.List;

public class TestCustomer {
    public static void main(String[] args) {
        List<Customer> customers = new ArrayList<>() ;
        customers.add(new Customer(1,"Jack")) ;
        customers.add(new Customer(2,"James")) ;
        customers.add(new Customer(3,"Kelly")) ;

        Customer james = new Customer(2,"James") ;

        System.out.println(customers.contains(james));

    }
}
