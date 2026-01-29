import Footer from '@/components/sections/footer'
import HeaderFour from '@/components/headers/headerFour'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import useAnimation from '@/hooks/useAnimation'

const LayoutFour = () => {
    useAnimation()
    return (
        <>
            <HeaderFour />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default LayoutFour