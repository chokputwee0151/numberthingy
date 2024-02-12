<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: INT202&204
  Date: 2/12/2024
  Time: 11:05 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Todo List</title>
</head>
<body>
<h1>Todo lists</h1>
<form action="add-todo" method="post">
    <input type="text" name="title" placeholder="Enter new Task">
    <input type="submit" value="Add">
</form>

<ul>
    <c:forEach items="${tasks}" var="task">
        <li>
                ${task.title}${task.status=="NOT_COMPLETED"?"[Not Completed]":"[Completed]"}
                <a href="completed-todo?title=${task.title}">Done</a>
                <a href="ToggleTodo?title=${task.title}">Toggle</a>
                    <a href="RemoveTodo?title=${task.title}">Remove</a>
        </li>
    </c:forEach>
</ul>
</body>
</html>
