import Footer from '@/components/sections/footer'
import HeaderThree from '@/components/headers/headerThree'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import useAnimation from '@/hooks/useAnimation'

const LayoutThree = () => {
    useAnimation()
    return (
        <>
            <HeaderThree />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default LayoutThree