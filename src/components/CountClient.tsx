'use client'
import { useAppDispatch, useAppSelector } from '@/context'
import { addOne, initCounterState, substractOne } from '@/context/reducer/counterSlice'
import { useEffect } from 'react'

interface Props { value: number }

export const CountClient = ({value} : Props) => {
  const count = useAppSelector(state => state.counterSlice.count)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initCounterState(value))
  }, [dispatch, value])
  return (
    <>
      {count}
      <div className='flex gap-16'>
        <button
          className='px-14 bg-blue-300 rounded text-5xl'
          onClick={() => dispatch(addOne())}
        >
          +
        </button>
        <button
          className='px-14 bg-blue-300 rounded text-5xl'
          onClick={() => dispatch(substractOne())}
        >
          -
        </button>
      </div>
    </>
  )
}
