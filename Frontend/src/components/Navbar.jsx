import React from "react";

function Navbar() {
  return (
    <div className="bg-gray-800">
      <div className="navbar flex justify-between items-center">
        <div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-grow flex justify-center items-center">
          {/* Left side: Patients dropdown */}
          {/* Centered label */}
          <label
            className="rounded-full input input-bordered flex items-center gap-2"
            style={{ width: "500px" }}
          >
            <ul className="menu menu-horizontal px-1 bg-gray-100 p-1">
              <li>
                <details>
                  <summary>Patients</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <a>Patient 1</a>
                    </li>
                    <li>
                      <a>Patient 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          {/* Space */}
          <div className="w-3" />
          <button className="btn btn-success text-white rounded-full">
            + Add New
          </button>
        </div>
        {/* Right side: Buttons and dropdown */}
        <div>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {/* Indicator span with red color */}
              <span className="badge badge-xs bg-red-500 indicator-item"></span>
            </div>
          </button>
          <div className="dropdown dropdown-end mr-10">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
