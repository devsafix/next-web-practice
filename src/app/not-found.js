import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-7xl'>Not Found</h1>
            <Link href={"/"}>GO To Home</Link>
        </div>
    );
};

export default NotFound;