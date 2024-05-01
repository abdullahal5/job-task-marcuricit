import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const Deductions = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Toaster />
      <div className="py-2 flex items-center justify-end cursor-pointer">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 px-5 py-2 rounded-full text-white font-semibold"
        >
          + Add Deductions
        </button>

        {/* modal */}

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h2"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Add Addition
                    </Dialog.Title>
                    <div className="mt-2">
                      <div>
                        <label>Name</label>
                        <input
                          type="text"
                          className="w-full rounded-lg py-2 border outline-none px-5 mt-3"
                          placeholder="name"
                        />
                      </div>
                      <div className="pt-4">
                        <label className="block">Category</label>
                        <select
                          className="border w-full py-2 rounded-lg mt-3"
                          defaultValue="1"
                          name=""
                          id=""
                        >
                          <option disabled value="1">
                            Select category
                          </option>
                          <option value="Monthly remuneration">
                            Monthly remuneration
                          </option>
                          <option value="Additional remuneration">
                            Additional remuneration
                          </option>
                        </select>
                      </div>
                      <div className="pt-4">
                        <label>Unit Amount</label>
                        <input
                          type="text"
                          className="w-full rounded-lg py-2 border outline-none px-5 mt-3"
                          placeholder="$ 20,999.00"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <button className="bg-green-500 px-5 py-2 rounded-full font-semibold text-white mt-5">
                          Sumbit
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Default/Unit Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Absent amount
              </th>
              <td className="px-6 py-4">$5</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button className="text-sm bg-green-500 p-2 text-white rounded-lg hover:bg-green-600">
                    <RiEdit2Fill />
                  </button>
                  <button className="text-sm bg-red-500 p-2 text-white rounded-lg hover:bg-red-600">
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Unpaid leave
              </th>
              <td className="px-6 py-4">$20</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button className="text-sm bg-green-500 p-2 text-white rounded-lg hover:bg-green-600">
                    <RiEdit2Fill />
                  </button>
                  <button className="text-sm bg-red-500 p-2 text-white rounded-lg hover:bg-red-600">
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Advance
              </th>
              <td className="px-6 py-4">$8</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button className="text-sm bg-green-500 p-2 text-white rounded-lg hover:bg-green-600">
                    <RiEdit2Fill />
                  </button>
                  <button className="text-sm bg-red-500 p-2 text-white rounded-lg hover:bg-red-600">
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Deductions;
