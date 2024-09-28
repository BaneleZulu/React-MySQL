import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/root")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Type</th>
            <th>Fullname</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.user_type}</td>
              <td>
                {student.stu_fname} {student.stu_lname}
              </td>
              <td>{student.stu_phone}</td>
              <td>{student.stu_email}</td>
              <td>{student.stu_dob}</td>
              <td>{student.stu_gender}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
