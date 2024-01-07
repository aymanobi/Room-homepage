import { useState } from 'react'

import hamburger from '../assets/images/icon-hamburger.svg'
import icon from '../assets/images/logo.svg'
import close from '../assets/images/icon-close.svg'

const MobileNav = () => {
    const [active, setActive] = useState(false)

    const openNav = () => {
        setActive(true)
    }
    const closeNav = () => {
        setActive(false)
    }
    return (
        <div className='absolute w-full h-screen lg:hidden'>
           
                {!active && <div className='p-7 flex items-center'>
                    <button><img src={hamburger} alt="Hamburger" onClick={openNav} /></button>
                    <img src={icon} alt="logo" className='mx-auto' />
                </div>}

                <div className={active ? 'bg-White w-full p-12 flex items-center justify-between' : 'hidden'}>
                    <button onClick={closeNav}>
                        <img src={close} alt="close" />
                    </button>

                    <ul className='flex gap-4 font-bold'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Shop</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            </div>
    )
}

export default MobileNav