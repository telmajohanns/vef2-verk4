import { useState, useEffect } from 'react';
//

function CInfo(props) {
    const { slug } = props;
    const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:4000/departments/${slug}/courses`)
    .then((response) => response.json())
    .then((data) => setCourses(data))
    .catch((error) => console.error(error));
}, [slug]);

    return (
      <div>
        hey
      </div>
    )
    
}

export default CInfo;