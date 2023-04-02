import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

// Define the shape of the Course object

function CInfo(_props) {
  const { slug } = useParams();
  const [courses, setCourses] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:4000/departments/${slug}/courses`);
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [slug]);

  return (
    <div>
      <h1>Departments</h1>
      <table>
        <thead>
          <tr>
            <th>D</th>
            <th>Heiti námskeiðis</th>
            <th>Course units</th>
            <th>Course semester</th>
            <th>Course level</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.courseId}</td>
              <td>{course.title}</td>
              <td>{course.units}</td>
              <td>{course.semester}</td>
              <td>{course.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default CInfo;