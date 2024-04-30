const Create = () => {

  const handleGetFormData = (e) => {
    e.preventDefault();
    const firstName = e.target?.firstname?.value;
    const lastName = e.target.lastname?.value;
    const email = e.target.email?.value;
    const age = e.target.age?.value;
    const salary = e.target.salary?.value;
    const city = e.target.city?.value;
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
      number,
    };

    console.log(data);
  };

  return (
    <div className="bg-white py-5 px-5 rounded-lg">
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
              placeholder="Jhon"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm pb-1 pl-1 font-semibold">Last name</label>
            <input
              type="text"
              className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
              name="lastname"
              placeholder="Doe"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm pb-1 pl-1 font-semibold">Email</label>
            <input
              type="email"
              className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
              name="email"
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
              placeholder="100"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm pb-1 pl-1 font-semibold">Company</label>
            <input
              type="text"
              className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
              name="company"
              placeholder="Marcuric IT"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm pb-1 pl-1 font-semibold">Salary</label>
            <input
              type="text"
              className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
              name="salary"
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
              placeholder="New York"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm pb-1 pl-1 font-semibold">Postion</label>
            <input
              type="text"
              className="border outline-none w-80 rounded-lg py-3 px-4 bg-gray-100"
              name="position"
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
              placeholder="+880 1791 505 345"
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-lg font-semibold bg-blue-500 w-full text-white my-8 py-3 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
