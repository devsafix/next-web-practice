import React from 'react';


const fetchUserData = async (id) => {
    try {
        const fetchData = await fetch(`https://dummyjson.com/users/${id}`)
        const data = await fetchData.json()
        return (data);
    } catch (error) {
        throw new Error(error);
    }
}


const userDetails = async ({ params }) => {

    const { details: id } = await params;

    const singleUser = await fetchUserData(id);

    console.log(singleUser);

    return (
        <div>
            user details: {singleUser.firstName}
            user details: {singleUser.lastName}
            user details: {singleUser.email}
        </div>
    );
};

export default userDetails;