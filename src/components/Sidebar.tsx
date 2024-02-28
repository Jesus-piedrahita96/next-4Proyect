import Image from 'next/image'

//* Files
//Components
import { SidebarMenuItem } from './SidebarMenuItem';


//React Icons
import { FaReact } from "react-icons/fa";



export const Sidebar = () => {
  return (
    <div id="menu" className="bg-gray-900 z-10 text-slate-300 w-64 fixed left-0 h-screen">
      <div id="logo" className="my-4 px-6">
        <h1 className="flex gap-4 text-lg md:text-2xl font-bold text-white"> <FaReact size={50} /> <span className="text-blue-500"> 18 </span></h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="avatar"
              width={64}
              height={64}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
              Jesus Piedrahita
          </span>
        </a>
        <SidebarMenuItem />
      </div>
    </div>
  )
}
