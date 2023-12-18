package restful.entity;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "users")
@NamedQueries({
    @NamedQuery(name = "Users.findAll", query = "SELECT user FROM Users users"),
    @NamedQuery(name = "Users.findUserByName", query = "SELECT users FROM Users users where users.username = :username and users.password = :password"),
    @NamedQuery(name = "Users.findUserByUsername", query = "SELECT users FROM Users users where users.username like :username")
})

public class Users extends IdEntity{

	private String username;
	private String password;
	private String relname;
	private Integer gender;
	private String model;
	private Integer isadmin;
	
	public String getRelname() {
		return relname;
	}
	public void setRelname(String relname) {
		this.relname = relname;
	}
	public Integer getGender() {
		return gender;
	}
	public void setGender(Integer gender) {
		this.gender = gender;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public Integer getIsadmin() {
		return isadmin;
	}
	public void setIsadmin(Integer isadmin) {
		this.isadmin = isadmin;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Users(String username, String password, String relname, Integer gender, String model, Integer isAdmin) {
		super();
		this.username = username;
		this.password = password;
		this.relname = relname;
		this.gender = gender;
		this.model = model;
		this.isadmin = isAdmin;
	}
}
