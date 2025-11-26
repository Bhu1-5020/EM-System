package employee_management.service;

import java.util.List;

import employee_management.model.Employee;

public interface EmployeeService {
   
	public Employee addEmployee(Employee employee );
	public List<Employee> viewList();
	public Employee update(Long id , Employee e);
	public void delete(Long id) ;
}
