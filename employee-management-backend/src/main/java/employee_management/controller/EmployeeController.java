package employee_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import employee_management.model.Employee;
import employee_management.service.EmployeeService;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins ="http://localhost:4200")
public class EmployeeController {
    @Autowired
	public EmployeeService employeeService ; 
	
	@PostMapping
	public Employee addEmployee(@RequestBody Employee employee) {
		return employeeService.addEmployee(employee);
	}
	
	@GetMapping
	public List<Employee> getAll(){
		return employeeService.viewList();
	}
	
	 @PutMapping("/{id}")
	    public Employee updateEmployee(
	            @PathVariable Long id,
	            @RequestBody Employee employee) {
	        return employeeService.update(id, employee);
	    }
	 
	 @DeleteMapping("/{id}")
	    public void deleteEmployee(@PathVariable Long id) {
	        employeeService.delete(id);
	    }
}
