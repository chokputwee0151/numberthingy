import java.util.ArrayList;
import java.util.List;

public class TestTask {
    public static void main(String[] args) {
        System.out.println("------Demo Todo------");
        Task task1 = new Task("Review Java");
        System.out.println(task1);

        System.out.println("------complete Task1------");
        task1.completed();
        System.out.println(task1);

        TaskList taskList = new TaskList();
        taskList.addTask(task1);
        taskList.addTask("intro Web App");
        System.out.println("--------------------");
        System.out.println("list tasks");
        System.out.println("--------------------");
        for(Task task: taskList.getTasks()){
            System.out.println(task);
        }

        System.out.println("--------No Complete Review Java--------");
        Task t1 = taskList.find("Review Java");
        t1.noCompleted();
        System.out.println(t1);

//        System.out.println(taskList);

        System.out.println("--------Remove Review Java--------");
        taskList.remove("Review Java");

        System.out.println(taskList);

    }
}
