import java.util.ArrayList;
import java.util.Arrays;

public class varType {
    public static void main(String[] args) {

        var numType=10;
        System.out.println(numType);//No error
        var arrays=new int[]{12,34,45,56};
        for(int i:arrays){
            System.out.println(i);
        }
        System.out.println(arrays.getClass().getSimpleName());
        var arrays1=new ArrayList<>(Arrays.asList(arrays));
        System.out.println(arrays1.getClass().getSimpleName());
    }
    
}
