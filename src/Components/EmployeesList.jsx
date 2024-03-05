import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const EmployeesList = ({ loginStatus }) => {
  const [searchName, setSearchName] = useState("");
  const [searchedList, setSearchedList] = useState([]);
  const [employeesList, setEmployeesList] = useState([
    {
      employeeId: 1,
      name: "arjun",
      DOB: "15/11/2000",
      Role: "Software engineer",
    },
    { employeeId: 2, name: "mahesh", DOB: "15/01/2000", Role: "Web Developer" },
    {
      employeeId: 3,
      name: "suresh",
      DOB: "5/11/2000",
      Role: "Mechanical engineer",
    },
    {
      employeeId: 4,
      name: "amit",
      DOB: "15/11/1980",
      Role: "Electrical engineer",
    },
    {
      employeeId: 5,
      name: "suraj",
      DOB: "05/12/2000",
      Role: "DevOps engineer",
    },
    {
      employeeId: 6,
      name: "aryan",
      DOB: "15/1/1999",
      Role: "Automation Engineer",
    },
    {
      employeeId: 7,
      name: "mahesh",
      DOB: "15/1/1999",
      Role: "Automation Engineer",
    },
  ]);
  function searchEmployee() {
    let searchedList = employeesList.filter(
      (emp) => emp.name.toLowerCase().trim() == searchName.toLowerCase().trim()
    );
    setSearchedList(searchedList);
  }
  useEffect(() => {
    searchEmployee();
  }, [searchName]);
  return (
    <div className="pb-10">
      {loginStatus ? (
        <div>
          <div className="flex relative items-center">
            <input
              className="bg-[#5E5E5E82] w-[90%] mx-auto block py-2 px-20 font-bold"
              type="text"
              placeholder="Search with name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} className="absolute right-14" />
          </div>
          <div className="flex flex-col">
            {searchedList.length === 0
              ? employeesList.map((e) => (
                  <Employee
                    key={e.employeeId}
                    name={e.name}
                    empId={e.employeeId}
                    role={e.Role}
                    dob={e.DOB}
                  />
                ))
              : searchedList.map((e) => (
                  <Employee
                    key={e.employeeId}
                    name={e.name}
                    empId={e.employeeId}
                    role={e.Role}
                    dob={e.DOB}
                  />
                ))}
          </div>
        </div>
      ) : (
        <Link to={"/"}>Login Now</Link>
      )}
    </div>
  );
};

export default EmployeesList;
