import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashbaord/Dashboard";
import EmployeeSalary from "../pages/employeeSalary/EmployeeSalary";
import Create from "../pages/createEmployee/Create";
import Payslip from "../pages/paySlip/Payslip";
import Update from "../pages/update/Update";
import DashHome from "../pages/DashHome/DashHome";
import PayrollItem from "../pages/payrollItem/PayrollItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <DashHome />,
      },
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
          fetch(`https://marcuricit-server.vercel.app/employees/${params.id}`),
      },
      {
        path: "/payroll/payrollItem",
        element: <PayrollItem />,
      },
    ],
  },
]);

export default router;
