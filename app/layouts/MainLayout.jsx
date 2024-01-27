"use client"
import MainHeader from './includes/MainHeader'
import SubMenu from './includes/SubMenu'
import TopMenu from './includes/TopMenu'

const MainLayout = ({ children }) => {
    return (
        <>
            <div id='MainLayout' className='min-w-[1050px] max-w-[1300px] mx-auto'>
                <div className="">
                    <TopMenu/>
                    <MainHeader/>
                    <SubMenu/>
                </div>
            </div>
        </>
    )
}

export default MainLayout