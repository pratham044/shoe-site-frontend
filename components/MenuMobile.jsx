import Link from 'next/link';
import React from 'react'
import {BsChevronDown} from "react-icons/bs" ;

const data = [
    { id: 1, name: "Home" , url: "/" },
    { id: 2, name: "Categories", subMenu: true },
    { id: 3, name: "Contact", url: "/contact" },
    { id: 4, name: "About Us", url: "/about" },
    
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];

const MenuMobile = ({showCatMenu , setShowCatMenu , setMobileMenu ,categories }) => {
  return (
    <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
        {data.map((item) => {
            return (
                <React.Fragment key={item.id}>
                   { !!item?.subMenu ? (
                <li className="cursor-pointer flex flex-col  px-4 py-6 relative border-b " 
                    onClick={() => setShowCatMenu(!showCatMenu)}>
                        <div className="flex justify-between items-center ">
                        {item.name}
                        <BsChevronDown size={16} />
                        </div>
                        {  showCatMenu && (
                            <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4" >
                                    {categories.map(({attributes : c , id }) => { 
                                        return(
                                        <Link key={id} 
                                        href={`category/${c.slug}`}
                                        onClick={() => {setShowCatMenu(false)
                                            setMobileMenu(false) }}>
                                        <li className="py-4 px-8 border-t flex justify-between hover:bg-zinc-300">
                                        {c.name}
                                        <span className="opacity-40 text-xs">{`(${c.products.data.length})`}</span></li>
                                         
                                        </Link> )})}
                                </ul>)}
                    </li>) : (  <li className="py-4 px-5 border-b" >
                        <Link href={item?.url} 
                        onClick={() => setMobileMenu(false) }>{item.name}</Link>
                    </li>
                   )}
                </React.Fragment>
            )
        })}
    </ul>
  )
}

export default MenuMobile;