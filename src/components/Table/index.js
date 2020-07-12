import React from "react";
import "./style.css";

function Table({ employees }) {
  console.log(employees);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Images</th>
          <th>Names</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 ? (
          employees.map((employees, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={employees.picture.thumbnail}
                    alt={employees.name.last}
                  />
                </td>
                <td>
                  {employees.name.last}, {employees.name.first}
                </td>
                <td>{employees.cell}</td>
                <td>{employees.email}</td>
                <td>{employees.dob.date}</td>
                <td>
                  {employees.location.city}, {employees.location.state}
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="5">Loading...</td>
          </tr>
        )}
        ;
      </tbody>
    </table>
  );
}

export default Table;
