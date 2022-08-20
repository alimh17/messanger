import React, { useEffect, useState } from 'react'
import Sidebar from 'components/sidebar/sidebar'
import { useRouter } from 'next/router'

const MainLayout = (props) => {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState(new Array(5).fill(false))

    const activeHomeTab = () => {
        const copyTabs = [...activeTab]
        copyTabs[0] = true
        setActiveTab(copyTabs)
    }

    useEffect(() => {
        activeHomeTab()
    }, [])

    return (
        <div>
            {router.pathname !== "/auth" && <Sidebar active={activeTab} setActive={setActiveTab} />}
            {props.children}
        </div>
    )
}

export default MainLayout