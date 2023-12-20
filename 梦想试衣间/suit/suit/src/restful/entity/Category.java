package restful.entity;
import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "category")
@NamedQueries({
    @NamedQuery(name = "Category.findAll", query = "SELECT category FROM Category category")
})
public class Category extends IdEntity{

	private String number;
	private String name;
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
	public Category() {
		super();
	}
	public Category(String number, String name) {
		super();
		this.number = number;
		this.name = name;
	}
	
	@Override
	public String toString() {
		return "Category [number=" + number + ", name=" + name + "]";
	}
}
