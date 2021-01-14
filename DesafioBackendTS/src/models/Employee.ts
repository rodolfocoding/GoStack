import { uuid } from "uuidv4";

class Employee {
  id: string;
  name: string;
  sector: string;

  constructor({ name, sector }: Omit<Employees, "id">) {
    this.id = uuid();
    this.name = name;
    this.sector = sector;
  }
}

export default Employee;
