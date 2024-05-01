import { TiShoppingCart } from "react-icons/ti";
import { FaUserDoctor } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  Cell,
  PieChart,
  Pie,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 0,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

const data1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DashHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Welcome</h1>
      <div className="grid grid-cols-12 space-x-5 pt-5">
        <div className="bg-white h-24 col-span-3 rounded-xl px-3 border">
          <div className="flex items-center h-full gap-3">
            <div className="bg-[#e0f2fe] p-3 rounded-full">
              <TiShoppingCart fontSize="35px" color="#0369a1" />
            </div>
            <div>
              <h1 className="text-[#6b7280] text-md font-semibold">
                New Employees
              </h1>
              <span className="text-xl text-[#374151] font-semibold">10</span>
            </div>
          </div>
        </div>
        <div className="bg-white h-24 col-span-3 rounded-xl px-3 border">
          <div className="flex items-center h-full gap-3">
            <div className="bg-[#dcfce7] p-3 rounded-full">
              <RiMoneyDollarCircleLine fontSize="35px" color="#15803d" />
            </div>
            <div>
              <h1 className="text-[#6b7280] text-md font-semibold">Earnings</h1>
              <span className="text-xl text-[#374151] font-semibold">
                $30,785.00
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white h-24 col-span-3 rounded-xl px-3 border">
          <div className="flex items-center h-full gap-3">
            <div className="bg-[#e0e7ff] p-3 rounded-full">
              <FaUserDoctor fontSize="35px" color="#4338ca" />
            </div>
            <div>
              <h1 className="text-[#6b7280] text-md font-semibold">Expenses</h1>
              <span className="text-xl text-[#374151] font-semibold">
                $8,500
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white h-24 col-span-3 rounded-xl px-3 border">
          <div className="flex items-center h-full gap-3">
            <div className="bg-[#fef9c3] p-3 rounded-full">
              <BiCategoryAlt fontSize="35px" color="#a16207" />
            </div>
            <div>
              <h1 className="text-[#6b7280] text-md font-semibold">Profit</h1>
              <span className="text-xl text-[#374151] font-semibold">
                $1,12,000
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 space-x-5 pt-5">
        <div className="bg-white col-span-6 border rounded-xl p-5 ">
          <h1 className="text-[#374151] text-xl font-semibold">Clients</h1>
          <table className="w-full mt-5">
            <tbody>
              <tr className="border-b border-t text-sm">
                <td className="py-2 px-4">
                  <img
                    className="w-8 h-8 object-cover rounded-full"
                    src="https://img.freepik.com/free-photo/happy-successful-businessman-posing-outside_74855-2004.jpg?t=st=1714470155~exp=1714473755~hmac=8620d49fb56686182ef06584645accd7d862dc35cd49e1cb7e0ea4981f3ba3fe&w=740"
                    alt=""
                  />
                </td>
                <td className="py-2 px-4">John</td>
                <td className="py-2 px-4">
                  <span className="bg-gray-200 px-2 py-1 rounded-lg">
                    jhon@gmail.com
                  </span>
                </td>
                <td className="py-2 px-4">
                  <p className="text-[#37415]">2m ago</p>
                </td>
                <td className="py-2 px-4">
                  <p className="flex items-center justify-center gap-2">
                    online <FaCircle color="green" />
                  </p>
                </td>
              </tr>
              <tr className="border-b border-t text-sm">
                <td className="py-2 px-4">
                  <img
                    className="w-8 h-8 object-cover rounded-full"
                    src="https://img.freepik.com/free-photo/portrait-smiley-business-man_23-2148514859.jpg?t=st=1714470687~exp=1714474287~hmac=a68fc9fb75a57b4657c68f3f957ebdd4c3d15240463bef11d433771ebe6edc8d&w=740"
                    alt=""
                  />
                </td>
                <td className="py-2 px-4">Cooper</td>
                <td className="py-2 px-4">
                  <span className="bg-gray-200 px-2 py-1 rounded-lg">
                    cooper@gmail.com
                  </span>
                </td>
                <td className="py-2 px-4">
                  <p className="text-[#37415]">2m ago</p>
                </td>
                <td className="py-2 px-4">
                  <p className="flex items-center justify-center gap-2">
                    online <FaCircle color="green" />
                  </p>
                </td>
              </tr>
              <tr className="border-b border-t text-sm">
                <td className="py-2 px-4">
                  <img
                    className="w-8 h-8 object-cover rounded-full"
                    src="https://img.freepik.com/free-photo/front-view-smiley-business-man_23-2148479583.jpg?t=st=1714470818~exp=1714474418~hmac=0c70e349fd44e241de68a2c9eeded7e57be58b89a5d04cbeeb0282c76c69c6cb&w=740"
                    alt=""
                  />
                </td>
                <td className="py-2 px-4">Finlo</td>
                <td className="py-2 px-4">
                  <span className="bg-gray-200 px-2 py-1 rounded-lg">
                    finlo@gmail.com
                  </span>
                </td>
                <td className="py-2 px-4">
                  <p className="text-[#37415]">2m ago</p>
                </td>
                <td className="py-2 px-4">
                  <p className="flex items-center justify-center gap-1">
                    offline <FaCircle className="text-red-500" />
                  </p>
                </td>
              </tr>
              <tr className="border-b border-t text-sm">
                <td className="py-2 px-4">
                  <img
                    className="w-8 h-8 object-cover rounded-full"
                    src="https://img.freepik.com/premium-photo/bright-picture-happy-smiling-woman_380164-13463.jpg?w=360"
                    alt=""
                  />
                </td>
                <td className="py-2 px-4">Ana</td>
                <td className="py-2 px-4">
                  <span className="bg-gray-200 px-2 py-1 rounded-lg">
                    ana@gmail.com
                  </span>
                </td>
                <td className="py-2 px-4">
                  <p className="text-[#37415]">8m ago</p>
                </td>
                <td className="py-2 px-4">
                  <p className="flex items-center justify-center gap-2">
                    active <FaCircle color="green" />
                  </p>
                </td>
              </tr>
              <tr className="border-b border-t text-sm">
                <td className="py-2 px-4">
                  <img
                    className="w-8 h-8 object-cover rounded-full"
                    src="https://img.freepik.com/premium-photo/young-middle-eastern-young-attractive-male-model-posing_21730-5405.jpg?w=360"
                    alt=""
                  />
                </td>
                <td className="py-2 px-4">Aubin</td>
                <td className="py-2 px-4">
                  <span className="bg-gray-200 px-2 py-1 rounded-lg">
                    aubin@gmail.com
                  </span>
                </td>
                <td className="py-2 px-4">
                  <p className="text-[#37415]">2m ago</p>
                </td>
                <td className="py-2 px-4">
                  <p className="flex items-center justify-center gap-2">
                    offline <FaCircle className="text-red-500" />
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white col-span-6 border rounded-xl p-5">
          <h1 className="text-[#374151] text-xl font-semibold">Total Health</h1>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={data1}
                nameKey="name"
                dataKey="value"
                innerRadius={85}
                outerRadius={110}
                cx="40%"
                cy="50%"
                paddingAngle={3}
              >
                {data1.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                verticalAlign="middle"
                align="right"
                width="30%"
                layout="vertical"
                iconSize={15}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white mb-14 pt-5 border rounded-xl mt-5">
        <h1 className="text-[#374151] text-xl font-semibold pb-5 pl-5">
          Total Revenue
        </h1>
        <AreaChart
          width={1000}
          height={300}
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="1" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis unit="$" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            strokeWidth={2}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            strokeWidth={2}
            fill="url(#colorPv)"
          />
          <Legend />
        </AreaChart>
      </div>
    </div>
  );
};

export default DashHome;
