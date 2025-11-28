// import React from "react";

function DisplayStudents({ students }) {
  return (
    <div>
      <h2>All Students</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>CGPA</th>
            <th>Backlogs</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu, index) => (
            <tr key={index}>
              <td>{stu.sid}</td>
              <td>{stu.sname}</td>
              <td>{stu.scgpa}</td>
              <td>{stu.sbacklogs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DisplayStudents;
