package restful.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.Context;

public class SuitRequestFilter implements Filter{
	
	public void destroy() {
		System.out.println("过滤器结束");
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		HttpServletRequest req = (HttpServletRequest)request;
		HttpServletResponse resp = (HttpServletResponse)response;
		
		//判断用户是否登录
		if (req.getSession().getAttribute("user")==null) {
			//没有登录则跳转到登录页面
			resp.sendRedirect(req.getContextPath()+"/login.jsp");
		}else {
			//放行请求
			chain.doFilter(req, resp);
		}
	}

	public void init(FilterConfig config) throws ServletException {
		System.out.println("过滤器开始");
	}

}
