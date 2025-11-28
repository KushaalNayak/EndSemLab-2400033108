import React, { useState, useEffect } from "react";
import AddStudent from "./StudentAdd";
import DisplayStudents from "./StudentDisplay";

function App() {
  const [students, setStudents] = useState([]);

  const [sid, setSid] = useState("");
  const [sname, setSname] = useState("");
  const [scgpa, setScgpa] = useState("");
  const [sbacklogs, setSbacklogs] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("students_data");
    if (data) {
      setStudents(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students_data", JSON.stringify(students));
  }, [students]);

  function addStudent() {
    if (!sid || !sname || !scgpa || !sbacklogs) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      sid: sid,
      sname: sname,
      scgpa: scgpa,
      sbacklogs: sbacklogs,
    };
    setStudents([...students, newStudent]);
    setSid("");
    setSname("");
    setScgpa("");
    setSbacklogs("");
  }
  return (
    <div>
      <AddStudent
        sid={sid}
        setSid={setSid}
        sname={sname}
        setSname={setSname}
        scgpa={scgpa}
        setScgpa={setScgpa}
        sbacklogs={sbacklogs}
        setSbacklogs={setSbacklogs}
        addStudent={addStudent}
      />
      <DisplayStudents students={students} />
    </div>
  );
}
export default App;