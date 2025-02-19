import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const Navbar = () => {

    // this is to check that if the user is logged in or not
    // here null means it is logged out
    // const [user, setUser] = useState(null); [yeh basically aise na use karke hum context file jo banai hai usmai se leke aaege]
    const {user, setUser,setShowLogin} = useContext(AppContext);

    const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between py-4'>
        <Link to='/'>
        <img src={assets.logo} alt=""
        className='w-40 sm:w-32 lg:w-35'
        />
        </Link>
        
        
        <div>

            {/* basically we need to show different navbar
            on different pages and it depends on the login status so 
            we used a ternary opertor from the user */}


            {
            user ? 
            <div className='flex items-center gap-2 sm:gap-3'>
                <button className=' flex items-center gap-2 bg-blue-100
                px-4 sm:px-6 py-1.5 sm:py-3 rounded-full
                hover:scale-105 transition-all duration-700
                ' onClick={()=>navigate('/buy')}>
                    <img src ={assets.credit_star} className='w-5' alt=''/>
                    <p className='text-xs sm:text-sm font-small
                    text-gray-600'>Credits left : 50</p>
                </button>
                <p className='text-gray-600 max-sm:hidden pl-4'>Hi, pri</p>
                <div className='relative group'>
                    <img src={assets.profile_icon} className='w-10 drop-shadow' 
                    alt='' />
                    <div className='absolute hidden group-hover:block
                    top-0 right-0 z-10 text-black rounded pt-12'>
                        <ul className='list-none m-0 p-2 bg-white
                        rounded-md border text-sm'>
                            <li className='py-1 px-2 cursor-pointer
                            pr-10'>Logout</li>
                        </ul>
                    </div>
                </div>
            </div> 
            :
            <div className='flex items-center gap-2 sm:gap-5 text-xs'>
                <p className='cursor-pointer' onClick={()=>navigate('/buy')}>Pricing</p>
                <button onClick={()=>setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2
                sm:px-10 text-sm rounded-full text-xs'>Login</button>
            </div>
            }        
        </div>

    </div>
  )
}

export default Navbar