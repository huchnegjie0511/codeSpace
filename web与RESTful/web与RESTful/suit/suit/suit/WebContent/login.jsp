<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" +request.getServerPort() + path;
%>    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="css/login.css">
    <script src="icon/iconfont.js"></script>
    <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
    <title>登录界面</title>
</head>

<body>
    <img src="images/kkk.jpeg" alt="" class="wave">
    	
    
    <div class="container">
    	
    	<!--场景图-->
        <div class="img">
        	
        	 
            <!-- <img src="images/back.png" alt=""> -->
        </div>
        
        <!--输入框-->
        <div class="login-box">
        	
            <form autocomplete="off">
            	<!--标题-->
                <h2 class="title">用户登录</h2>
                <!--头像-->
                <!--<img src="images/head.svg" alt="" class="avatar">-->
                <!--输入1-->
                <div class="input-group">
                    <div class="icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-iconfontyonghu"></use>
                        </svg>
                    </div>
                    <div>
                        <h5>用户名</h5>
                        <input type="text" class="input" id="username" name="username">
                    </div>
                </div>
                <!--输入2-->
                <div class="input-group">
                    <div class="icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-mima-copy"></use>
                        </svg>
                    </div>
                    <div>
                        <h5>密码</h5>
                        <input type="password" class="input" id="password" name="password">
                    </div>
                </div>
           
                <input type="button" class="btn" id="login" value="登录">
                  <input type="button" class="btn" id="reg" value="注册">
            </form>
        </div>
    </div>
    
    <script type="text/javascript">
    
    	//设置输入框效果
        var inputs = document.querySelectorAll(".input");
        function focusFunction(){
            let parentNode = this.parentNode.parentNode;
            parentNode.classList.add('focus');
        }
        function blurFunction(){
            let parentNode = this.parentNode.parentNode;
            if(this.value == ''){
                parentNode.classList.remove('focus');
            }
        }
        inputs.forEach(function(input){
            input.addEventListener('focus',focusFunction);
            input.addEventListener('blur',blurFunction);
        });
        
        //登录事件
        $("#login").click(function(){  	
    	    var username = $("#username"); 
    	    var password = $("#password");
    	    if(username.val()=="" || username.val() == null || password.val()=="" || password.val()==null){
    	    	alert("用户名或密码不能为空！");
    	    }else{
    	    	var user = {};
        	    user.username = username.val();
        	    user.password = password.val(); 
        	    $.ajax({
                    url: "<%=basePath%>/system/login",  
                    type:"post",
                    contentType: "application/json",  
                    data:JSON.stringify(user),
                    success:function(result){
                    	if(result.code == 0){
                    		alert("登录成功！");
                    		window.location = "<%=basePath%>/jsp/index.jsp";
                    	}else{
                    		alert("用户名或者密码错误！");	
                    	}
                    }
                }) 
    	    } 
    	});
        
      //登录事件
        $("#reg").click(function(){  	
        	window.location = "<%=basePath%>/reg.jsp";
    	});
        
    </script>
</body>
</html>