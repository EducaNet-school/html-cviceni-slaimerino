public class StringPrinter {
    public static void main(String[] args) {
        String input = "Hello World!";
        for (int i = 1; i <= input.length(); i++) {
            System.out.println(input.substring(0, i));
        }
    }
}
