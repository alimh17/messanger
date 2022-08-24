import React from 'react'
import Authentication from 'components/auth/authentication'
import Head from 'next/head';

const Atuh = () => {

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>ورود | ثبت نام</title>
            </Head>

            <Authentication />
        </>
    )
}

export default Atuh