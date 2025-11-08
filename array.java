import java.util.Arrays;

class Sample {
    public static void dummyMethod() {
        int[] numbers = new int[5]; // declaration of array
        numbers[0] = 1;
        numbers[1] = 2;
        numbers[2] = 3;
        numbers[3] = 4;
        numbers[4] = 5;

        double[] dNumbers = { 6, 7, 8, 9, 10 }; // declaration of array
        System.out.println(dNumbers[0]);

        int[] myNumbers = new int[] { 1, 2, 3, 4, 5, 6 }; // declaration of array
        System.out.println(Arrays.toString(myNumbers)); // cannot print context as name of myNumbers

    }

    public static void main(String[] args) {
        dummyMethod();
    }
}