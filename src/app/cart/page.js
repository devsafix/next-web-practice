"use client"
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

const cartPage = () => {

    const pathName = usePathname();

    console.log(pathName);

    const searchParams = useSearchParams();

    console.log(searchParams.get('search'), searchParams.get("randomValue"));

    return (
        <div>
            this is a cart page
        </div>
    );
};

export default cartPage;