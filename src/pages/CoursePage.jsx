import React from 'react';
import CInfo from '../components/courses/CoursesList';
import { useLocation } from 'react-router-dom';

function Department() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const slug = searchParams.get('slug');

    return (
        <div>
            <CInfo slug={slug} />
        </div>
    )
}

export default Department;