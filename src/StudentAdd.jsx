import React from "react";
function AddStudent({
  sid,
  setSid,
  sname,
  setSname,
  scgpa,
  setScgpa,
  sbacklogs,
  setSbacklogs,
  addStudent,
}) {
  return (
    <div>
      <h2>Add Student</h2>
      <div>
        Student ID:
        <input
          type="text"
          value={sid}
          onChange={(e) => setSid(e.target.value)}
        />
      </div>
      <div>
        Student Name:
        <input
          type="text"
          value={sname}
          onChange={(e) => setSname(e.target.value)}
        />
      </div>
      <div>
        Student CGPA:
        <input
          type="number"
          value={scgpa}
          onChange={(e) => setScgpa(e.target.value)}
        />
      </div>
      <div>
        Student Backlogs:
        <input
          type="text"
          value={sbacklogs}
          onChange={(e) => setSbacklogs(e.target.value)}
        />
      </div>
      <button onClick={addStudent}>Add</button>
    </div>
  );
}
export default AddStudent;