import Employee from "../models/Employee";
import EmployeesRepository from "../repositories/EmployeesRepository";

interface Request {
  name: string;
  sector: string;
}

class CreateEmployeeService {
  private employeesRepository: EmployeesRepository;

  constructor(employeesRepository: EmployeesRepository) {
    this.employeesRepository = employeesRepository;
  }

  public execute({ name, sector }: Request): Employee {
    const employee = this.employeesRepository.create({
      name,
      sector,
    });

    return employee;
  }
}

export default CreateEmployeeService;
