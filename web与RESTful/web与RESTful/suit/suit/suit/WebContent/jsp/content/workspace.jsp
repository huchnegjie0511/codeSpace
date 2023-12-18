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
<link rel="stylesheet" href="<%=basePath%>/css/basic.css">
<link rel="stylesheet" href="<%=basePath%>/css/workspace.css">
<script src="<%=basePath%>/icon/iconfont.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/jquery-3.3.1.js"></script>
</head>
<body>
	<div class="container">   
		<div class="title">
			<svg class="icon" aria-hidden="true">
			  <use xlink:href="#icon-sandian"></use>
			</svg>
			<p>个人账号管理</p>
		</div>
        <div class="login-box">
            <form autocomplete="off">
                <!-- <img src="head.svg" alt="" class="avatar"> -->
                <div class="input-group">
                    <div class="icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-iconfontyonghu"></use>
                        </svg>
                    </div>
                    <div>
                        <span class="input">${sessionScope.user.username}</span>
                    </div>
                </div>
                <div class="input-group focus">
                    <div class="icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shiming"></use>
                        </svg>
                    </div>
                    <div>
                         <input type="text" class="input" id="relname" name="relname" value="${sessionScope.user.relname}" placeholder="用户实名">
                    </div>
                </div>
                <div class="input-group">
                    <div class="icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-mima-copy"></use>
                        </svg>
                    </div>
                    <div>
                        <input type="password" class="input" id="password" name="password" placeholder="密码">
                        <span>密码如果不需要修改请本项为空</span>
                    </div>
                </div>
                <div class="input-group">
                    <div class="icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-mima1"></use>
                        </svg>
                    </div>
                    <div>
                        <input type="password" class="input" id="repeat" name="repeat" placeholder="确认密码">
                        <span>密码如果不需要修改请本项为空</span>
                    </div>
                </div>
                <div class="input-group gender">
                    <div class="icon" >
                        <svg class="icon" id="gender_icon" aria-hidden="true">
                            <use xlink:href="#icon-xingbie"></use>
                        </svg>
                    </div>
                    <div>
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
                <input type="button" class="btn" value="保存信息" id="save">
            </form>
        </div>
    </div>
</body>
<script type="text/javascript">
	$(function(){
		var user = {};
		
		//获取当前用户model并设置样式
		var model = "${sessionScope.user.model}";
		user.model = model;
		if(model.substring(0,1)=="m"){
			$("#gender_m").attr("checked",true);
			model_select("m");
		}else{
			$("#gender_w").attr("checked",true);
			model_select("w");
		};
		$(".model_select img").each(function(index,item){
			if(item.id == model){
				$(item).css("box-shadow","2px 2px 0px #635757 inset,-2px -2px 0px #fffcfc inset");
			}
		})
		
		//点击性别触发模型选择事件  
		$("#gender_m").click(function(){
			model_select("m");
		})
		$("#gender_w").click(function(){
			model_select("w");
		})
		function model_select(gender){

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
		
		//点击保存
		$("#save").click(function(){
			
			if($("#repeat").val() != $("#password").val()){
	            alert("前后密码不一致");
	        }else{
	        	if($("#password"!="")){
	        		user.password = $("#password").val();
	        	}
	        	if($("#relname").val()!=""){
	        		user.id = "${sessionScope.user.id}";
	        		user.username = "${sessionScope.user.username}";
	        		user.relname = $("#relname").val();
	        		user.password = "${sessionScope.user.password}";
	        		user.gender = $("input[name='gender']:checked").val();
	        		user.isadmin = "${sessionScope.user.isadmin}";
	        		//发送请求更新信息
	        		$.ajax({
                        url: "<%=basePath%>/system/updateSelfUser",  
                        type:"post",
                        contentType: "application/json",  
                        data:JSON.stringify(user),
                        success:function(result){
                        	if(result.code == 0){
                        		alert("保存成功！");
                        		window.parent.frames["banner"].location.reload();
                        	}else{
                        		alert("保存失败");	
                        	}
                        }
                    }) 
	    	    }else{
	    	        alert("请填写必要信息");
	    	    }
	        }
		})
		
		//设置模型选择边框阴影事件
		$(".model_select img").each(function(index,item){
		    $(item).click(function(){
		    	user.model = this.id;
		        $(".model_select").find("img").css("box-shadow","none");
		        $(item).css("box-shadow","2px 2px 0px #635757 inset,-2px -2px 0px #fffcfc inset");
		    });
		})
	});
	
</script> 
</html>