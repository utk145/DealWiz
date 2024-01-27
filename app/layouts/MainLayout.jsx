"use client"
import TopMenu from './includes/TopMenu'

const MainLayout = ({ children }) => {
    return (
        <>
            <div id='MainLayout' className='min-w-[1050px] max-w-[1300px] mx-auto'>
                <div className="">
                    <TopMenu/>
                </div>
            </div>
        </>
    )
}

export default MainLayout