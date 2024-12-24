import Link from 'next/link';
import React from 'react';

const fetchUserData = async () => {
    try {
        const fetchData = await fetch('https://dummyjson.com/users')
        const data = await fetchData.json()
        return (data.users);
    } catch (error) {
        throw new Error(error);
    }
}

const serverDataFetch = async () => {

    const listOfUsers = await fetchUserData();
    // console.log(listOfUsers);

    return (
        <div className='p-10'>
            <h1 className='text-xl'>server fetch</h1>
            <ul>
                {
                    listOfUsers && listOfUsers.length > 0 ?
                        listOfUsers?.map(user => <li key={user.id} className='mt-5 cursor-pointer'>
                            <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
                        </li>
                        )

                        : null
                }
            </ul>
        </div>
    );
};

export default serverDataFetch;