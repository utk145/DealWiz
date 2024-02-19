"use client"
import { useEffect, useState } from 'react'
import Footer from './includes/Footer'
import MainHeader from './includes/MainHeader'
import SubMenu from './includes/SubMenu'
import TopMenu from './includes/TopMenu'
import Loading from '../components/Loading.Component'

const MainLayout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        window.addEventListener("storage", function () {
            let res = localStorage.getItem("isLoading")
            res === "false" ? setIsLoading(false) : setIsLoading(true)
        })
    }, [])


    return (
        <>
            <div id='MainLayout' className='min-w-[1050px] max-w-[1300px] mx-auto'>
                <div className="">
                    {isLoading ? <Loading /> : <></>}
                    <TopMenu />
                    <MainHeader />
                    <SubMenu />
                </div>
                <div>{children}</div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default MainLayout