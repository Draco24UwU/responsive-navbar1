"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SIDENAV_ITEMS, SideNavItem } from "@/styles/constants";
import { FaAngleDown } from "react-icons/fa";

function SideNav() {
  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
        <div className="flex flex-col space-y-6 w-full ">

            <Link 
                href={"/"} 
                className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-[48px]"
            >

                <span className="h-7 w-7 bg-zinc-300 rounded-lg"/>
                <span className="font-bold text-xl hidden md:flex">Logo</span>
            </Link>

            <div className="flex flex-col space-y-2 md:px-6">
                {SIDENAV_ITEMS.map((item,index)=> {
                    return <MenuItem key={index} item={item}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default SideNav;

const MenuItem = ({item}:{item: SideNavItem}) => {
    const pathname = usePathname();
    const [subMenuOpen, setsubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setsubMenuOpen(!subMenuOpen);
    }

    return (
        <div>
            {item.subMenu ? 
            (
                <>
                    <button onClick={toggleSubMenu} className={`flex flex-row items-center p-2 rounded-lg hover:bg-zinc-100 w-full justify-between
                        ${pathname.includes(item.path) ? "bg-zinc-100" : "" }`}
                    >
                        <div className="flex flex-row space-x-4 items-center">
                            {item.icon}
                            <span className="font-semibold text-xl flex">{item.title}</span>
                        </div>

                        <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
                            <FaAngleDown width={24} height={24}/>
                        </div>

                    </button>

                    {subMenuOpen && (
                        <div className="my-2 ml-12 flex flex-col space-y-4">
                            {item.subMenuItems?.map((subItem, index)=> {
                                return (
                                    <Link 
                                        href={subItem.path} 
                                        key={index}
                                        className={`${subItem.path === pathname ? "font-bold" : ""}`}
                                    >
                                        <span>{subItem.title}</span>

                                    </Link>  
                                )
                            })}
                        </div>
                    )}
                </>
            ) 
            : 
            (
                <>
                    <Link 
                        href={item.path}
                        className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${item.path === pathname ? "bg-zinc-100" : ""}`}
                    >
                        {item.icon}
                        <span className="font-semibold text-xl flex">
                            {item.title}
                        </span>

                    </Link>
                </>
            )}
        </div>
    )

}