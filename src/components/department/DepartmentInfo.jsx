import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

function DInfo(_props) {
    const { slug } = useParams();
    const [department, setDepartment] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/departments/${slug}`)
        .then((response) => response.json())
        .then((data) => setDepartment(data))
        .catch((error) => console.error(error));
    }, [slug]);

    if (!department) {
        return <div>Loading..</div>;
    }

    return (
        <div>
            <h1>{department.title}</h1>
            <p>{department.description}</p>
            <Link to={`/departments/${slug}/courses`}>
                <button type="button">
                    Áfangar
                </button>
            </Link>
        </div>
    )
    
}

export default DInfo;