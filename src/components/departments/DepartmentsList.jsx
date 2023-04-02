import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './DepartmentsList.css'


function DList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/departments');
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Deildir</h1>
      <ul>
        {departments.map((department) => (
          <li key={department.id}>
            <Link to ={`/departments/${department.slug}`}>{department.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DList;