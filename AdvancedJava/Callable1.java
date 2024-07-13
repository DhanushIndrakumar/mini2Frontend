import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

public class Callable1 {
    public static void main(String[] args) {
        // Create an ExecutorService with a single thread
        ExecutorService executorService = Executors.newSingleThreadExecutor();

        // Create a Callable task
        Callable<String> task = () -> {
            Thread.sleep(2000); // Simulate some time-consuming operation
            return "Hello from Callable!";
        };

        // Submit the task to the executorService, getting a Future object
        Future<String> future = executorService.submit(task);

        // Perform other operations while waiting for the task to complete

        try {
            // Retrieve the result of the task when it's done
            String result = future.get(); // This call blocks until the result is available
            System.out.println("Result: " + result);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        // Shutdown the executorService
        executorService.shutdown();
    }
}
