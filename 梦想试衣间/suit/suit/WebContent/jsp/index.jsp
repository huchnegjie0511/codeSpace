<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + 
                                      request.getServerName() + ":" +
                                      request.getServerPort() + path;
%>    
<html>
<head>
<title>梦想试衣间</title>
<style type="text/css">
*{
	padding: 0;
    margin: 0;
    box-sizing: border-box;
    background:rgb(240,240,240);
}
#content{
	margin: 5px 0 0 0;
	border: 2px solid rgb(155,188,233);
}
</style>
</head>
<frameset rows="55px,*" border="0" id="bg">
	<frame src="banner.jsp" id="bannner" name="banner"/>
	<frameset cols="140px,*" border="0" id="content-box">
		<frame src="menu.jsp" id="menu" name="menu"/>
		<frame src="content/workspace.jsp" id="content" name="workspace"/>
 	</frameset>
 </frameset>
</html>