import { redirect } from 'next/navigation';
import React from 'react';

const accountPage = () => {

    const userProfile = null;

    if (userProfile === null) {
        redirect("/profile")
    }

    return (
        <div>
            This is account page
        </div>
    );
};

export default accountPage;