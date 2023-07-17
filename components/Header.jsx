import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper' ;
import Link from 'next/link';
import Menu from './Menu';
import {BsCart3} from "react-icons/bs" ;
import {HiOutlineUserCircle} from "react-icons/hi" ;
import {SlMenu} from "react-icons/sl" ;
import MenuMobile from './MenuMobile';
import {IoMdClose} from "react-icons/io";
import { fetchDataFromApi } from '../utils/api';
import { useSelector } from 'react-redux';
import { useUser } from '@auth0/nextjs-auth0/client';


const Header = () => {
    const { user, error, isLoading } = useUser();
    const [mobileMenu , setMobileMenu] = useState(false);
    const [showCatMenu , setShowCatMenu] = useState(false);
    const [show , setShow] = useState("translate-y-0");
    const [lastScrollY , setLastScrollY] = useState(0);
    const [categories , setCategories ] = useState(null);

    const {cartItems} = useSelector((state => state.cart));

    const controlNavbar = () => {
      if( window.scrollY > 500 && !mobileMenu){
          if( window.scrollY > lastScrollY ){
            setShow("-translate-y-[80px]");
          }else{
            setShow("shadow-sn");
          }
      }else{
        setShow("translate-y-0");
      }
      setLastScrollY(window.scrollY) ;
    }

    useEffect(() => {
      window.addEventListener("scroll" , controlNavbar);
      return () => {
        window.removeEventListener("scroll" , controlNavbar );
      }
    } , [lastScrollY]);

    
  useEffect(() => {
    fetchCategories();
  }, [])
  
  const fetchCategories = async() =>{
    const {data} = await fetchDataFromApi('/api/categories?populate=*')
    setCategories(data);
  }

  return (
    <header className={`w-full h-[50px] md:h-[80px]   bg-gray-200 flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
    <Wrapper className="h-[60px] items-center justify-between flex ">
      <Link href="/">
      <img src="/logo.svg" className=" w-[40px] md:w-[60px] "/>
      </Link>
      <Menu showCatMenu = {showCatMenu} setShowCatMenu= {setShowCatMenu} categories={categories} />
      {
        mobileMenu && (<MenuMobile 
        showCatMenu = {showCatMenu} 
        setShowCatMenu = {setShowCatMenu}
        setMobileMenu = {setMobileMenu} 
        categories={categories} />)
      }
      <div className="flex justify-center items-center gap-3 text-black">
    
        {/* icon start*/}
       { user ? ( <Link  href="/api/auth/logout">
            <div className="w-8 md:w-12 h-9 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.1]   cursor-pointer relative">
            {/* <FaUserCircle className="text-[15px] md:text-[24px]" /> */}
           <img src={user?.picture} className="text-[15px] h-6 md:h-9 md:text-[20px] rounded-full" alt="" />
            </div>

        </Link>) 
        : 
        ( <Link  href="/api/auth/login">
            <div className="w-8 md:w-12 h-9 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.1]  cursor-pointer relative">
            <HiOutlineUserCircle className="text-[15px] md:text-[24px]" />
        </div>
        </Link>)}
        
        {/* icon end */}

        {/* icon start*/}
        <Link href="/cart">
        <div className="w-8 md:w-12 h-9 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.1]  cursor-pointer relative">
            <BsCart3 className="text-[15px] md:text-[23px]" />

            { cartItems.length > 0 && <div className="h-[14px] md:h-[19px] min-w-[14px] md:min-w-[19px] rounded-full bg-red-500 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex items-center justify-center px-[2.5px] md:px-[5px] ">{cartItems.length}</div> }
            
        </div>
        </Link>
        
        {/* icon end */}

        <div className="w-8 md:w-12 h-9 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.1]  cursor-pointer relative">
          {   mobileMenu ? ( 
                <IoMdClose className="text-[16px] " onClick={(e) => setMobileMenu(false)} />) :
                ( <SlMenu className="text-[16px] " onClick={(e) => setMobileMenu(true)} /> )
          }

        </div>
      </div>
    </Wrapper>
   </header>
  );
};

export default Header