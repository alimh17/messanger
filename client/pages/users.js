import Friends from 'components/users/friends'
import UserTopbar from 'components/users/topbar/userTopbar'
import UserHead from 'components/users/userHead/userHead'
import Users from 'components/users/users'
import React, { useState } from 'react'

const User = () => {

    const [activeTab, setActiveTab] = useState(new Array(2).fill(false))

    return (
        <div className="md:mr-20 h-screen flex flex-col overflow-hidden">
            <UserTopbar active={activeTab} setActive={setActiveTab} />
            <UserHead active={activeTab} setActive={setActiveTab} />
            {activeTab[0] ? <Friends /> : <Users />}
        </div>

    )
}

export default User