'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiDiscount1 } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { MdOutlineCatchingPokemon } from "react-icons/md";


interface Item {
  titulo: string,
  descripcion: string,
  imagen: JSX.Element,
  path: string,
}

const data: Item[] = [
  {
    titulo: 'Dashboard',
    descripcion: 'Data Overview',
    imagen: <MdDashboard size={35} />,
    path: '/dashboard/main',
  },
  {
    titulo: 'Counter',
    descripcion: 'Simple Counter',
    imagen: <CiDiscount1 size={35} />,
    path: '/dashboard/counter',
  },
  {
    titulo: 'Pokemon',
    descripcion: 'Pokemon List',
    imagen: <MdOutlineCatchingPokemon size={35} />,
    path: '/dashboard/pokemons',
  }
]

export const SidebarMenuItem = () => {
  const pathname = usePathname()

  return (
    <div id="nav" className="w-full">
      {
        data.map((item, index) => (
          <Link key={index} href={item.path} className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${pathname === item.path && 'bg-blue-500'}`}>
            <div>
              {item.imagen}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-5 text-white">{item.titulo}</span>
              <span className="text-sm text-white/50 hidden md:block">{item.descripcion}</span>
            </div>
          </Link>
        ))
      }
    </div>
  )
}