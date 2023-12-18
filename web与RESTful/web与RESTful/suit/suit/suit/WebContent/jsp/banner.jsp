<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" +request.getServerPort() + path;
%>    
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>主界面</title>
<link rel="stylesheet" href="<%=basePath%>/css/banner.css">
<script type="text/javascript" src="<%=basePath%>/js/jquery-3.3.1.js"></script>
</head>
<body>
	<header>
        <div class="name">当前用户：${sessionScope.user.relname}</div>
        <div class="logo">
            <img src="../images/ui/themeBanner.png">
        </div>
    </header>
</body>
</html>