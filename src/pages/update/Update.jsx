import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Update = () => {
  const loader = useLoaderData();
  const [load, setLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (loader) {
      setLoad(false);
    }
  }, [loader]);


  const handleGetFormData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const firstName = e.target?.firstname?.value;
    const lastName = e.target.lastname?.value;
    const email = e.target.email?.value;
    const age = e.target.age?.value;
    const salary = e.target.salary?.value;
    const city = e.target.city?.value;
    const company = e.target.company?.value;
    const position = e.target.position?.value;
    const number = e.target.number?.value;

    const data = {
      firstName,
      lastName,
      email,
      age,
      salary,
      city,
      position,
      company,
      number,
    };

    try {
      await axiosPublic.patch(`/employees/${loader._id}`, data).then((res) => {
        if (res.data.modifiedCount > 0 && res.data.acknowledged === true) {
          toast.success("Updated Successfully");
          setLoading(false);
        }
      });
    } catch (error) {
      console.log(error.message, "error occured while updating data");
      setLoading(false);
    }
  };

  return (
    <div>
      {load ? (
        <div className="h-screen flex items-center justify-center">
          <FaSpinner fontSize="5rem" className="animate-spin" />
        </div>
      ) : (
        <div className="bg-white py-5 px-5 rounded-lg">
          <div>
            <Toaster />
          </div>
          <h1 className="text-3xl font-medium mb-5">Create Employee Details</h1>
          <form onSubmit={handleGetFormData}>
            <div className="flex items-center justify-around">
              <div className="flex flex-col">
                <label className="text-sm pb-1 pl-1 font-semibold">
                  First name
                </label>
                <input
                  type="text"
                  className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
                  name="firstname"
                  defaultValue={loader?.firstName || ""}
                  placeholder="Jhon"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm pb-1 pl-1 font-semibold">
                  Last name
                </label>
                <input
                  type="text"
                  className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
                  name="lastname"
                  defaultValue={loader?.lastName || ""}
                  placeholder="Doe"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm pb-1 pl-1 font-semibold">Email</label>
                <input
                  type="email"
                  className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
                  name="email"
                  defaultValue={loader?.email || ""}
                  placeholder="jhondoe@gmail.com"
                />
              </div>
            </div>
            <div className="flex items-center justify-around pt-10">
              <div className="flex flex-col">
                <label className="text-sm pb-1 pl-1 font-semibold">Age</label>
                <input
                  type="number"
                  className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
                  name="age"
                  defaultValue={loader?.age ? loader.age : ""}
                  placeholder="100"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm pb-1 pl-1 font-semibold">
                  Company
                </label>
                <input
                  type="text"
                  className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
                  name="company"
                  defaultValue={loader?.company || ""}
                  placeholder="Marcuric IT"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm pb-1 pl-1 font-semibold">
                  Salary
                </label>
                <input
                  type="text"
                  className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
                  name="salary"
                  defaultValue={loader?.salary || "$100"}
                  placeholder="$10, 999"
                />
              </div>
            </div>
            <div className="flex items-center justify-around pt-10">
              <div className="flex flex-col">
                <label className="text-sm pb-1 pl-1 font-semibold">City</label>
                <input
                  type="text"
                  className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
                  name="city"
                  defaultValue={loader?.city || ""}
                  placeholder="New York"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm pb-1 pl-1 font-semibold">
                  Postion
                </label>
                <input
                  type="text"
                  className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
                  name="position"
                  defaultValue={loader?.position || "Frontend Developer"}
                  placeholder="Software Engineer"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm pb-1 pl-1 font-semibold">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
                  name="number"
                  defaultValue={loader?.number}
                  placeholder="+880 1791 505 345"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading === true}
              className="text-lg font-semibold bg-blue-500 w-full text-white my-8 py-3 rounded-lg flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? <FaSpinner className="animate-spin text-white" /> : ""}
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Update;
