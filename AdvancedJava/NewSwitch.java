public class NewSwitch {
    public static void main(String[] args) {
        int num=2;
        switch(num){
            case 1,2,3,4->{
                System.out.println("The number is between 1-4 "+num);
            }
            case 5,6,7,8->{
                System.out.println("The number is between 5-8 "+num);
            }
            default->{
                System.out.println("The number is not between 1-8 "+num);
            }
           
        }
    }
    
}
