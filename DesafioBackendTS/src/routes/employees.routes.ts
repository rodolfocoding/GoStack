import { Router } from "express";
import EmployeesRepository from "../repositories/EmployeesRepository";
import CreateEmployeeService from "../services/CreateEmployeeService";

const employeesRouter = Router();
const employeesRepository = new EmployeesRepository();

employeesRouter.get("/", (request, response) => {
  const employees = employeesRepository.all();

  return response.json(employees);
});

employeesRouter.post("/", (request, response) => {
  try {
    const { name, sector } = request.body;

    const createEmployee = new CreateEmployeeService(employeesRepository);

    const employee = createEmployee.execute({
      name,
      sector,
    });

    return response.json(employee);
  } catch (err) {
    return response.status(400).json({
      error: err.message,
    });
  }
});

export default employeesRouter;
