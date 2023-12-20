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
<link rel="stylesheet" href="<%=basePath%>/css/virtual_dress.css?ver=<%=dateTime%>">
<script src="<%=basePath%>/icon/iconfont.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/jquery-3.3.1.js"></script>
</head>
<body>
<div class="container">   
		<div class="title">
			<svg class="icon" aria-hidden="true">
			  <use xlink:href="#icon-sandian"></use>
			</svg>
			<p>虚拟着装</p>
		</div>	
       	<div class="content">
	        <div class="A"></div>
	        <div class="B">
	            <div class="model-box"></div>
	            <img id="modelShadow" src="<%=basePath%>/images/data/model/modelShadow.png" />
	            <img id="ground" src="<%=basePath%>/images/ui/ground.png"/>
	            <div class="price-box">
	                <p class="p_title">总价</p>
	                <p class="price">￥0</p>
	            </div>
	        </div>
	        <div class="C">
	            <div class="select">
	                <span>选择分类：</span>
	            </div>
	        </div>
	    </div>
    </div>
    <script>
    $(function(){
    	category();
    	build_model_dress();
	});
    /* 初始化人物模型以及装扮 */
    function build_model_dress(){
    	/* 初始化人物模型 */
    	var model = "${sessionScope.user.model}";
    	var modelImg = $("<img class='model'></img>").attr("src","<%=basePath%>/images/data/model/"+model+"Model.png").appendTo(".model-box");
    	
    	/* 初始化装扮表单 */
    	var dress = {};
    	dress.username = "${sessionScope.user.username}";
    	$.ajax({
    		url: "<%=basePath%>/system/findDressByUsername",
    		type:"post",
			contentType: "application/json",
			data:JSON.stringify(dress),
			success:function(result){
				//遍历构建表单
				$.each(result.data,function(index,item){
					var id = item.id;
					var clothnumber = item.clothnumber;
					var index = item.zindex;
				
					var cloth = {};
					cloth.number = item.clothnumber;
					$.ajax({
						url:"<%=basePath%>/system/findClothBynumber",
						type:"post",
						contentType: "application/json",
						data:JSON.stringify(cloth),
						success:function(result){
							build_form(id,clothnumber,result.data[0].name,result.data[0].price,index,false);
							build_cloth(result.data[0].number,result.data[0].picture,result.data[0].classification,index);
						}
					});
				});
			}
    	});
    	
    }
    /*构建分类栏*/
    function category(){
		var select = $("<select></select>");
		$.ajax({
			url: "<%=basePath%>/system/category",  
			type:"get",
			contentType: "application/json",  
			success:function(result){
				for(var i = 0;i<result.data.length;i++){
					if(i == 0){
						build_classification_form(result.data[i].number);
					}
					var option = $("<option></option>").append(result.data[i].name).val(result.data[i].number);
					select.append(option);
				}
			}
		});
		select.appendTo(".select");
		/*选项改变切换表单事件*/
		select.change(function(){
			build_classification_form($(this).find("option:selected").val());
		});
		
    }
    function calculate_price(price){
    	var oldprice = parseInt($(".price").text().substring(1));
    	$(".price").text("￥"+(oldprice+price));
    }
    /* 构建人物服饰*/
    function build_cloth(number,picture,classification,zindex){
    	var img = $("<img></img>").attr("src","<%=request.getContextPath()%>/uploadImgs/"+picture)
    		.addClass(classification)
    		.attr("id",number)
    		.appendTo(".model-box");
    	img.css("z-index",zindex);
    }
    /* 改变图片层级 */
    function change_dress_index(id,zindex){
    	$('#'+id).css("z-index",zindex);
    }
    /* 删除服饰图片 */
    function remove_clothImg(id){
    	$('#'+id).remove();
    }
    /*构建分类表单*/
    function build_classification_form(classification){
    	$(".C > div").not(":first").remove();
	    var cloth = {};
	    cloth.classification = classification;
	    $.ajax({
			url: "<%=basePath%>/system/findClothByClassification",  
			type:"post",
			contentType: "application/json",
			data:JSON.stringify(cloth),
			success:function(result){
				//遍历构建表单
				$.each(result.data,function(index,item){
					var addImg = $("<img class='addCloth'></img>").attr("src","<%=basePath%>/images/ui/add.png");
					var clothImg = $("<img class='specific_cloth'></img>").attr("src","<%=request.getContextPath()%>/uploadImgs/"+item.picture);
					var clothDiv = $("<div></div>").addClass("cloth").append(addImg).append(clothImg);
					
					var numberSpan1 = $("<span></span>").append("编号：");
		            var numberSpan2 = $("<span></span>").append(item.number);
		            var numberDiv = $("<div></div>").append(numberSpan1).append(numberSpan2);
		            var nameSpan1 = $("<span></span>").append("名称：");
		            var nameSpan2 = $("<span></span>").append(item.name);
		            var nameDiv = $("<div></div>").append(nameSpan1).append(nameSpan2);
		            var priceSpan1 = $("<span></span>").append("价格：");
		            var priceSpan2 = $("<span></span>").append("￥"+item.price);
		            var priceDiv = $("<div></div>").append(priceSpan1).append(priceSpan2);
					var attributeDiv = $("<div></div>").addClass("attribute").append(numberDiv).append(nameDiv).append(priceDiv);
					
					var itemDiv = $("<div></div>").append(clothDiv).append(attributeDiv).appendTo(".C");
					
					addImg.click(function(){
				        build_form(0,item.number,item.name,item.price,0,true);
				        build_cloth(item.number,item.picture,item.classification,0);
					});
				});
			}
		});
    }
    /*构建表单*/
    function build_form(id,number,name,price,zindex,isadd){
    	
         var numberSpan1 = $("<span></span>").append("编号：");
         var numberSpan2 = $("<span></span>").append(number);
         var numberDiv = $("<div></div>").append(numberSpan1).append(numberSpan2);

         var nameSpan1 = $("<span></span>").append("名称：");
         var nameSpan2 = $("<span></span>").append(name);
         var nameDiv = $("<div></div>").append(nameSpan1).append(nameSpan2);

         var priceSpan1 = $("<span></span>").append("价格：");
         var priceSpan2 = $("<span></span>").append("￥"+price).addClass("dress_price");
         var priceDiv = $("<div></div>").append(priceSpan1).append(priceSpan2);

         var topDiv = $("<div></div>").addClass("top").append(numberDiv).append(nameDiv).append(priceDiv);

         var zIndexImg = $("<img></img>").attr("src","<%=basePath%>/images/ui/zIndex.png");
         var span = $("<span></span>").addClass("z-index").append(zindex);
         var upImg = $("<img></img>").attr("src","<%=basePath%>/images/ui/up.png").addClass("up");
         var downImg = $("<img></img>").attr("src","<%=basePath%>/images/ui/down.png").addClass("down");
         var removeImg = $("<img></img>").attr("src","<%=basePath%>/images/ui/remove.png").addClass("remove");

         var bottomDiv = $("<div></div>").addClass("bottom")
             .append(zIndexImg).append(span).append(upImg).append(downImg).append(removeImg);
         var form = $("<form></form>").append(topDiv).append(bottomDiv).appendTo(".A");
         
         var dress = {};
         dress.id = id;
         dress.username = "${sessionScope.user.username}";
         dress.clothnumber = number;
         dress.zindex = zindex;
         calculate_price(price);
         if(isadd){
        	//向数据库中添加该数据
             $.ajax({
    			url:"<%=basePath%>/system/addDress",
    			type:"post",
    			contentType: "application/json", 
    			data:JSON.stringify(dress),
    			success:function(result){
    				dress.id = result.data.id;
    			}
             });
         }
         /*增加z-index*/
	     upImg.click(function(){
        	var index = $(this).siblings(".z-index").text();
     		index++;
   			$(this).siblings(".z-index").text(index);
   	      	dress.zindex = index;
   	        $.ajax({
	   			url:"<%=basePath%>/system/updateDress",
	   			type:"post",
	   			contentType: "application/json", 
	   			data:JSON.stringify(dress),
	   			success:function(){
	   				change_dress_index(number,index);
	   			}
     	    })
	     })
	     /*减少z-index*/
	     downImg.click(function(){
        	var index = $(this).siblings(".z-index").text();
        	index--;
        	$(this).siblings(".z-index").text(index);
   	      	dress.zindex = index;
   	        $.ajax({
	   			url:"<%=basePath%>/system/updateDress",
	   			type:"post",
	   			contentType: "application/json", 
	   			data:JSON.stringify(dress),
	   			success:function(result){	
	   				change_dress_index(number,index);
	   			}
     	    })
	     })
	     
	     /*清除该表单*/
		 removeImg.click(function(){
		     $(this).parents("form").remove();
		     $.ajax({
				url:"<%=basePath%>/system/deleteDress",  
				type:"post",
				contentType: "application/json",  
               	data:JSON.stringify(dress),
               	success:function(result){
	               	remove_clothImg(number);
	               	calculate_price(-price);
               	}
			 });
		 });
    }
    </script>
</body>
</html>