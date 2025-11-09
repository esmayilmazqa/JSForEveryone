public class VarKeyword {

    static String greeting = "Hi";
    static String scopeControl = "Global";

    public static void main(String[] args) {
        System.out.println("From Global : " + scopeControl);
        greeting = "Hello from main";
        setMsg();
        System.out.println(greeting);

        String scopeControl = "main";
        System.out.println("From main : " + scopeControl);

    }

    static void setMsg() {
        greeting = "Hello from function";
        System.out.println(greeting);

        String scopeControl = "function";
        System.out.println("From function : " + scopeControl);

    }

}
