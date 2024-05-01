import { useState } from "react";
import Addition from "../../components/addtions/Addition";
import Overtime from "../../components/overtime/Overtime";
import Deductions from "../../components/deductions/Deductions";

const PayrollItem = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold pb-5">Payroll Items</h1>
      <div className="flex items-center gap-5 border-b duration-300 translate-all">
        <button
          className={`px-6 py-2 ${
            activeTab === 1 ? "border-b-2 border-blue-500 " : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          Additions
        </button>
        <button
          className={`px-6 py-2 ${
            activeTab === 2 ? "border-b-2 border-blue-500 " : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          Overtime
        </button>

        <button
          className={`px-6 py-2 ${
            activeTab === 3 ? "border-b-2 border-blue-500 " : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          Deductions
        </button>
      </div>
      <div className="py-5">
        {activeTab === 1 && <Addition />}
        {activeTab === 2 && <Overtime />}
        {activeTab === 3 && <Deductions />}
      </div>
    </div>
  );
};

export default PayrollItem;
