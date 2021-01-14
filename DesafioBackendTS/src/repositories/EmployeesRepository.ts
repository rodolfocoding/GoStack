import Employee from "../models/Employee";
import { isEqual } from "date-fns";

interface CreateEmployeesDTO {
  name: string;
  sector: string;
}

class EmployeesRepository {
  private employees: Employee[];

  constructor() {
    this.employees = [];
  }

  public all(): Employee[] {
    return this.employees;
  }

  public create({ name, sector }: CreateEmployeesDTO) {
    const employee = new Employee({ name, sector });

    this.employees.push(employee);

    return employee;
  }
}

export default EmployeesRepository;
