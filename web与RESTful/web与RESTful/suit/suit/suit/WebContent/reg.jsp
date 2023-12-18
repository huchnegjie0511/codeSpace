<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + 
                                      request.getServerName() + ":" +
                                      request.getServerPort() + path;
%>    
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<title>注册界面</title>
<link rel="stylesheet" href="css/login.css">
<link rel="stylesheet" href="css/reg.css">
<script src="icon/iconfont.js"></script>
<script type="text/javascript" src="js/jquery-3.3.1.js"></script>
</head>
<body>
	   <img src="images/kkk.jpeg" alt="" class="wave">
	  
	   
    <div class="container">
        <div class="img">
         <!--   <img src="images/back.png" alt=""> -->
        </div>
        <div class="login-box">
            <form autocomplete="off">
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
                <div class="input-group">
                    <div class="icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shiming"></use>
                        </svg>
                    </div>
                    <div>
                        <h5>用户实名</h5>
                        <input type="text" class="input" id="relname" name="relname">
                    </div>
                </div>
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
                <div class="input-group">
                    <div class="icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-mima1"></use>
                        </svg>
                    </div>
                    <div>
                        <h5>密码确认</h5>
                        <input type="password" class="input" id="repeat" name="repeat">
                    </div>
                </div>
                <div class="input-group gender">
                    <div class="icon" >
                        <svg class="icon" id="gender_icon" aria-hidden="true">
                            <use xlink:href="#icon-xingbie"></use>
                        </svg>
                    </div>
                    <div>
                        <h5>性别</h5>
                        <div class="select-gender">
                            <input type="radio" name="gender" value="0" id="gender_m"><h4>男</h4>
                            <input type="radio" name="gender" value="1" id="gender_w"><h4>女</h4>
                        </div>
                    </div>    
                </div>
                <div class="model_select_btn">模型选择</div>
                <div class="model_select">
                    <div class="model_man">
                        <img src="<%=basePath%>/images/data/model/mheadA.png" id="mheadA">
                        <img src="<%=basePath%>/images/data/model/mheadB.png" id="mheadB">
                    </div>
                    <div class="model_woman">
                        <img src="<%=basePath%>/images/data/model/wheadA.png" id="wheadA">
                        <img src="<%=basePath%>/images/data/model/wheadB.png" id="wheadB">
                    </div>
                </div>
                <a href="login.jsp">已有账号，去登录?</a>
                <input type="button" class="btn2" id="reg" value="注册">
            </form>
        </div>
    </div>
    <script>
    	//设置输入框效果
	    var inputs = document.querySelectorAll(".input");
	    function focusFunction(){
	        var parentNode = this.parentNode.parentNode;
	        parentNode.classList.add('focus');
	    }
	    function blurFunction(){
	        var parentNode = this.parentNode.parentNode;
	        if(this.value == ''){
	            parentNode.classList.remove('focus');
	        }
	    }
	    inputs.forEach(function(input){
	        input.addEventListener('focus',focusFunction);
	        input.addEventListener('blur',blurFunction);
	    });
	    
		//点击性别触发模型选择事件 
		$("#gender_m").click(function(){
			model_select("m");
		})
		$("#gender_w").click(function(){
			model_select("w");
		})
        function model_select(gender){
			$("#gender_icon").css("color","rgb(108,99,255)");
			if(gender=="m"){
				$(".model_select").css("display","block");
			    $(".model_woman").css("display","none");
			    $(".model_man").css("display","flex");
			}else{
				$(".model_select").css("display","block");
			    $(".model_man").css("display","none");
			    $(".model_woman").css("display","flex");
			}
			
		}
		
        // 检验表单数据
        function validate_form(user){
        	//检验前后密码
			if(user.password != $("#repeat").val()){
				alert("前后密码不一致");
				return false;
			}
        	//检验用户名
			var username = user.username;
			var regName = /^[a-zA-Z0-9_-]{5,16}$/;
			if(!regName.test(username)){
				alert("用户名须为5-16位英文和数字组合");
				return false;
			}
			//校验密码
			var password = user.password;
			var regPassword = /^[0-9a-zA-Z]{3,16}$/;
			if(!regPassword.test(password)){
				alert("密码须为3~16位数字或字母组合");
				return false;
			}
			return true;
		}
        
        //点击注册
        var user = {};
        $("#reg").click(function(){
        	
            if($("#username").val()!="" && $("#relname").val()!="" && $("#repeat").val()!="" && $("#password").val()!="" && user.model != ""){
 	
            	user.username = $("#username").val();
            	user.password = $("#password").val();
            	user.relname = $("#relname").val();
            	user.gender = $("input[name='gender']:checked").val();
            	user.isadmin = 0;
            	if(validate_form(user)){
                	$.ajax({
                        url: "<%=basePath%>/system/register",  
                        type:"post",
                        contentType: "application/json",  
                        data:JSON.stringify(user),
                        success:function(result){
                        	if(result.code == 0){
                        		alert("注册成功！");
                        		window.location = "<%=basePath%>/login.jsp";
                        	}else{
                        		alert("注册失败");	
                        	}
                        }
                    }) 
                }
            }else{
                alert("请填写全部信息");
            }
        })
        //设置模型选择边框阴影事件
        $(".model_select img").each(function(index,item){
            $(item).click(function(){
            	user.model = this.id;
                $(".model_select").find("img").css("box-shadow","none");
                $(item).css("box-shadow","2px 2px 0px #635757 inset,-2px -2px 0px #fffcfc inset")
            })
        })
    </script>
</body>
</html>