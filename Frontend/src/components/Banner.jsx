import React from "react";
import Banner2 from "./Banner2";

function Banner() {
  return (
    <>
      <div className="flex p-4">
        <div
          className="text-grey-100 p-2"
          style={{ width: "125px", height: "100vh" }}
        >
          <h6 className="p-1 text-gray-400">Dashboards</h6>
          <div
            className="card w-full bg-base-100 shadow-xl cursor-pointer flex items-center bg-gray-100 justify-center hover:scale-105 duration-200 p-3"
            style={{ width: "100%", height: "70px" }}
          >
            <figure className="px-2 pt-2">
              <img
                src="../../public/computer-icons-user-profile-circle-abstract-449b748c464eba566641217282fff3a1.png"
                alt="Shoes"
                className="rounded-xl w-full h-full object-cover hover:filter hover:brightness-0"
              />
            </figure>
            <div className="items-center">
              <h2 className="text-xs">Patients</h2>
            </div>
          </div>
          <div>
            <div
              className="card w-full bg-base-100 shadow-xl cursor-pointer flex items-center bg-gray-100 justify-center hover:scale-105 duration-200 p-3 mt-0.5"
              style={{ width: "100%", height: "70px" }}
            >
              <figure className="px-2 pt-2">
                <img
                  src="../../public/computer-icons-database-symbol-icon-design-symbol-421de8aeee1a7aa0791159b29ce74506.png"
                  alt="Shoes"
                  className="rounded-xl w-full h-full object-cover hover:filter hover:brightness-0"
                />
              </figure>
              <div className="items-center">
                <h2 className="text-xs">HR</h2>
              </div>
            </div>
            <div>
              <div
                className="card w-full bg-base-100 shadow-xl cursor-pointer flex items-center bg-gray-100 justify-center hover:scale-105 duration-200 p-3 mt-0.5"
                style={{ width: "100%", height: "70px" }}
              >
                <figure className="px-2 pt-2">
                  <img
                    src="../../public/computer-icons-download-favicon-free-icon-filter-47dd0cafc491202bda3599ce72948cc8.png"
                    alt="Shoes"
                    className="rounded-xl w-full h-full object-cover hover:filter hover:brightness-0"
                  />
                </figure>
                <div className="items-center">
                  <h2 className="text-xs">Labs</h2>
                </div>
              </div>
              <div>
                <div
                  className="card w-full bg-base-100 shadow-xl cursor-pointer flex items-center bg-gray-100 justify-center hover:scale-105 duration-200 p-3 mt-0.5"
                  style={{ width: "100%", height: "70px" }}
                >
                  <figure className="px-2 pt-2">
                    <img
                      src="../../public/computer-icons-shopping-centre-retail-shopping-cart-mall-vector-0413f0c58844ddcad7f2331fc8ad7f5b.png"
                      alt="Shoes"
                      className="rounded-xl w-full h-full object-cover hover:filter hover:brightness-0"
                    />
                  </figure>
                  <div className="items-center">
                    <h2 className="text-xs">Pharma</h2>
                  </div>
                </div>
                <div>
                  {" "}
                  <h6 className="p-1 text-gray-400">Processes</h6>
                  <div
                    className="card w-full bg-base-100 shadow-xl cursor-pointer flex items-center bg-gray-100 justify-center hover:scale-105 duration-200 p-3 mt-0.5"
                    style={{ width: "100%", height: "70px" }}
                  >
                    <figure className="px-2 pt-2">
                      <img
                        src="../../public/computer-icons-form-others-4c3824640cd716b89bbd73385164aeac.png"
                        alt="Shoes"
                        className="rounded-xl w-full h-full object-cover hover:filter hover:brightness-0"
                      />
                    </figure>
                    <div className="items-center">
                      <h2 className="text-xs">Registration</h2>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <div
                    className="card w-full bg-base-100 shadow-xl cursor-pointer flex items-center bg-gray-100 justify-center hover:scale-105 duration-200 p-3 mt-0.5"
                    style={{ width: "100%", height: "70px" }}
                  >
                    <figure className="px-2 pt-2">
                      <img
                        src="../../public/computer-icons-font-awesome-text-file-document-txt-file-8de30caf8fae369b3470e97ae53b18a6.png"
                        alt="Shoes"
                        className="rounded-xl w-full h-full object-cover hover:filter hover:brightness-0"
                      />
                    </figure>
                    <div className="items-center">
                      <h2 className="text-xs">Consultation</h2>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <div
                    className="card w-full bg-base-100 shadow-xl cursor-pointer flex items-center bg-gray-100 justify-center hover:scale-105 duration-200 p-3 mt-0.5"
                    style={{ width: "100%", height: "70px" }}
                  >
                    <figure className="px-2 pt-2">
                      <img
                        src="../../public/pasteur-pipette-computer-icons-laboratory-ambulance-car-9b4854b72187ad5c97eca6ac48eda9b8.png"
                        alt=""
                        className="rounded-xl w-full h-full object-cover hover:filter hover:brightness-0"
                      />
                    </figure>
                    <div className="items-center">
                      <h2 className="text-xs">Reports</h2>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <div
                    className="card w-full bg-base-100 shadow-xl cursor-pointer flex items-center bg-gray-100 justify-center hover:scale-105 duration-200 p-3 mt-0.5"
                    style={{ width: "100%", height: "70px" }}
                  >
                    <figure className="px-2 pt-2">
                      <img
                        src="../../public/credit-card-computer-icons-debit-card-atm-card-credit-card-f71d9f12b5671ddb830b11254b2ca822.png"
                        alt="Shoes"
                        className="rounded-xl w-full h-full object-cover hover:filter hover:brightness-0"
                      />
                    </figure>
                    <div className="items-center">
                      <h2 className="text-xs">Billing</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200" style={{ width: "100%", height: "100vh" }}>
          <Banner2 />
        </div>
      </div>
    </>
  );
}

export default Banner;
