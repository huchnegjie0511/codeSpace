package restful.api;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import restful.bean.Result;
import restful.database.EM;
import restful.entity.Category;

@Path("/system")
public class CategoryAPI {

	@GET
	@Path("/category")
	@Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")  
	public Result FindAllCategory(){
		List<Category> res = EM.getEntityManager()
                .createNamedQuery("Category.findAll", Category.class)  
                .getResultList();
		return new Result(0, "查询成功", res, "");
	}
	
	@POST
	@Path("/addCategory")
	@Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")  
	public Result addCategory(Category category){
		category = EM.getEntityManager().merge(category);
        EM.getEntityManager().persist(category);  
        EM.getEntityManager().getTransaction().commit(); 
        return new Result(0, "添加成功", null, "");
	}
	
	@POST  
    @Path("/updateCategory")  
    @Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")  
    public Result updateCategory(Category category) {
        EM.getEntityManager().persist(EM.getEntityManager().merge(category));  
        EM.getEntityManager().getTransaction().commit();
        return new Result(0, "保存成功", null, "");  
    } 
	
	@POST  
    @Path("/deleteCategory")  
    @Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")
    public Result deleteCategory(Category category ) {
        EM.getEntityManager().remove(EM.getEntityManager().merge(category));  
        EM.getEntityManager().getTransaction().commit();  
        return new Result(0, "成功删除", null, "");  
    }  
}
