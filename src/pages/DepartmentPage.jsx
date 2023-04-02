import React from 'react';
import DInfo from '../components/department/DepartmentInfo';
import { useLocation } from 'react-router-dom';

function Department() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const slug = searchParams.get('slug');

    return (
        <div>
            <DInfo slug={slug} />
        </div>
    )
}

export default Department;