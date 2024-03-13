'use client'

import { useAppSelector } from "@/context"
import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa";

export const SimpleWidget = () => {
  const counter = useAppSelector(state => state.counterSlice.count)
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-600 text-center">Contador</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center gap-9 space-x-1 ">
            <div id="icon">
              <FaShoppingCart size={50} />
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{counter}</h4>
              <p className="text-xs text-gray-500">Carrito de compras</p>
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
          <Link href={'/dashboard/counter'} className="text-indigo-600 text-xs font-medium">Más</Link>
        </div>

      </div>
    </div>
  )
}