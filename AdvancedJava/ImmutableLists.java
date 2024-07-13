import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ImmutableLists {
    public static void main(String[] args) {
        List<String> l=new ArrayList<String>();
        l.add("apple");
        l.add("banana");
        l.add("cherry");
        l.add("mango");
        l.add("orange");
        List<String> immutableList=Collections.unmodifiableList(l);
        try{
            immutableList.add("grape");
        }catch(Exception e){
            System.out.println("Tried to add an element to an unmodifieable list");
        }
        System.out.println(immutableList);
        
    }
    
}
