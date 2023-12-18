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
<style>
*{
	margin:0;
	padding:0;
}
html{
	background-color:rgb(230,238,238);
}
.left{
	margin: 0 5px 0 0;
	border: 2px solid rgb(155,188,233);
	border-left: none;
	background-color:rgb(231,240,255);
}
.left .operation{
    margin: 13px 13px;
}
.left .operation img{
    width: 100px;
}
</style>
<script type="text/javascript" src="<%=basePath%>/js/jquery-3.3.1.js"></script>
</head>
<body>
	<div class="left">
	    <div class="operation">
	        <img src="<%=basePath%>/images/ui/self.png" alt="" id="workspace" name="content">
	    </div>
	    <div class="operation">
	        <img src="<%=basePath%>/images/ui/userList.png" alt="" id="user_list" name="content">
	    </div>
	    <div class="operation">
	        <img src="<%=basePath%>/images/ui/catalog.png" alt="" id="cloth_category_list" name="content">
	    </div>
	    <div class="operation">
	        <img src="<%=basePath%>/images/ui/suits.png" alt="" id="cloth_list" name="content">
	    </div>
	    <div class="operation">
	        <img src="<%=basePath%>/images/ui/mySuits.png" alt="" id="virtual_dress" name="content">
	    </div>
	    <div class="operation">
	        <img src="<%=basePath%>/images/ui/exit.png" alt="" id="exit">
	    </div>
    </div>
</body>

<script type="text/javascript">

	$(function(){
		
		//点击切换右侧界面
		$("img[name='content']").click(function(){
			if($(this).attr("id") == "user_list" || $(this).attr("id") == "cloth_category_list" || $(this).attr("id") == "cloth_list"){
				if("${sessionScope.user.isadmin}" == "1"){
					parent.document.getElementById("content").src="content/"+this.id+".jsp"; 
				}else{
					alert("您尚无权限！")
				}				
			}else{
				parent.document.getElementById("content").src="content/"+this.id+".jsp"; 
			}
			
		})
		//退出操作，删除当前用户session
		$("#exit").click(function(){
			var msg = "点击确认退出系统！"; 
			if (confirm(msg)){ 
				$.ajax({
	                url: "<%=basePath%>/system/exit",  
	                type:"post",
	                contentType: "application/json",  
	                success:function(result){
	                	if(result.code == 0){
	                		window.parent.location.href = "<%=basePath%>";
	                	}else{
	                		alert("退出系统异常！");	
	                	}
	                }
               	}); 
			}
		}) 
	})
	
</script> 
</html>