'use client'
import { useState } from 'react'

export const CountClient = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      {count}
      <div className='flex gap-16'>
        <button
          className='px-14 bg-blue-300 rounded text-5xl'
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className='px-14 bg-blue-300 rounded text-5xl'
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </>
  )
}
