package restful.api;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;

import restful.bean.Result;
import restful.database.EM;
import restful.entity.Cloth;
import restful.entity.Dress;

@Path("/system")
public class DressAPI {

	@POST
	@Path("/findDressByUsername")
	@Consumes("application/json;charset=UTF-8")
    @Produces("application/json;charset=UTF-8")
	public Result FindDressByUsername(Dress dress,@Context HttpServletRequest request) {
		List<Dress> res = EM.getEntityManager()
                .createNamedQuery("Dress.findDressByUsername", Dress.class)
                .setParameter("username", dress.getUsername())
                .getResultList();
		return new Result(0, "查询成功", res, "");
	}
	
	@POST
	@Path("/addDress")
	@Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")  
	public Result addDress(Dress dress){
		dress = EM.getEntityManager().merge(dress);
        EM.getEntityManager().persist(dress);  
        EM.getEntityManager().getTransaction().commit(); 
        return new Result(0, "添加成功", dress, "");
	}
	
	@POST
	@Path("/updateDress")
	@Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")  
	public Result updateDress(Dress dress){
		dress = EM.getEntityManager().merge(dress);
        EM.getEntityManager().persist(dress);  
        EM.getEntityManager().getTransaction().commit(); 
        return new Result(0, "修改成功", dress, "");
	}
	
	@POST  
    @Path("/deleteDress")  
    @Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")
    public Result deleteDress(Dress dress) {
        EM.getEntityManager().remove(EM.getEntityManager().merge(dress));  
        EM.getEntityManager().getTransaction().commit();  
        return new Result(0, "删除成功", dress, "");  
    }
}
