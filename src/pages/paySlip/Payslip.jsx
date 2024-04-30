const Payslip = () => {
  return (
    <div className="bg-white rounded-lg px-5 py-5">
      <h1 className="text-3xl font-semibold text-center underline">
        PAYSLIP FOR THE MONTH OF FEB 2019
      </h1>
      <div className="pt-10 flex items-start justify-between">
        <div>
          <img src="/logo-dark.png" className="" alt="" />
          <p className="font-semibold py-5">
            Dreamguys Technologies <br /> 3864 Quiet Valley Lane, <br />
            Sherman Oaks, CA, 91403
          </p>
          <p className="font-semibold">
            <strong>John Doe</strong>
            <p>
              Web Designer <br /> Employee ID: FT-0009 <br /> Joining Date: 1
              Jan 2023
            </p>
          </p>
        </div>
        <div>
          <p className="text-3xl font-semibold">PAYSLIP #49029</p>
          <p className="text-lg font-semibold">Salary Month: March, 2019</p>
        </div>
      </div>
      <div className="flex items-center gap-5 justify-between">
        <div className="pt-5 w-[50%]">
          <h1 className="font-semibold text-xl">Deductions</h1>
          <div className="relative overflow-x-auto sm:rounded-lg pt-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white text-black dark:border-gray-700 flex items-center justify-between border">
                  <td className="px-6 py-4 font-semibold">
                    Tax Deducted at Source (T.D.S.)
                  </td>
                  <td className="px-6 py-4 font-semibold">$0</td>
                </tr>
                <tr className="bg-white text-black dark:border-gray-700 flex items-center justify-between border">
                  <td className="px-6 py-4 font-semibold">Provident Fund</td>
                  <td className="px-6 py-4 font-semibold">$0</td>
                </tr>
                <tr className="bg-white text-black dark:border-gray-700 flex items-center justify-between border">
                  <td className="px-6 py-4 font-semibold">ESI</td>
                  <td className="px-6 py-4 font-semibold">$0</td>
                </tr>
                <tr className="bg-white text-black dark:border-gray-700 flex items-center justify-between border">
                  <td className="px-6 py-4 font-semibold">Loan</td>
                  <td className="px-6 py-4 font-semibold">$0</td>
                </tr>
                <tr className="bg-white text-black dark:border-gray-700 flex items-center justify-between border">
                  <td className="px-6 py-4 font-semibold">Total Deductions</td>
                  <td className="px-6 py-4 font-semibold">$59698</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="pt-5 w-[50%]">
          <h1 className="font-semibold text-xl">Earnings</h1>
          <div className="relative overflow-x-auto sm:rounded-lg pt-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white text-black dark:border-gray-700 flex items-center justify-between border">
                  <td className="px-6 py-4 font-semibold">Salary</td>
                  <td className="px-6 py-4 font-semibold">$2999</td>
                </tr>
                <tr className="bg-white text-black dark:border-gray-700 flex items-center justify-between border">
                  <td className="px-6 py-4 font-semibold">
                    House Rent Allowance (H.R.A.)
                  </td>
                  <td className="px-6 py-4 font-semibold">$55</td>
                </tr>
                <tr className="bg-white text-black dark:border-gray-700 flex items-center justify-between border">
                  <td className="px-6 py-4 font-semibold">Conveyance</td>
                  <td className="px-6 py-4 font-semibold">$55</td>
                </tr>
                <tr className="bg-white text-black dark:border-gray-700 flex items-center justify-between border">
                  <td className="px-6 py-4 font-semibold">Other Allowance</td>
                  <td className="px-6 py-4 font-semibold">$55</td>
                </tr>
                <tr className="bg-white text-black dark:border-gray-700 flex items-center justify-between border">
                  <td className="px-6 py-4 font-semibold">Total Earnings</td>
                  <td className="px-6 py-4 font-semibold">$55</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p className="font-semibold text-lg my-5">
        Net Salary: $59698 (Fifty nine thousand six hundred and ninety eight
        only.)
      </p>
    </div>
  );
};

export default Payslip;
