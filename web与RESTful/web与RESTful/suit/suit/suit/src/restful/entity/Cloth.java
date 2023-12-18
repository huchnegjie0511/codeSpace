package restful.entity;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "cloth")
@NamedQueries({
    @NamedQuery(name = "Cloth.findAll", query = "SELECT cloth FROM Cloth cloth"),
    @NamedQuery(name = "Cloth.findClothByCondition", query = "SELECT cloth FROM Cloth cloth where cloth.gender like :gender "
    														+ "and cloth.classification like :classification"),
    @NamedQuery(name = "Cloth.findClothByClassification", query = "SELECT cloth FROM Cloth cloth where cloth.classification = :classification"),
    @NamedQuery(name = "Cloth.findClothBynumber", query = "SELECT cloth FROM Cloth cloth where cloth.number = :number")
})

public class Cloth extends IdEntity{
	
	private String number;
	private String name;
	private double price;
	private String gender;
	private String classification;
	private String picture;
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getClassification() {
		return classification;
	}
	public void setClassification(String classification) {
		this.classification = classification;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	
	public Cloth() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cloth(String number, String name, double price, String gender, String classification, String picture) {
		super();
		this.number = number;
		this.name = name;
		this.price = price;
		this.gender = gender;
		this.classification = classification;
		this.picture = picture;
	}
	
	
}
