import Footer from '@/components/sections/footer'
import HeaderTwo from '@/components/headers/headerTwo'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import useAnimation from '@/hooks/useAnimation'

const LayoutTwo = () => {
    useAnimation()
    return (
        <>
            <HeaderTwo />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default LayoutTwo