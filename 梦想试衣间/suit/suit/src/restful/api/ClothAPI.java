package restful.api;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.IOUtils;

import restful.bean.Result;
import restful.database.EM;
import restful.entity.Category;
import restful.entity.Cloth;
import restful.entity.Users;

@Path("/system")
public class ClothAPI {

	
	@POST
	@Path("/findClothByCondition")
	@Consumes("application/json;charset=UTF-8")
    @Produces("application/json;charset=UTF-8")
	public Result FindClothByCondition(Cloth cloth,@Context HttpServletRequest request) {
		List<Cloth> res = EM.getEntityManager()
                .createNamedQuery("Cloth.findClothByCondition", Cloth.class)  
                .setParameter("gender", "%"+cloth.getGender()+"%")
                .setParameter("classification", "%"+cloth.getClassification()+"%")
                .getResultList();
		System.out.println(cloth.getGender()+" "+cloth.getClassification());
		System.out.println(res.size());
		return new Result(0, "查询成功", res, "");
	}
	
	@POST
	@Path("/findClothByClassification")
	@Consumes("application/json;charset=UTF-8")
    @Produces("application/json;charset=UTF-8")
	public Result FindClothByClassification(Cloth cloth,@Context HttpServletRequest request) {
		List<Cloth> res = EM.getEntityManager()
                .createNamedQuery("Cloth.findClothByClassification", Cloth.class)
                .setParameter("classification", cloth.getClassification())
                .getResultList();
		return new Result(0, "查询成功", res, "");
	}
	
	@POST
	@Path("/findClothBynumber")
	@Consumes("application/json;charset=UTF-8")
    @Produces("application/json;charset=UTF-8")
	public Result FindClothBynumber(Cloth cloth,@Context HttpServletRequest request) {
		List<Cloth> res = EM.getEntityManager()
                .createNamedQuery("Cloth.findClothBynumber", Cloth.class)
                .setParameter("number", cloth.getNumber())
                .getResultList();
		return new Result(0, "查询成功", res, "");
	}
	@GET
	@Path("/clothes")
	@Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")  
	public Result FindAllCategory(){
		List<Cloth> res = EM.getEntityManager()
                .createNamedQuery("Cloth.findAll", Cloth.class)  
                .getResultList();
		return new Result(0, "查询成功", res, "");
	}
	
	@POST  
	@Path("/uploadImage")  
	@Produces("application/json;charset=UTF-8")  
//	@Permission("admin")
	public Result uploadImage(@QueryParam("code") String suitCode,@Context HttpServletRequest request ) {  
	    // 创建DiskFileItem工厂  
		DiskFileItemFactory factory = new DiskFileItemFactory();
	    // 设置缓存目录 
		factory.setRepository(new File("D"));
	    // 设置缓冲区大小,文件体积超出缓冲区大小将保持至缓存目录然后再进行后续处理，这里设置为1M bytes
		factory.setSizeThreshold(1*1024*1024);
	    // 创建文件上传解析对象 
		ServletFileUpload upload = new ServletFileUpload(factory);
	    // 按照UTF-8编码格式读取  
		upload.setHeaderEncoding("UTF-8");
	    // 设置每个文件最大为5M  
		upload.setFileSizeMax(5*1024*1024);
	    // 一共最多能上传10M
		upload.setSizeMax(10*1024* 1024);
	    // 获取文件保存目录  
		String realPath =  request.getSession().getServletContext().getRealPath("/uploadImgs/");
	    try {
	    	Cloth cloth = new Cloth();
	    	List<FileItem> fileItems = upload.parseRequest(request);
	    	for(FileItem fileItem : fileItems) {
				if(fileItem.isFormField()){
					//System.out.println(fileItem.getString()+" "+fileItem.getFieldName());
				}else {
					//System.out.println(fileItem.getName()+" "+fileItem.getFieldName()+"--------我是文件");
					//获取文件流
					InputStream is = fileItem.getInputStream();
					//System.out.println(request.getSession().getServletContext().getRealPath("/uploadImgs/"));
					System.out.println(realPath);
					OutputStream os = new FileOutputStream(realPath+fileItem.getName());
					IOUtils.copy(is, os);
					os.close();
					is.close();
				}
			}
	    	return new Result(0, "文件上传成功", null, "");  
	    } catch (Exception e) {  
	        e.printStackTrace();  
	        return new Result(-1, "服务器文件解析错误", null, "");  
	    }
	}
	
	@POST
	@Path("/addCloth")
	@Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")  
	public Result addCategory(Cloth cloth){
		cloth = EM.getEntityManager().merge(cloth);
        EM.getEntityManager().persist(cloth);  
        EM.getEntityManager().getTransaction().commit(); 
        return new Result(0, "添加成功", null, "");
	}
	
	@POST
	@Path("/updateCloth")
	@Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")  
	public Result updateCategory(Cloth cloth){
		cloth = EM.getEntityManager().merge(cloth);
        EM.getEntityManager().persist(cloth);  
//        EM.getEntityManager().getTransaction().commit(); 
        return new Result(0, "保存成功", null, "");
	}
	
	@POST  
    @Path("/deleteCloth")
    @Consumes("application/json;charset=UTF-8")  
    @Produces("application/json;charset=UTF-8")
    public Result deleteCategory(Cloth cloth ) {
        EM.getEntityManager().remove(EM.getEntityManager().merge(cloth));  
        EM.getEntityManager().getTransaction().commit();  
        return new Result(0, "删除成功", null, "");  
    }

}
