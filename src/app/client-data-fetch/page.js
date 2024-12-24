"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const clientDataFetch = () => {

    // const [loading, setLoading] = useState();
    // const [users, setUsers] = useState();

    // const fetchListOfUsers = async () => {
    //     try {

    //         setLoading(true);

    //         const fetchData = await fetch('https://dummyjson.com/users')
    //         const data = await fetchData.json()
    //         if (data?.users) {
    //             setUsers(data.users);
    //             setLoading(false)
    //         }

    //     } catch (error) {
    //         setUsers([]);
    //         setLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     fetchListOfUsers();
    // }, [])

    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)

    if (isLoading) return <h1>data loading</h1>
    if (error) return <h1>data error</h1>

    return (
        // <div className='p-10'>
        //     <h1 className='text-xl'>client fetch</h1>
        //     <ul>
        //         {
        //             users && users.length > 0 ?
        //                 users?.map(user => <li key={user.id} className='mt-5 cursor-pointer'>
        //                     <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
        //                 </li>
        //                 )

        //                 : null
        //         }
        //     </ul>
        // </div>
        <div className='p-10'>
            <h1 className='text-xl'>client fetch</h1>
            <ul>
                {
                    data && data.users.length > 0 ?
                        data.users?.map(user => <li key={user.id} className='mt-5 cursor-pointer'>
                            <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
                        </li>
                        )

                        : null
                }
            </ul>
        </div>
    );
};

export default clientDataFetch;