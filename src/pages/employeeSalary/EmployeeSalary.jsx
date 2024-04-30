import { IoSearchSharp } from "react-icons/io5";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const EmployeeSalary = () => {
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(Date.now());
  const [load, setLoad] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [tfoot, setTfoot] = useState({});
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axiosPublic
      .get(`/employees?page=${currentPage}&item=${itemsPerPage}`)
      .then((response) => {
        setLoad(true)
        setData(response?.data?.data);
        setTfoot(response?.data);
        setTotalPages(response.data.totalPages);
        setLoad(false);
      });
  }, [axiosPublic, update, currentPage, itemsPerPage]);

  const handleDelete = (id) => {
    axiosPublic.delete(`/delete/${id}`).then((response) => {
      if (response.data.deletedCount > 0) {
        setUpdate(Date.now());
        toast.success("Delete Successful");
      }
    });
  };

  const handleSearchInput = (val) => {
    setSearchInput(val);
  };

  const search = () => {
    if (!searchInput.trim()) {
      return data;
    } else {
      const result = data?.filter((item) =>
        item?.firstName.toLowerCase()?.includes(searchInput?.toLowerCase())
      );
      return result;
    }
  };

  const handleGetDataOfValue = (e) => {
    setLoad(true);
    const number = parseInt(e.target?.value);
    if (number > 0) {
      setItemsPerPage(number);
      setLoad(false);
    }
  };

  const handleGetPage = (e) => {
    setLoad(true);
    const number = parseInt(e.target?.value);
    if (number > 0 && number <= totalPages) {
      setCurrentPage(number);
      setLoad(false);
    } else {
      setLoad(false);
    }
  };

  const handlePageButton = (number) => {
    setLoad(true);
    if (number > 0 && number <= totalPages) {
      setCurrentPage(number);
      setLoad(false);
    } else {
      setLoad(false);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    const displayPages = pageNumbers.slice(0, 5);
    const lastPage = pageNumbers[pageNumbers.length - 1];

    return (
      <>
        {displayPages.map((number) => (
          <button
            key={number}
            onClick={() => handlePageButton(number)}
            className={`px-3 py-1 mx-1 rounded-full ${
              currentPage === number ? "bg-blue-500 text-white" : "text-black"
            }`}
          >
            {number}
          </button>
        ))}
        {totalPages > 3 && <span className="mx-1">. . . .</span>}
        <button
          key={lastPage}
          onClick={() => handlePageButton(lastPage)}
          className={`px-3 py-1 ml-4 rounded-full ${
            currentPage === lastPage ? "bg-blue-500 text-white" : "text-black"
          }`}
        >
          {lastPage}
        </button>
      </>
    );
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
            onChange={(e) => handleSearchInput(e.target.value)}
            placeholder="50 records..."
          />
          <span>
            <IoSearchSharp className="absolute right-5 top-3 text-[#757575] text-xl" />
          </span>
        </div>
      </div>
      {load ? (
        <div className="flex items-center justify-center text-3xl gap-5 h-[80vh]">
          <FaSpinner className="animate-spin text-black" />
          <p className="">Loading...</p>
        </div>
      ) : (
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
              {search()?.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.id}
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
                      <Link to={`/payroll/payslip/update/${item?._id}`}>
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
          <div className="bg-white dark:bg-gray-800 flex items-center justify-between">
            <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-3">
              <p>Display:</p>
              <select
                onChange={handleGetDataOfValue}
                className="border-2 px-5 py-2 rounded-lg"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
              <p>
                - page <strong>{tfoot.currentPage}</strong> of{" "}
                <strong>{tfoot.totalPages}</strong> -
              </p>
              <p>Go to Page:</p>
              <input
                className="border-2 w-20 py-2 rounded-lg px-5 outline-none"
                onChange={handleGetPage}
                value={currentPage}
                type="number"
              />
            </div>
            <div>
              <button
                onClick={handlePrevPage}
                className="px-3 py-3 mx-1 rounded-full text-blue-500 hover:bg-blue-500 duration-300 hover:text-white"
              >
                <FaChevronLeft />
              </button>
              {renderPageNumbers()}
              <button
                onClick={handleNextPage}
                className="px-3 py-3 mx-1 rounded-full text-blue-500 hover:bg-blue-500 duration-300 hover:text-white"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeSalary;
