import java.util.ArrayList;

public class TaskList {
    ArrayList<Task> tasks;

    public TaskList(){
        tasks = new ArrayList<>();
    }

    public void addTask(Task task){
        this.tasks.add(task);
    }

    public void addTask(String title){
        this.tasks.add(new Task(title));
    }

    public ArrayList<Task> getTasks() {
        return tasks;
    }

    public void setTasks(ArrayList<Task> tasks) {
        this.tasks = tasks;
    }

    public Task find(String title){
        for(Task task: tasks){
            if(task.getTitle().equals(title)){
                return task;
            }
        }
        return null;
    }
    public void remove(String title){
        Task task = this.find(title);
        if(task!=null){
        tasks.remove(task);
        }
    }
    @Override
    public String toString() {
        String x = "---------\nList Tasks: \n---------\n";
        for(Task task: tasks){
           x = x+task;
        }
        return x;
    }

}
