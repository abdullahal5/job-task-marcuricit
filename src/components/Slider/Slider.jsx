import { BsCashStack } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Slider = ({ isSliderOpen }) => {
  const [showSubroutes, setShowSubroutes] = useState(false);

  const toggleSubroutes = () => {
    setShowSubroutes(!showSubroutes);
  };

  return (
    <div className="lg:block md:block hidden border-r">
      <div
        style={{ height: "full" }}
        className={`overflow-y-hidden h-screen left-0 transition-all duration-300 bg-white ${
          isSliderOpen ? "w-64" : "w-0"
        }`}
      >
        <div className="text-black w-full">
          <div className="font-semibold flex items-center justify-between px-4 py-4">
            <span className="flex items-center gap-4 text-3xl">
              <Link to="/">
                <img className="w-32" src="/logo-dark.png" alt="" />
              </Link>
            </span>
          </div>
          <hr className="border border-gray-400 mb-4" />
          <ul className="w-full text-lg">
            <li
              onClick={toggleSubroutes}
              className="hover:bg-gray-200 mx-2 rounded-lg py-3 px-4 flex items-center justify-between cursor-pointer"
            >
              <p>
                <BsCashStack className="inline mr-2" fontSize={"1.5rem"} />
                Payroll
              </p>

              {showSubroutes ? <FaAngleUp /> : <FaAngleDown />}
            </li>
            <div
              className={`overflow-hidden duration-300 transition-all ${
                showSubroutes ? "h-auto" : "h-0"
              }`}
            >
              <ul>
                <Link to="/payroll/employeesalary">
                  <li className="hover:bg-gray-200 mx-2 rounded-lg py-3 px-4 flex items-center">
                    Employee Salary
                  </li>
                </Link>
                <Link to="/payroll/payslip">
                  <li className="hover:bg-gray-200 mx-2 rounded-lg py-3 px-4 flex items-center">
                    Payslip
                  </li>
                </Link>
                <Link to="/payroll/payrollItem">
                  <li className="hover:bg-gray-200 mx-2 rounded-lg py-3 px-4 flex items-center">
                    Payroll Items
                  </li>
                </Link>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slider;
