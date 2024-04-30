import { IoSearchSharp } from "react-icons/io5";

const EmployeeSalary = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex items-center gap-10">
        <h1 className="text-xl font-semibold py-6 pl-6">Search</h1>
        <div className="relative">
          <input
            type="text"
            className="bg-gray-200 w-54 py-2 rounded-lg outline-none border pl-4"
            placeholder="50 records..."
          />
          <span>
            <IoSearchSharp className="absolute right-5 top-3 text-[#757575] text-xl" />
          </span>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Age 
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                1
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                2
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                3
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
        <div className="bg-white dark:bg-gray-800">
          <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-3">
            <p>Display:</p>
            <select className="border-2 px-5 py-2 rounded-lg">
              <option selected value="5">
                5
              </option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <p>- page 1 of 12 -</p>
            <p>Go to Page:</p>
            <input
              className="border-2 w-20 py-2 rounded-lg px-5 outline-none"
              defaultValue={1}
              type="number"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSalary;
