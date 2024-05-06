import React from "react";

function Banner2() {
  return (
    <>
      <div>
        <div className="mt-1 border p-2 rounded-full">
          <div className="bg-white p-3 flex items-center">
            <img
              src="../../public/users-group-computer-icons-membership-5cdcf6d6434cb9283ab0e32ffd0077a3.png"
              className="w-6 h-6 mr-4"
              alt="Consultants Icon"
            />
            <h1 className="text-green-600">Consultants</h1>
          </div>
        </div>
        <div className="mt-1 p-2 h-10">
          <div className="bg-white p-3 flex items-center">
            <h1 className="text-green-600 font-semibold">Filters</h1>
            <div className="px-20 flex ">
              <ul className="menu menu-horizontal border rounded-full h-12">
                <li>
                  <details>
                    <summary className="px-0 ml-1 mb-1 w-40 ">
                      Select Range
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                      <li>
                        <a>Range 1</a>
                      </li>
                      <li>
                        <a>Range 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <div className="flex-grow flex justify-center items-center">
              <input type="radio" name="radio-1" className="radio" checked />
              <h4 className="px-3">Summary</h4>
              <input type="radio" name="radio-1" className="radio" checked />
              <h4 className="px-3">Branch Wise</h4>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div
            className="mt-12 border p-2 rounded-full"
            style={{ width: "350px" }}
          >
            <div className="bg-white p-3">
              <h1 className="text-green-600 font-semibold">Consultant Count</h1>
              <h1 className="font-bold">90/900</h1>
              <p className="text-gray-400 text-xs">Today/Period</p>
            </div>
          </div>
          <div
            className="mt-12 border p-2 rounded-full"
            style={{ width: "350px" }}
          >
            <div className="bg-white p-3 items-center">
              <h1 className="text-green-600 font-semibold">Consultations</h1>
              <h1 className="font-bold">11/25</h1>
              <p className="text-gray-400 text-xs">Today/Period</p>
            </div>
          </div>
          <div
            className="mt-12 border p-2 rounded-full"
            style={{ width: "350px" }}
          >
            <div className="bg-white p-3 items-center">
              <h1 className="text-green-600 font-semibold">Labs</h1>
              <h1 className="font-bold">25/560</h1>
              <p className="text-gray-400 text-xs">Today/Period</p>
            </div>
          </div>
          <div
            className="mt-12 border p-2 rounded-full"
            style={{ width: "350px" }}
          >
            <div className="bg-white p-3 items-center">
              <h1 className="text-green-600 font-semibold">DietPlans</h1>
              <h1 className="font-bold">25/250</h1>
              <p className="text-gray-400 text-xs">Today/Period</p>
            </div>
          </div>
        </div>
        <div className="mt-2 border p-2 rounded-full">
          <div className="bg-white p-6 h-30">
            <h1>Consultants</h1>
            <table className="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-4">NAME</th>
                  <th className="border border-gray-300 p-4">PATIENT COUNT</th>
                  <th className="border border-gray-300 p-4">LABS</th>
                  <th className="border border-gray-300 p-4">DIET PLANS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 text-center">
                    John Smith
                  </td>
                  <td className="border border-gray-300 p-4 text-center">12</td>
                  <td className="border border-gray-300 p-4 text-center">3</td>
                  <td className="border border-gray-300 p-4 text-center">6</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 text-center">
                    Jane Doe
                  </td>
                  <td className="border border-gray-300 p-4 text-center">8</td>
                  <td className="border border-gray-300 p-4 text-center">2</td>
                  <td className="border border-gray-300 p-4 text-center">4</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 text-center">
                    Mark Johnson
                  </td>
                  <td className="border border-gray-300 p-4 text-center">6</td>
                  <td className="border border-gray-300 p-4 text-center">1</td>
                  <td className="border border-gray-300 p-4 text-center">2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 text-center">
                    Mary lee
                  </td>
                  <td className="border border-gray-300 p-4 text-center">10</td>
                  <td className="border border-gray-300 p-4 text-center">4</td>
                  <td className="border border-gray-300 p-4 text-center">8</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 text-center">
                    David Chen
                  </td>
                  <td className="border border-gray-300 p-4 text-center">14</td>
                  <td className="border border-gray-300 p-4 text-center">5</td>
                  <td className="border border-gray-300 p-4 text-center">9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner2;
