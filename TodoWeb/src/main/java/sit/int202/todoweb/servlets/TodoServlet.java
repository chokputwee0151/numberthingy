package sit.int202.todoweb.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import sit.int202.todoweb.models.Task;
import sit.int202.todoweb.models.TaskList;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "TodoServlet", value = "/Todo")
public class TodoServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        TaskList taskList = new TaskList();
        PrintWriter out = response.getWriter();

        out.println("<html><body>");
        out.println("<h1>Todo List</h1>");
        out.println("<ul>");

        for(Task task: taskList.getTasks()){
            out.println("<li>"+task.getTitle()+"</li>");
        }
        out.println("</ul>");
        out.println(("</body></html>"));
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
