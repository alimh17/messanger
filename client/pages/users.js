import React, { useEffect, useState } from 'react'
import UserTopbar from 'components/users/topbar/userTopbar'
import Users from 'components/users/users'
import UserHead from 'components/users/userHead/userHead'
import axios from 'axios'


const User = ({ data }) => {

    const [activeTab, setActiveTab] = useState(new Array(2).fill(false))

    return (
        <div className="md:mr-20 h-screen flex flex-col overflow-hidden">
            <UserTopbar active={activeTab} setActive={setActiveTab} />
            <UserHead active={activeTab} setActive={setActiveTab} />
            <Users active={activeTab} setActive={setActiveTab} data={data} />
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const { data } = await axios.get("http://localhost:5000/api/all_users")
    const newData = data.data.map(item => {
        delete item.password
        delete item.messagesList
        return item
    })

    console.log(newData)
    return {
        props: {
            data: newData
        }
    }
}

export default User