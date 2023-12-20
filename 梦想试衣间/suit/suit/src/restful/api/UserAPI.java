package restful.api;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;

import restful.bean.Result;
import restful.database.EM;
import restful.entity.Users;

@Path("/system")
public class UserAPI {
	
	@POST
	@Path("/login")
	@Consumes("application/json;charset=UTF-8")
    @Produces("application/json;charset=UTF-8")
	public Result Login(Users user,@Context HttpServletRequest request) {
		List<Users> res = EM.getEntityManager()
                .createNamedQuery("Users.findUserByName", Users.class)  
                .setParameter("username", user.getUsername())
                .setParameter("password", user.getPassword())
                .getResultList();
		if(res.size()!=0) {
			Users u = res.get(0);
			System.err.println(u.getIsadmin());
			System.err.println(u.getGender());
			request.getSession().setAttribute("user", u);
			return new Result(0, "查询成功", null, "");
		}else{
			return new Result(1, "查询失败", null, "");
		}
	}
	
	@POST
	@Path("/register")
	@Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8") 
	public Result register(Users user) {  
		System.out.println(user);
		user = EM.getEntityManager().merge(user);
        EM.getEntityManager().persist(user);  
        EM.getEntityManager().getTransaction().commit(); 
        return new Result(0, "添加成功", user, "");  
	}
	

	@POST
	@Path("/findUserByUsername")
	@Consumes("application/json;charset=UTF-8")
    @Produces("application/json;charset=UTF-8")
	public Result FindUserByUsername(Users user) {
		List<Users> res = EM.getEntityManager()
                .createNamedQuery("Users.findUserByUsername", Users.class)  
                .setParameter("username", "%"+user.getUsername()+"%")
                .getResultList();
		return new Result(0, "查询成功", res, "");
	}
	
	@POST  
    @Path("/updateUser")  
    @Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")  
    public Result updateUser(Users user,@Context HttpServletRequest request) {
        EM.getEntityManager().persist(EM.getEntityManager().merge(user));  
        EM.getEntityManager().getTransaction().commit();
        return new Result(0, "保存成功", user, "");  
    } 
	
	@POST  
    @Path("/updateSelfUser")  
    @Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")  
    public Result updateSelfUser(Users user,@Context HttpServletRequest request) {
        EM.getEntityManager().persist(EM.getEntityManager().merge(user));  
        EM.getEntityManager().getTransaction().commit();    
        request.getSession().setAttribute("user", user);
        return new Result(0, "保存成功", user, "");  
    } 
	
	@POST  
    @Path("/exit")  
    @Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")  
    public Result exit(@Context HttpServletRequest request) { 
        request.getSession().removeAttribute("user");
        return new Result(0, "保存成功", null, "");  
    }  
	
	@GET
	@Path("/users/{pagesize}/{pagenum}")
	@Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")  
	public Result pageQuery(
			@PathParam("pagesize") int pagesize,
			@PathParam("pagenum") int pagenum
		){
		List<Users> res = EM.getEntityManager()
                .createNamedQuery("Users.findAll", Users.class)  
                .setFirstResult((pagenum-1)*pagesize)
                .setMaxResults(pagesize)
                .getResultList();
		return new Result(0, "查询成功", res, "");
	}

    @POST  
    @Path("/deleteUser")  
    @Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")
    public Result delete(Users user) {
        EM.getEntityManager().remove(EM.getEntityManager().merge(user));  
        EM.getEntityManager().getTransaction().commit();  
        return new Result(0, "成功删除", user, "");  
    }  
    
}
