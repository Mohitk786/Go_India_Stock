import "./sidenav.css"
import { Bell, ChevronLeft, ChevronRight, User2, MessageSquareMore,BadgeDollarSign } from 'lucide-react';
import Link from 'next/link';
import { useState } from "react";

const navigation = [
  { id:1, name: 'Discussion Forum', href: '/'},
  { id:2, name: 'Market Stories', href: '/'},
  { id:3, name: 'Sentimate', href: '/'},
  { id:4, name: 'Market', href: '/'},
  { id:5, name: 'Sector', href: '/'},
  { id:6, name: 'Watchlist', href: '/'},
  { id:7, name: 'Events', href: '/'},
  { id:8, name: 'News/Interview', href: '/'},
];

const SideNav = () => {
    const [activeNavItem, setActiveNavItem] = useState(1); 
    const [isOpen, setIsOpen] = useState<boolean>(false);

   return (
      <div className="sideNavContainer">
        <aside className={`sideNav ${isOpen ? 'open' : ''} bg-slate-900 text-slate-100 w-[20%] flex flex-col gap-3 min-h-screen p-4`}>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <User2/>
                    <span>Hello, User</span>
                </div>
                <Bell />
            </div>

            <div className='h-[2px] bg-slate-200 opacity-50 '/>

            <div className="flex flex-col">
                <nav>
                    <ul>
                        {navigation.map((item) => (
                        <li 
                            key={item.id} 
                            className={`mb-2 ${activeNavItem===item.id ? 'bg-gray-800':''}`}
                            onClick={()=>setActiveNavItem(item.id)}
                        >
                            <Link href={item.href} className="flex gap-3 items-center px-4 py-2  hover:text-gray-300" >
                                {item.id==1 && <MessageSquareMore/>}
                                {item.id==2 && <BadgeDollarSign/>}
                                <span className={`${(item.id!==1 && item.id!==2 )? 'ml-9 ':''}font-semibold opacity-90 text-lg`}>{item.name}</span>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
        <div className={`buttonContainer  ${isOpen ? 'open' : ''}`}>
            <button onClick={() => setIsOpen(prev => !prev)} className="flex rounded-sm items-center h-24 justify-center bg-slate-900">
               { !isOpen ? <ChevronRight className="text-white font-semibold"/> :  <ChevronLeft className="text-white font-semibold"/>  }         
            </button>
        </div>
      </div>
    )
};

export default SideNav;
