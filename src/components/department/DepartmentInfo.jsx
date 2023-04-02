import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

function DInfo(_props) {
    const { slug } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000`)
    })
    
}

export default DInfo;