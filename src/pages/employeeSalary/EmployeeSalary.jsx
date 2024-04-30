import { IoSearchSharp } from "react-icons/io5";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const EmployeeSalary = () => {
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(Date.now());

  useEffect(() => {
    axiosPublic.get("/employess").then((response) => setData(response.data));
  }, [axiosPublic, update]);

  const handleDelete = (id) => {
    axiosPublic.delete(`/delete/${id}`).then((response) => {
      if (response.data.deletedCount > 0) {
        setUpdate(Date.now());
        toast.success("Delete Successful");
      }
    });
  };

  return (
    <div className="bg-white rounded-lg">
      <Toaster />
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
              <th scope="col" className="px-6 py-3">
                Salary
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {index + 1}
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.firstName} {item.lastName}
                </th>
                <td className="px-6 py-4">{item.number}</td>
                <td className="px-6 py-4">{item.age}</td>
                <td className="px-6 py-4">{item.company || "Marcuric IT"}</td>
                <td className="px-6 py-4">${item.salary}</td>
                <td className="px-6 py-4">{item.position}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Link
                    // to={`/dashboard/allProduct/updateContent/${item?._id}`}
                    >
                      <button className="text-sm bg-green-500 p-2 text-white rounded-lg hover:bg-green-600">
                        <RiEdit2Fill />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="text-sm bg-red-500 p-2 text-white rounded-lg hover:bg-red-600"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-white dark:bg-gray-800">
          <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-3">
            <p>Display:</p>
            <select className="border-2 px-5 py-2 rounded-lg">
              <option defaultValue="5">5</option>
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
