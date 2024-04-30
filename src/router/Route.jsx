import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashbaord/Dashboard";
import EmployeeSalary from "../pages/employeeSalary/EmployeeSalary";
import Create from "../pages/createEmployee/Create";
import Payslip from "../pages/paySlip/Payslip";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/payroll/employeesalary",
        element: <EmployeeSalary />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/payroll/payslip",
        element: <Payslip />,
      },
    ],
  },
]);

export default router;
