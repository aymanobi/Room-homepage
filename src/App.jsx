import { useState } from 'react'
import { DATA } from './constants/index'

import lightAbout from './assets/images/image-about-light.jpg'
import darkAbout from './assets/images/image-about-dark.jpg'

import imgDesk1 from './assets/images/desktop-image-hero-1.jpg'
import imgDesk2 from './assets/images/desktop-image-hero-2.jpg'
import imgDesk3 from './assets/images/desktop-image-hero-3.jpg'

import imgMob1 from './assets/images/mobile-image-hero-1.jpg'
import imgMob2 from './assets/images/mobile-image-hero-2.jpg'
import imgMob3 from './assets/images/mobile-image-hero-3.jpg'

import MobileNav from './components/MobileNav'

import prev from './assets/images/icon-angle-left.svg'
import next from './assets/images/icon-angle-right.svg'

import arrow from './assets/images/icon-arrow.svg'
import icon from './assets/images/logo.svg'
import Author from './components/Author'
export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const arrDesk = [imgDesk1, imgDesk2, imgDesk3]
  const arrMob = [imgMob1, imgMob2, imgMob3]

  const goNext = () => {
    if (currentIndex === arrDesk.length - 1 || currentIndex === arrMob.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const goPrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(arrDesk.length - 1)
      setCurrentIndex(arrMob.length - 1)
    } else {
      setCurrentIndex(prev => prev - 1)
    }
  }
  return (
    <>
      <main className="w-full min-h-screen font-league">

        <section className='w-full h-3/4 flex items-center flex-col lg:flex-row'>
          <div className='relative w-full h-full lg:w-3/5'>

            <MobileNav />
            <div className='absolute w-max p-10 flex items-center justify-between gap-24 max-[820px]:hidden'>
              <img src={icon} alt="icon" />
              <ul className='flex items-center justify-between gap-10 text-White'>
                <li className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-White before:-bottom-2 before:transition-width before:duration-300 hover:before:w-full">
                  <a href="/">Home</a>
                </li>
                <li className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-White before:-bottom-2 before:transition-width before:duration-300 hover:before:w-full">
                  <a href="/">Shop</a>
                </li>
                <li className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-White before:-bottom-2 before:transition-width before:duration-300 hover:before:w-full">
                  <a href="/">About</a>
                </li>
                <li className="relative before:content-[''] before:absolute before:w-0 before:h-1 before:bg-White before:-bottom-2 before:transition-width before:duration-300 hover:before:w-full">
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>

            <picture>
              <source media="(min-width:820px)" srcSet={arrDesk[currentIndex]} />
              <img src={arrMob[currentIndex]} alt="Image hero" className='h-full w-full object-cover' />
            </picture>

            <div className='bg-Black absolute bottom-0 right-0 lg:-right-[5.625rem] w-32 lg:w-[5.625rem] flex items-center justify-between'>
              <button className='p-4 hover:bg-VeryDarkGray' onClick={goPrev} title='buttton prev'><img src={prev} alt="prev" /></button>
              <button className='p-4 hover:bg-VeryDarkGray' onClick={goNext} title='buttton next'><img src={next} alt="next" /></button>
            </div>
          </div>


          <div className='w-full p-11 lg:w-2/5 lg:px-14'>
            {DATA.filter(item => item.id === currentIndex).map(d => {
              return (
                <div key={d.id}>
                  <h1 className='text-Black font-bold text-4xl lg:text-5xl'>{d.title}</h1>
                  <p className='my-5 font-semibold text-sm text-DarkGray'>{d.desc}</p>
                </div>
              )
            })}
            <button className='flex items-center gap-6 tracking-[0.8rem] uppercase font-semibold hover:text-VeryDarkGray'>Shop now <img src={arrow} alt="arrow icon" /></button>
          </div>
        </section>


        <section className='w-full grid grid-cols-1 lg:grid-cols-3'>
          <div>
            <img src={darkAbout} alt="dark About" className='w-full h-full object-cover' />
          </div>

          <div>
            <div className='m-11'>
              <h1 className='font-bold text-4xl mb-3'>About our furniture</h1>
              <p className='font-semibold text-DarkGray'>Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
          </div>

          <div>
            <img src={lightAbout} alt="light About" className='w-full h-full object-cover' />
          </div>
        </section>

      </main >
      <Author />
    </>

  )
}