import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import Home from "../Components/Home";
import Login from "../Components/Login";
import EmployeesList from "../Components/EmployeesList";
const CustomRoute = ({ userList }) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/" && (
        <div className="w-full flex justify-center items-center flex-col">
          <div className="w-full flex justify-end">
            <Link to="#">
              <img
                src="../../src/assets/images/Group 46@2x.png"
                alt="support"
                className="w-[50px]"
              />
            </Link>
          </div>
          <div className="flex flex-col mt-5 mb-14">
            <p className="ml-auto px-2 py-0.5 mb-[-7px] bg-[#5E5E5EB5] rounded-[100%] text-[#36A546]">
              4
            </p>
            <img
              src="../../src/assets/images/moptro logo-1@2x.png"
              alt="moptro"
              className="w-[100px]"
            />
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Login userList={userList}  setLoginStatus={setLoginStatus}/>} />
        <Route path="/home" element={<Home loginStatus={loginStatus}/>}/>
        <Route path="/employees" element={<EmployeesList loginStatus={loginStatus}/>}/>
      </Routes>
      {pathname !== "/" && (
        <div className="fixed bottom-0 flex justify-between w-full h-12 bg-[#0F2323] rounded-full">
          <Link
            to={"/home"}
            className={`flex justify-center items-center w-1/2 text-[#36A54680] rounded-full ${
              pathname == "/home" ? "bg-[#38383880]" : ""
            }`}
          >
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link
            to={"/employees"}
            className={`flex justify-center items-center w-1/2 text-[#36A54680] rounded-full ${
              pathname == "/employees" ? "bg-[#38383880]" : ""
            }`}
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default CustomRoute;
