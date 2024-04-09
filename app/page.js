import { BsInstagram } from 'react-icons/bs'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='h-full w-full bg-[#1D3428]'>
      <div className='flex p-8 pt-8 justify-center'>
        <Link href="#"><button className="m-2 py-2 px-4 duration-300 text-sm text-[#BECFC5] border border-[#BECFC5] rounded-full hover:text-[#1D3F28] hover:bg-[#D0B208] hover:border-transparent hover:scale-110">Home</button></Link>
        {/* <Link href="#"><button className="m-2 py-2 px-4 duration-300 text-sm text-[#BECFC5] border border-[#BECFC5] rounded-full hover:text-[#1D3F28] hover:bg-[#D0B208] hover:border-transparent hover:scale-110">Menu</button></Link> */}
        {/* <Link href="#"><button className="m-2 py-2 px-4 duration-300 text-sm text-[#BECFC5] border border-[#BECFC5] rounded-full hover:text-[#1D3F28] hover:bg-[#D0B208] hover:border-transparent hover:scale-110">Contact Us</button></Link> */}
      </div>
      <div className='p-4 pb-8 text-center'>
        <img className='mx-auto' src="https://img1.wsimg.com/isteam/ip/172f7869-27bb-48f8-8755-98f7297d50e3/Rukma%20gold.png/:/rs=w:316,h:400,cg:true,m/cr=w:316,h:400/qt=q:95" width={158} height={200} />
        <p className='pt-4 pb-8 text-[#BECFC5]'>Join us for a meal to remember!</p>
        <Link href="tel:+918527478300"><button className="m-2 py-2 px-4 duration-300 text-sm text-[#D0B208] border border-[#D0B208] rounded-full hover:text-[#1D3F28] hover:bg-[#D0B208] hover:scale-110">Book a Table</button></Link>
        <Link href="https://goo.gl/maps/SBpJbqofZdWaooyM6"><button className="m-2 py-2 px-4 duration-300 text-sm text-[#D0B208] border border-[#D0B208] rounded-full hover:text-[#1D3F28] hover:bg-[#D0B208] hover:scale-110">Navigate</button></Link>
      </div>
      <div className='text-[#d9d9d9] text-md text-center mx-auto duration-500 w-1/2 border-t border-gray-200'>
        <p className="p-8">Updates</p>
        <img className='pb-12 mx-auto' src='https://img1.wsimg.com/isteam/ip/172f7869-27bb-48f8-8755-98f7297d50e3/WhatsApp%20Image%202023-01-25%20at%206.39.19%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:1160' width={300} height={400} />
      </div>
      <div className="lg:w-4/6 flex flex-wrap p-4 mx-auto">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="rounded-lg w-full object-cover h-full object-center block" src="https://img1.wsimg.com/isteam/ip/172f7869-27bb-48f8-8755-98f7297d50e3/72A5518B-0C3F-48EA-9283-8DA45FB3B7BF.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:1079" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="rounded-lg w-full object-cover h-full object-center block" src="https://img1.wsimg.com/isteam/ip/172f7869-27bb-48f8-8755-98f7297d50e3/IMG_4375.jpg/:/rs=w:2560,h:1920" />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="rounded-lg w-full h-full object-cover object-center block" src="https://img1.wsimg.com/isteam/ip/172f7869-27bb-48f8-8755-98f7297d50e3/IMG_0673.jpg/:/rs=w:1280,h:1175" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="rounded-lg w-full h-full object-cover object-center block" src="https://img1.wsimg.com/isteam/ip/172f7869-27bb-48f8-8755-98f7297d50e3/IMG_0567.jpg/:/rs=w:1280,h:1227" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="rounded-lg w-full object-cover h-full object-center block" src="https://img1.wsimg.com/isteam/ip/172f7869-27bb-48f8-8755-98f7297d50e3/IMG_0568.jpg/:/rs=w:2560,h:2243" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="rounded-lg w-full object-cover h-full object-center block" src="https://img1.wsimg.com/isteam/ip/172f7869-27bb-48f8-8755-98f7297d50e3/IMG_0570.jpg/:/rs=w:1280,h:1227" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-12 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="https://img1.wsimg.com/isteam/ip/172f7869-27bb-48f8-8755-98f7297d50e3/IMG_6659-09b2f99.jpg/:/rs=w:2560,h:1920" />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-white text-lg">About Us</h2>
                <div className="w-12 h-1 bg-[#D0B208] rounded mt-2 mb-4"></div>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-[#d9d9d9] text-md mb-4"><b>Rukma</b> is synonymous with new beginnings and a ray of light. The name was chosen to represent the deep-rooted story behind the inception of this cafe. It all starts with a shared passion of food between two best friends, One being a seasoned chef and one a visionary. Since the past 20 years or more they have been curating the growth of many community clubs and establishments. Both having diverse interests,Professionally, They always wanted to find a common ground to establish something new together, and it was food that brought upon the idea of finally having new beginnings together and giving the community a taste of what they feel is an undiscovered gold mine. Welcome to Rukma, A cafe at Jaypee greens, Greater Noida. We hope to make you a part of our family and give you the most home-style experience in a commercial environment. Let’s find that balance together. Love and light.</p>
            </div>
          </div>
          <div className='p-16 text-center text-3xl text-[#d9d9d9]'>
            <button className='px-4 hover:text-[#D0B208] duration-200 hover:scale-125'><a href='https://www.instagram.com/caferukma/'><BsInstagram /></a></button>
          </div>
        </div>
        <div className='p-4 text-sm font-bold text-center'>
          <p className='p-4 text-[#d9d9d9]'>CAFE RUKMA</p>
          <p className='p-4 text-[#BECFC5]'>COPYRIGHT © 2023 CAFE RUKMA - ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  )
}