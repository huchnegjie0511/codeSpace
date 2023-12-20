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
<link rel="stylesheet" href="<%=basePath%>/css/cloth_list.css?ver=<%=dateTime%>">
<script src="<%=basePath%>/icon/iconfont.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/jquery-3.3.1.js"></script>
</head>
<body>
	<div class="container">   
		<div class="title">
			<svg class="icon" aria-hidden="true">
			  <use xlink:href="#icon-sandian"></use>
			</svg>
			<p>服饰管理</p>
		</div>
		<div class="content_box">
	      	<div class="search">
	            <div class="search_gender">
	                <label>性别：</label>
	                <select class="gender">
	                	<option value="">不限</option>
	                    <option value="1">男</option>
	                    <option value="0">女</option>
	                </select>
	            </div>
	            <button id="search">搜索</button>
	        </div>
	        <div class="content">
		        <div class="add_item">
		            <div class="item_title">服饰细目</div>
		            <form id="form" enctype="multipart/form-data">
		                <div class="left">
		                    <div>
		                        <label>编号：</label><input type="text" name="number" id="number"/>
		                    </div>
		                    <div>
		                        <label>名称：</label><input type="text" name="name" id="name"/>
		                    </div>
		                    <div>
		                        <label>价格：</label><input type="text" name="price" id="price"/>
		                    </div>
		                    <div class="add_gender">
		                        <label>性别：</label>
		                        <input type="radio" name="gender" value="1" id="gender_m"><span>男</span>
		                        <input type="radio" name="gender" value="0" id="gender_w"><span>女</span>
		                    </div>
		                </div>
		                <div class="right">
		                    <a href="javascript:;" class="upload">
		                        <input type="file" name="picture" id="picture" onchange="newfile(this)">点击这里上传图片
		                    </a>
		                    <img id="uploadImg" src="">
		                </div>
		              </form>
		              <button id="add">添加</button>
		        </div>  
	        </div>
    	</div>
	<script>
		$(function(){
			to_add_page();
			to_clothes_page();
		});
		
		//点击弹出图片上传部分
	    $("input[name='gender']").click(function(){
	        $(".right").css("display","block");
	        $(".add_item").css("width","400px");
	    })

	    //界面上传图片回显
	    function newfile(obj) {
			var reader = new FileReader();
			reader.onload = function(evt){
                $(obj).parent().siblings("img").attr("src",evt.target.result);
			}
		    reader.readAsDataURL(obj.files[0]);
		}
		function to_add_page(){
			var addcLabel =  $("<label></label>").append("类别：");
			var searchcLabel =  $("<label></label>").append("服饰类别：");
			
			var addcSelect = $("<select></select>").addClass("classification");
			var allOption = $("<option></option>").append("不限").val("");
			var searchSelect = $("<select></select>").addClass("classification").append(allOption);
			
			$.ajax({
				url: "<%=basePath%>/system/category",  
				type:"get",
				contentType: "application/json",  
				success:function(result){
					for(var i = 0;i<result.data.length;i++){
						var cOption = $("<option></option>").append(result.data[i].name).val(result.data[i].number);
						addcSelect.append(cOption);
						var searchOption = $("<option></option>").append(result.data[i].name).val(result.data[i].number);
						searchSelect.append(searchOption);
					}
				}
			});
			var cDiv = $("<div></div>").append(addcLabel).append(addcSelect).appendTo(".left");
			
			var selectDiv = $("<div></div>").addClass("search_classification").append(searchcLabel).append(searchSelect).appendTo(".search");
		}
		function build_clothes(result){
			$(".content > div").not(":first").remove();
	    	$.each(result.data,function(index,item){
				
				//构建表单
				var saveBtn = $("<button></button>").addClass("save").append("保存");
				var deleteBtn = $("<button></button>").addClass("delete").append("删除");	
				var titleDiv =  $("<div></div>").addClass("item_title").append("服饰细目");
				
				var idLabel = $("<label></label>").append("编号：");	
				var idInput = $("<input></input>");
				idInput.attr("name","number");
				idInput.val(item.number);
				var idDiv = $("<div></div>").append(idLabel).append(idInput);
		
				var categoryLabel = $("<label></label>").append("名称：");	
				var categoryInput = $("<input></input>");
				categoryInput.attr("name","name");
				categoryInput.val(item.name);
				var categoryDiv = $("<div></div>").append(categoryLabel).append(categoryInput);
		
				var priceLabel = $("<label></label>").append("价格：");	
				var priceInput = $("<input></input>");
				priceInput.attr("name","price");
				priceInput.val(item.price);
				var priceDiv = $("<div></div>").append(priceLabel).append(priceInput);
			    
                var genderLabel = $("<label></label>").append("性别：");	
                var mInput =  $("<input></input>");
                mInput.attr("type","radio");
                mInput.attr("name","gender");
                mInput.attr("value","1");
                mInput.attr("id","gender_m");
                var mSpan = $("<span></span>").append("男");
                var wInput =  $("<input></input>");
                wInput.attr("type","radio");
                wInput.attr("name","gender");
                wInput.attr("value","0");
                wInput.attr("id","gender_w");
                var wSpan = $("<span></span>").append("女");
                if(item.gender == 1){
					mInput.attr("checked",true);
				}else{
					wInput.attr("checked",true);
				}
				var genderDiv = $("<div></div>").addClass("gender").append(genderLabel).append(mInput).append(mSpan).append(wInput).append(wSpan);
				
				var cLabel =  $("<label></label>").append("类别：");	
				var cSelect = $("<select></select>").addClass("classification");
				$.ajax({
					url: "<%=basePath%>/system/category",  
					type:"get",
					contentType: "application/json",  
					success:function(result){
						for(var i = 0;i<result.data.length;i++){
							var cOption = $("<option></option>").append(result.data[i].name).val(result.data[i].number);
							cSelect.append(cOption);
							if(result.data[i].number == item.classification){
								cSelect.val(result.data[i].number);
							}
						}
					}
				});
				var cDiv = $("<div></div>").append(cLabel).append(cSelect);
				
				//左侧div
				var leftDiv = $("<div></div>").addClass("left").append(idDiv).append(categoryDiv).append(priceDiv).append(genderDiv).append(cDiv);
				
				//右侧div
				var fileInput = $("<input></input>");
				fileInput.attr("type","file");
				fileInput.attr("name","picture");
				fileInput.attr("id","picture");
				var a = $("<a href='javascript:;'></a>").addClass("upload").append(fileInput).append("点击这里上传图片");
				var Img = $("<img/>").attr("src","<%=request.getContextPath()%>/uploadImgs/"+item.picture).prop("imgName",item.picture);
				var rightDiv = $("<div></div>").addClass("item_right").append(a).append(Img);
				
				//表单元素
				var form = $("<form></form>").append(leftDiv).append(rightDiv);
				var itemDiv = $("<div></div>").addClass("item").append(titleDiv).append(form).append(saveBtn).append(deleteBtn).appendTo(".content");
				
				//绑定图片回显事件
				fileInput.change(function(){
					var obj = this;
					var reader = new FileReader();
					reader.onload = function(evt){
		                $(obj).parent().siblings("img").attr("src",evt.target.result);
		                var pictureName = $(obj).val().split("\\");
		    	    	$(obj).parent().siblings("img").prop("imgName",pictureName[pictureName.length-1]);
					}
				    reader.readAsDataURL(this.files[0]);
				});
				
				//点击保存修改事件
				saveBtn.click(function(){
					
					var form = $(this).siblings("form");
					//构建表单数据对象
			    	var formdata = new FormData();
			    	formdata.append('number', form.find("input[name='number']").val());
			    	formdata.append('name', form.find("input[name='name']").val());
			    	formdata.append('price', form.find("input[name='price']").val());
			    	formdata.append('gender', form.find("input[name='gender']:checked").val());
			    	formdata.append('classification', form.find("select").find("option:selected").val());
			    	var fileObj = form.find("input[type='file']").prop("files")[0]; 
			    	formdata.append('picture', fileObj);
			    	
			    	//构建cloth对象
					item.number = form.find("input[name='number']").val();
					item.name = form.find("input[name='name']").val();
					item.price = parseFloat(form.find("input[name='price']").val());
					item.gender = form.find("input[name='gender']:checked").val();
					item.classification = form.find("option:selected").val();
			    	item.picture = Img.prop("imgName");
    				//发送文件上传请求
		            $.ajax({
		                url:"<%=basePath%>/system/uploadImage",
		                type:"post",
		                data:formdata,
		                processData:false,
		                contentType:false,
		                success:function(result){
		                	if(result.code==0){
		                		//发送更新服装信息请求
		                		$.ajax({
		                        	url:"<%=basePath%>/system/updateCloth",
		                        	type:"post",
			                      	contentType: "application/json",  
									data:JSON.stringify(item),
		                        	success:function(result){
			           	            	alert(result.description+"！");
				           				to_clothes_page();
		                        	}
		                        });
		                	 }
		                 }
		              });
				  });
				//点击删除事件
				deleteBtn.click(function(){
					if(confirm("确认删除编号为【"+item.number+"】，名称为【"+item.name+"】的服饰吗？")){
						$.ajax({
							url:"<%=basePath%>/system/deleteCloth",  
							type:"post",
							contentType: "application/json",  
			               	data:JSON.stringify(item),
			               	success:function(result){
				               	if(result.code == 0){
				               		alert(result.description+"！");
				               		to_clothes_page();
				               	}else{
				               		alert("删除失败");	
				               	}
			               	}
						});
			   		}
				});
  			});
	    }
	    function to_clothes_page(){
	    	$.ajax({
	            url: "<%=basePath%>/system/clothes",
	            type:"get",
	            contentType: "application/json",
	            success:function(result){
	            	build_clothes(result);
	            }
	        });
	    }
	    //点击搜索事件
	    $("#search").click(function(){
	    	var cloth = {};
	    	var gender = $(this).siblings("div[class='search_gender']").find("select").find("option:selected").val();
	    	var classification = $(this).siblings("div[class='search_classification']").find("select").find("option:selected").val();
	    	cloth.gender = gender;
	    	cloth.classification = classification
	    	$.ajax({
                url: "<%=basePath%>/system/findClothByCondition",  
                type:"post",
                contentType: "application/json",  
                data:JSON.stringify(cloth),
                success:function(result){
                	if(result.code == 0){
                		build_clothes(result);
                	}
                }
            })
	    });
	    //点击添加事件
	    $("#add").click(function(){
	    	var form = $(this).siblings("form")
	    	//构建表单数据对象
	    	var formdata = new FormData();
	    	formdata.append('number', form.find("input[name='number']").val());
	    	formdata.append('name', form.find("input[name='name']").val());
	    	formdata.append('price', form.find("input[name='price']").val());
	    	formdata.append('gender', form.find("input[name='gender']:checked").val());
	    	formdata.append('classification', form.find("select").find("option:selected").val());
	    	var fileObj = form.find("input[type='file']").prop("files")[0]; 
	    	formdata.append('picture', fileObj);
	    	//构建cloth对象
	    	var cloth = {};
	    	cloth.number = form.find("input[name='number']").val();
	    	cloth.name = form.find("input[name='name']").val();
	    	cloth.price = parseFloat(form.find("input[name='price']").val());
	    	cloth.gender = form.find("input[name='gender']:checked").val();
	    	cloth.classification = form.find("option:selected").val();
	    	
	    	var pictureName = form.find("input[name='picture']").val().split("\\");
	    	cloth.picture = pictureName[pictureName.length-1];
	    	
	    	//发送文件上传请求
            $.ajax({
                url:"<%=basePath%>/system/uploadImage",
                type:"post",
                data:formdata,
                processData:false,
                contentType:false,
                success:function(result){
                	if(result.code==0){
                		//发送添加服装请求
                		$.ajax({
                        	url:"<%=basePath%>/system/addCloth",
                        	type:"post",
	                      	contentType: "application/json", 
							data:JSON.stringify(cloth),
                        	success:function(result){
	           	            	alert(result.description+"！");
	           	            	form[0].reset();
	           	            	$(".right").css("display","none");
	           	    	        $(".add_item").css("width","250px");
		           				to_clothes_page();
                         	}
                        })
                	 }
                 }
              });
	   	});
	    
	</script>
</body>
</html>