import React from 'react'
import Authentication from 'components/auth/authentication'
import { getSession } from 'next-auth/react';

const Atuh = () => {

    return (
        <div>
            <Authentication />
        </div>
    )
}


export default Atuh