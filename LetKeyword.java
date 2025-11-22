public class LeyKeyword {

    public void main(String[]args)
    {
        System.out.println("Java variable scope definition");
        System.out.println("---------- Global Level -------");

        String variable = "Global variable";
        System.out.println(variable);

        if(true)
        {
            System.out.println(variable);
            System.out.println("---- Block level ---- ");
            String variable = "Local variable"; // variable is already defined
            System.out.println(variable);
        }

        System.out.println(variable);
    }

}
