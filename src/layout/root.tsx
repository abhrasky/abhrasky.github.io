import Footer from '@/components/sections/footer'
import HeaderOne from '@/components/headers/headerOne'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import useAnimation from '@/hooks/useAnimation';

const RootLayout = () => {
    useAnimation()
    return (
        <>
            <HeaderOne />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default RootLayout