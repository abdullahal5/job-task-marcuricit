import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashbaord/Dashboard";
import EmployeeSalary from "../pages/employeeSalary/EmployeeSalary";
import Create from "../pages/createEmployee/Create";
import Payslip from "../pages/paySlip/Payslip";
import Update from "../pages/update/Update";

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
      {
        path: "/payroll/payslip/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/employees/${params.id}`),
      },
    ],
  },
]);

export default router;
