import React, { useEffect, useState } from 'react'
import Sidebar from 'components/sidebar/sidebar'
import { useRouter } from 'next/router'

const MainLayout = (props) => {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState(new Array(5).fill(false))

    const activeHomeTab = () => {
        const copyTabs = [...activeTab]
        if (router.pathname === "/") {
            copyTabs.fill(false)
            copyTabs[0] = true
        } else if (router.pathname === "/setting") {
            copyTabs.fill(false)
            copyTabs[4] = true
        }
        setActiveTab(copyTabs)
    }

    useEffect(() => {
        activeHomeTab()
    }, [router.pathname])

    return (
        <>
            {router.pathname !== "/auth" && <Sidebar active={activeTab} setActive={setActiveTab} />}
            {props.children}
        </>
    )
}

export default MainLayout