
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import Button from './Button'
import { useState } from 'react'
import close from '../svg/close.svg'
import { Link } from 'react-router-dom'
import Register from './Register'



const Navbar = () => {
  const [open, setOpen] = useState(false)

  const [auth, setAuth] = useState(false)

  const ToggleNav = () => {
    setOpen(!open)
  }

  return (
    <div className='mt-4'>
     <div className='flex justify-between items-center '>
       <div className='flex justify-between items-center w-full '>
        
          {/* Social Links */}
          <div className='hidden md:flex justify-between items-center gap-5'>
            <FaFacebook className='text-xl hover:text-red-500 cursor-pointer'  />
            <FaInstagram className='text-xl hover:text-red-500 cursor-pointer' />
            <FaLinkedinIn className='text-xl hover:text-red-500 cursor-pointer'/>
            <FaTwitter className='text-xl hover:text-red-500 cursor-pointer' />
           </div>
       
       
           <div className=''>
            <Link to='/'>
            <h1 className='text-2xl font-semibold'>Gladys <span className='text-red-600'>Blog</span></h1>
            </Link>
          </div>

           {/* Desktops Links */}
           <div className='hidden md:flex justify-between items-center gap-6'>
           <Link className='hover:text-red-500 hover:border-b-[2px] hover:border-red-500 hover:underline-offset-4' to='/'>Home</Link>
           { auth ? (<Link to='/create'><Button /></Link>) : (<Link to='/Login'><Register /></Link>)}
           </div>

     </div>

        {/* Mobile Toggle */}
        <div className='block md:hidden'>
           <button onClick={ToggleNav}>
            {
              open ? (<img src={close} alt='close'/>)
              :
                 (<FaBars />)
            }
           </button>
        </div>
    </div>
    {/* Mobile Links */}
        <div className={`bg-white text-center md:hidden absolute h-full w-full flex flex-col z-50 py-24 pl-10 gap-10 duration-500 ${open? 'left-0' : 'left-[-100%]'}  `}>

            <div className='flex flex-col gap-10 items-center'>
            <a className='hover:text-red-500 hover:border-b-[2px] hover:border-red-500 hover:underline-offset-4' href='/'>Home</a>
            <a href='/'>
              <Button />
             </a>
            </div>
       
           
            <div className='mx-auto'>
                <h1 className='mb-8'>Follow us on our socials</h1>
            <div className='flex gap-3 items-center ml-8'>
            <FaFacebook  className='text-xl hover:text-red-500 cursor-pointer'  />
            <FaInstagram  className='text-xl hover:text-red-500 cursor-pointer' />
            <FaLinkedinIn  className='text-xl hover:text-red-500 cursor-pointer' />
            <FaTwitter  className='text-xl hover:text-red-500 cursor-pointer' />
           </div>
            </div>
          
        </div>
    </div>
   
  )
}

export default Navbar