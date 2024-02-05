public class Task {
    public enum STATUS{

        NOT_COMPLETED,
        COMPLETED
    }
    private String title;
    private STATUS status;

    public Task(String title){
        this.title = title;
        this.status = STATUS.NOT_COMPLETED;
    }

    public String getTitle(){return title;}
    public void setTitle(String title){this.title = title;}

    public void completed(){this.status = STATUS.COMPLETED;}

    public void noCompleted(){this.status = STATUS.NOT_COMPLETED;}

    public void toggleStatus(){
        if (status == STATUS.NOT_COMPLETED) {
            this.status = STATUS.COMPLETED;
        }
        else {
            this.status = STATUS.NOT_COMPLETED;
        }

    }
    @Override
    public String toString() {
        return "Task: "+title+"\nStatus: "+(status==STATUS.NOT_COMPLETED ?"Not completed":"Completed")+"\n";
    }



}
