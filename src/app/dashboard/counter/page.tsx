import React from 'react'
import { CountClient } from '@/components/CountClient'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Count",
  description: "Generating count",
};

const CounterPage = () => {
  return (
    <div className='h-full  w-full grid place-items-center justify-center'>
      <span className='text-7xl'>Counter</span>
      <div className='self-start text-7xl grid justify-items-center gap-8'>
        <CountClient />
      </div>
    </div>
  )
}

export default CounterPage