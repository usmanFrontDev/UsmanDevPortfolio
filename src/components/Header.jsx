import React, { useContext } from 'react'
import logo from '../assets/Images/logo.webp'
import Button from '../CommonComponents/button'
import { PiDotsNineBold } from "react-icons/pi";
import { SimpleContext } from '../context/Context';


function Header() {

const {setNav} = useContext(SimpleContext);

  return (
    <div className='w-full fixed top-0 left-0 z-[20] py-6 px-4 flex flex-row justify-between items-center' >
      <div className='p-0 sm:p-2 mt-0 sm:ml-10'>
        <img className='object-cover w-[50px] sm:w-[70px] h-[50px] sm:h-[70px]' src={logo} alt="" />
      </div>
      <div className="buttons flex flex-row gap-4 justify-between items-center py-1 pr-4 sm:pr-0 px-0 sm:px-8">
        <Button buttontext={'Hire me'} variant={'primary'}></Button>
        <Button 
        onClicked={() =>setNav(false)}
        buttontext={<PiDotsNineBold className='hover:text-blue-400 bg-[#000] border-transparent border hover:border-[#dadada] hover:bg-[#ffffff] rounded-lg duration-300 text-[30px] sm:text-[40px] cursor-pointer text-[#ffffff]' />}
         variant={'secondary'}></Button>
        {/* <PiDotsNineBold className='text-[40px] cursor-pointer text-[#111111cb]' /> */}
      </div>
      
    </div>
  )
}

export default Header