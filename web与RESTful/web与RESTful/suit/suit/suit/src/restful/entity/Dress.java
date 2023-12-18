package restful.entity;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "dress")
@NamedQueries({
    @NamedQuery(name = "Dress.findDressByUsername", query = "SELECT dress FROM Dress dress where dress.username = :username")
})

public class Dress extends IdEntity{

	private String username;
	private String clothnumber;
	private int zindex;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getClothnumber() {
		return clothnumber;
	}
	public void setClothnumber(String clothnumber) {
		this.clothnumber = clothnumber;
	}
	public int getZindex() {
		return zindex;
	}
	public void setZindex(int zindex) {
		this.zindex = zindex;
	}
	
	public Dress() {
		super();
	}
	public Dress(String username, String clothnumber, int zindex) {
		super();
		this.username = username;
		this.clothnumber = clothnumber;
		this.zindex = zindex;
	}
}
