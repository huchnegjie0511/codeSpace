<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" +request.getServerPort() + path;
    String dateTime = org.apache.commons.lang.time.DateFormatUtils.format(java.util.Calendar.getInstance(), "yyyyMMddHHmmss");
%>    
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>主界面</title>
<link rel="stylesheet" href="<%=basePath%>/css/basic.css">
<link rel="stylesheet" href="<%=basePath%>/css/user_list.css?ver=<%=dateTime%>">
<script src="<%=basePath%>/icon/iconfont.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/jquery-3.3.1.js"></script>
</head>
<body>
<div class="container"> 
 
		<div class="title">
			<svg class="icon" aria-hidden="true">
			  <use xlink:href="#icon-sandian"></use>
			</svg>
			<p>用户管理</p>
		</div>		
        <div class="table">
	        <div class="operations">
	            <div class="operation" id="delete_batch">
	                <svg class="icon" aria-hidden="true">
	                    <use xlink:href="#icon-lajitong"></use>
	                </svg>
	                <p>删除</p>
	            </div>
	            <div class="line"></div>
	            <div class="search" id="search">
	                <p>用户名：</p>
	                <input type="text" name="search" placeholder="用户名称模糊查询">
	                <div id="query">
		                <svg class="icon" aria-hidden="true">
		                    <use xlink:href="#icon-soushuo"></use>
		                </svg>
		                <p>搜索</p>
	                </div>
	            </div>
	        </div>
	        <div class="user_list">
	            <table id="user_table">
	                <thead>
	                    <tr>
	                        <td class="empty"></td>
	                        <td class="select"><input type="checkbox" name="checkall" id="checkall"></td>
	                        <td class="id">ID</td>
	                        <td class="username">用户名称</td>
	                        <td class="relname">用户实名</td>
	                        <td class="gender">性别</td>
	                        <td class="model">模型选择</td>
	                        <td class="isadmin">是否管理员</td>
	                        <td class="oper">操作</td>
	                        <td class="last"></td>
	                    </tr>
	                </thead>
	                <tbody>
	                    
	                </tbody>
	            </table>
	        </div>
	        <div class="page_bar">
	            <select id="pagesize">
	                <option value ="5">5</option>
	                <option value ="10">10</option>
	            </select>
	            <div class="line"></div>
	            <svg class="icon" aria-hidden="true" id="pre">
	                <use xlink:href="#icon-fanye-shangyiye"></use>
	            </svg>
	            <div class="line"></div>
	            <span class="first-font">第</span>
	            	<input type="text" name="index" class="index" value="1">
	            <span>页&nbsp</span>
	            <div class="line"></div>
	            <svg class="icon" aria-hidden="true" id="next">
	                <use xlink:href="#icon-fanye-xiayiye"></use>
	            </svg>
	        </div>
    	</div>
    	
    	
    	<!-- 修改表单 -->
		<div class="update-form">
            <form autocomplete="off">
                <div class="input-group">
                    <div class="icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-iconfontyonghu"></use>
                        </svg>
                    </div>
                    <div>
                        <span class="input" id="username"></span>
                    </div>
                </div>
                <div class="input-group focus">
                    <div class="icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shiming"></use>
                        </svg>
                    </div>
                    <div>
                         <input type="text" class="input" id="relname" name="relname" placeholder="用户实名">
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
                    	<span class="sex">性别</span>
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
                 <div class="input-group gender">
                    <div class="icon" >
                        <svg class="icon" id="gender_icon" aria-hidden="true">
                            <use xlink:href="#icon-xingbie"></use>
                        </svg>
                    </div>
                    <div>
                    	<span class="admin">管理员</span>
                        <div class="select-gender">
                            <input type="radio" name="isadmin" value="1" id="isadmin"><h4>是</h4>
                            <input type="radio" name="isadmin" value="0" id="noadmin"><h4>否</h4>
                        </div>
                    </div>    
                </div>
                <div class="ope">
	            	<button type="button" id="update" onsubmit='return false'>修改</button>
		        	<button type="button" id="cancel" onsubmit='return false'>取消</button>	
	            </div>
            </form>
        </div>     
    </div>
    <script type="text/javascript">
    
	    $(function(){
			to_page();
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
		
	    /*添加下方分页查询监听事件*/
    	$("#pagesize").change(function(){
    		to_page();
		});
    	$(".index").change(function(){
    		to_page();
		});
    	$("#pre").click(function() {
            var old = parseInt($(".index").val());
            if((old-1) <= 0){
            	return false;
            }else{
            	$(".index").val(old-1);
                to_page();
            }
        });
    	$("#next").click(function() {
            var old = parseInt($(".index").val());
            
            $(".index").val(old+1);
            to_page();
        });
    	function build_users(result){
	    	$("tbody").empty();
	    	$.each(result.data,function(index,item){
				var modifyBtn = $("<button></button>").addClass("modify").append("修改");	
				var deleteBtn = $("<button></button>").addClass("delete").append("删除");	
				
				var modelImg = $("<img src=''/>").addClass("modelImg").attr("src","<%=basePath%>/images/data/model/"+item.model+".png");
				var check_item = $("<input type='checkbox'/>").addClass("check_item");
				
				var indexTd =  $("<td></td>").append(index+1).attr("p",item.password);
				var checkTd = $("<td></td>").append(check_item);
				var idTd = $("<td></td>").append(item.id);
				var usernameTd = $("<td></td>").append(item.username);
				var relnameTd = $("<td></td>").append(item.relname);
				var genderTd = $("<td></td>").append(item.gender=="0"?"男":"女").attr("gender",item.gender);
				var modelTd = $("<td></td>").append(modelImg).attr("modelName",item.model);
				var isadminTd = $("<td></td>").append(item.isadmin=="1"?"是":"").attr("isadmin",item.isadmin);
				var operTd = $("<td></td>").append(modifyBtn).append(" ").append(deleteBtn);
				var lastTd = $("<td></td>");
				
				$("<tr></tr>").addClass("user_tr").append(indexTd)
				.append(checkTd)
				.append(idTd)
				.append(usernameTd)
				.append(relnameTd)
				.append(genderTd)
				.append(modelTd)
				.append(isadminTd)
				.append(operTd)
				.append(lastTd)
				.appendTo("#user_table tbody");
				
			    //点击修改弹出修改模态框
			    modifyBtn.click(function(){
			    	
			    	if(item.username == "${sessionScope.user.username}"){
			    		alert("当前用户信息请在个人信息管理中修改");
			    		return false;
			    	}
			    	
			    	$(".update-form").css('display','flex');
			    	$("#username").text(item.username);
			    	$("#relname").val(item.relname);
			    	
			    	//获取当前用户model并设置样式
					var model = item.model;
					if(model.substring(0,1)=="m"){
						$("#gender_m").prop("checked",true);
						$("#gender_w").prop("checked",false);
						model_select("m");
					}else{
						$("#gender_w").prop("checked",true);
						$("#gender_m").prop("checked",false);
						model_select("w");
					};
					$(".model_select img").each(function(index,e){
						if(e.id == model){
							$(e).css("box-shadow","2px 2px 0px #635757 inset,-2px -2px 0px #fffcfc inset");
						}else{
							$(e).css("box-shadow","none");
						}
					})
					if(item.isadmin=="1"){
						$("#isadmin").prop("checked",true);
						$("#noadmin").prop("checked",false);
					}else{
						$("#noadmin").prop("checked",true);
						$("#isadmin").prop("checked",false);
					}
					
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
					//设置模型选择边框阴影事件
					$(".model_select img").each(function(index,e){
					    $(e).click(function(){
					    	item.model = this.id;
					        $(".model_select").find("img").css("box-shadow","none");
					        $(e).css("box-shadow","2px 2px 0px #635757 inset,-2px -2px 0px #fffcfc inset");
					    });
					})
					
					//点击取消
					$("#cancel").click(function(){
						$("#update").unbind(); 
						$(".update-form").css('display','none');
					});
					//点击更新
					$("#update").one("click",function(){
						if($("#repeat").val() != $("#password").val()){
				            alert("前后密码不一致");
				        }else{
				        	if($("#password").val() != ""){
				        		item.password = $("#password").val();
				        	}
				        	if($("#relname").val()!=""){
				        		item.relname = $("#relname").val();
				        		
				        		item.gender = $("input[name='gender']:checked").val();
				        		item.isadmin = $("input[name='isadmin']:checked").val();
				        		console.log(item);
				        		//发送请求更新信息
				        		$.ajax({
			                        url: "<%=basePath%>/system/updateUser",  
			                        type:"post",
			                        contentType: "application/json",  
			                        data:JSON.stringify(item),
			                        success:function(result){
			                        	if(result.code == 0){
			                        		alert("修改成功！");
			                        		$(".update-form").css('display','none');
			                        		$("#user_table tbody").empty();
			                        		to_page();
			                        	}else{
			                        		alert("保存失败");	
			                        	}
			                        }
			                	}) 
				    	    }else{
				    	        alert("请填写必要信息");
				    	    }
				       	 }
					  });
					
			    });
				//点击删除弹出删除提示框
				deleteBtn.click(function(){
					if(confirm("确认删除【"+item.username+"】吗？")){
						$.ajax({
							url:"<%=basePath%>/system/deleteUser",  
							type:"post",
							contentType: "application/json",  
			                data:JSON.stringify(item),
			                success:function(result){
			                	if(result.code == 0){
			                		$("#user_table tbody").empty();
			                		to_page();
			                	}else{
			                		alert("删除失败");	
			                	}
			                }
						})
			    	}
				});
			})
	    }

	    function to_page(){
	    	var pagesize = $("#pagesize").find("option:selected").val();
	    	var pagenum = $(".index").val();
			$.ajax({
				url: "<%=basePath%>/system/users/"+pagesize+"/"+pagenum,  
				type:"get",
				contentType: "application/json",
				success:function(result){
					if(result.code == 0){
						build_users(result);
	            	}else{
	            		alert("获取用户列表异常，请稍后重试！");	
	            	}
				}
			})
		}
	    
	  	//点击全选全不选功能
		$("#checkall").click(function(){
			$(".check_item").prop("checked",$(this).prop("checked"));
		});
		$(document).on("click",".check_item",function(){
			var flag = $(".check_item:checked").length==$(".check_item").length;
			$("#checkall").prop("checked",flag);
		});
		
		//批量删除功能
		$("#delete_batch").click(function(){
			var empNames = "";
			$.each($(".check_item:checked"),function(){
				 empNames += $(this).parents("tr").find("td:eq(3)").text()+",";
			});
			empNames = empNames.substring(0,empNames.length-1);
			if(confirm("确认删除【"+empNames+"】吗？")){
				$.each($(".check_item:checked"),function(){
					var user = {};
					user.id = $(this).parents("tr").find("td:eq(2)").text();
					user.username = $(this).parents("tr").find("td:eq(3)").text();
					user.password = $(this).parents("tr").find("td:eq(0)").attr("p");
					user.relname = $(this).parents("tr").find("td:eq(4)").text();
					user.gender = $(this).parents("tr").find("td:eq(5)").attr("gender");
					user.model = $(this).parents("tr").find("td:eq(6)").attr("modelname");
					user.isadmin =  $(this).parents("tr").find("td:eq(7)").attr("isadmin");
					$.ajax({
						url:"<%=basePath%>/system/deleteUser",  
						type:"post",
						contentType: "application/json",  
			            data:JSON.stringify(user),
			            async: false,
			            success:function(result){
						}
					});
				});
				$("#user_table tbody").empty();
				$("#checkall").prop("checked",false);
        		to_page();
			}
		})
		
		//模糊查询功能
		$("#query").click(function(){
			var user = {};
	    	var username = $(this).parent("div").find("input").val();
	    	user.username = username;
	    	$.ajax({
                url: "<%=basePath%>/system/findUserByUsername",  
                type:"post",
                contentType: "application/json",  
                data:JSON.stringify(user),
                success:function(result){
                	if(result.code == 0){
                		build_users(result);
                	}
                }
            })
		})
		//鼠标悬停改变颜色事件
		$(document).on("mouseenter",".user_tr",function(){
			$(this).css("background-color","rgb(245,245,245)");
		});
		$(document).on("mouseleave",".user_tr",function(){
			$(this).css("background-color","rgb(231,240,255)");
		});		
		
    </script>
</body>
</html>