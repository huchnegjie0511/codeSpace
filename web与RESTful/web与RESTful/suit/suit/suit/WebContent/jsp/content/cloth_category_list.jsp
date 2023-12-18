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
<link rel="stylesheet" href="<%=basePath%>/css/cloth_category_list.css?ver=<%=dateTime%>">
<script src="<%=basePath%>/icon/iconfont.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/jquery-3.3.1.js"></script>
</head>
<body>
	<div class="container">   
		<div class="title">
			<svg class="icon" aria-hidden="true">
			  <use xlink:href="#icon-sandian"></use>
			</svg>
			<p>服饰类别管理</p>
		</div>
        <div class="content">
	        <div class="add_item">
	            <div class="item_title">服饰类别</div>
	            <form>
	                <div class="id">
	                    <label>编号：</label><input type="text" name="number" id="number"/>
	                </div>
	                <div class="category">
	                    <label>类别：</label><input type="text" name="name" id="name"/>
	                </div>
	            </form>
	            <button id="add">添加</button>
	        </div>
	    </div>
    </div>
    <script type="text/javascript">
	$(function(){
		to_category_page();
	});
	
	//点击添加新增衣服类别事件
	$("#add").click(function(){
	   	var number = $(this).siblings("form").children("div").eq(0).find("input:first").val();
	   	var name = $(this).siblings("form").children("div").eq(1).find("input:first").val();
	   	if(number != "" && name != ""){
	   		var category = {};
	   		category.number = number;
	    	category.name = name;
	    	$.ajax({
	            url: "<%=basePath%>/system/addCategory",  
	            type:"post",
	            contentType: "application/json",  
	            data:JSON.stringify(category),
	            success:function(result){
	            	alert("添加成功！");
	            	$("#number").val('');
	            	$("#name").val('');
	            	to_category_page();
	            }
	        });
        }else{
            alert("请填写全部信息");
        }
	});
	
	function to_category_page(){
		$(".content > div").not(":first").remove();
		$.ajax({
			url: "<%=basePath%>/system/category",  
			type:"get",
			contentType: "application/json",  
			success:function(result){
				if(result.code == 0){
					$.each(result.data,function(index,item){
						
						//构建表单
						var saveBtn = $("<button></button>").addClass("save").append("保存");	
						var deleteBtn = $("<button></button>").addClass("delete").append("删除");	
						var titleDiv =  $("<div></div>").addClass("item_title").append("服饰类别");
				
						var idLabel = $("<label></label>").append("编号：");	
						var idInput = $("<input></input>").addClass("number");
						idInput.attr("name","number");
						idInput.val(item.number);
						var idDiv = $("<div></div>").addClass("id").append(idLabel).append(idInput);
				
						var categoryLabel = $("<label></label>").append("类别：");	
						var categoryInput = $("<input></input>").addClass("name");
						categoryInput.attr("name","name");
						categoryInput.val(item.name);
						var categoryDiv = $("<div></div>").addClass("category").append(categoryLabel).append(categoryInput);
				
						var form = $("<form></form>").append(idDiv).append(categoryDiv);
				
						$("<div></div>").addClass("item")
							.append(titleDiv)
							.append(form)
							.append(saveBtn)
							.append(deleteBtn)
							.appendTo(".content");
						
						//点击保存修改事件
						saveBtn.click(function(){
							var number = $(this).siblings("form").children("div").eq(0).find("input:first").val();
					    	var name = $(this).siblings("form").children("div").eq(1).find("input:first").val();
							if(number != "" && name != ""){
			    				item.number = number;
				    			item.name = name;
		        				//发送请求更新信息
				    			$.ajax({
		                    		url: "<%=basePath%>/system/updateCategory",  
									type:"post",
									contentType: "application/json",  
									data:JSON.stringify(item),
									success:function(result){
			                  			if(result.code == 0){
			                  				alert("保存成功！");
			                  				to_category_page();
					                  	}else{
					                  		alert("保存失败");	
					                  	}
			                  		}
		                  		});
							}else{
								alert("请填写必要信息");
							}
		  				});
		  
		   				//点击删除弹出删除提示框
						deleteBtn.click(function(){
							if(confirm("确认删除【"+item.name+"】吗？")){
								$.ajax({
									url:"<%=basePath%>/system/deleteCategory",  
									type:"post",
									contentType: "application/json",  
					               	data:JSON.stringify(item),
					               	success:function(result){
						               	if(result.code == 0){
						               		alert("删除成功！");
						               		to_category_page();
						               	}else{
						               		alert("删除失败");	
						               	}
					               	}
								});
					   		}
						});
					});
				}
			}
		});
	}
	</script>
</body>
</html>