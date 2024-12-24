import { redirect } from 'next/navigation';
import React from 'react';

const accountPage = () => {

    const userProfile = null;

    // if (userProfile === null) {
    //     redirect("/profile")
    // }

    // if (userProfile === null) {
    //     redirect("/cart?search=product1&randomValue=abcde")
    // }

    if (userProfile === null) {
        redirect("/products?search=product1")
    }

    return (
        <div>
            This is account page
        </div>
    );
};

export default accountPage;