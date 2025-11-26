package employee_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import employee_management.model.Employee;
import employee_management.repository.EmployeeRepository;

@Service
public class EmpSevImplements implements EmployeeService {
     @Autowired  
	public EmployeeRepository empRepo ;

	@Override
	public Employee addEmployee(Employee employee) {
		return empRepo.save(employee);
	}

	@Override
	public List<Employee> viewList() {
		
		return empRepo.findAll();
	}

	@Override
	public Employee update(Long id, Employee e) {
		e.setId(id);
		return empRepo.save(e);
	}

	@Override
	public void delete(Long id) {
		empRepo.deleteById(id);
		
	}
  
	
	
	

}
