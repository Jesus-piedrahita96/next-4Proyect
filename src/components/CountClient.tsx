'use client'
import { useAppDispatch, useAppSelector } from '@/context'
import { addOne, initCounterState, substractOne } from '@/context/reducer/counterSlice'
import { useEffect } from 'react'

interface Props { value?: number }

export interface CounterResponse {
  counter: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const counter = await (await fetch('/api/counter')).json()
  return counter
}


export const CountClient = ({ value }: Props) => {
  const count = useAppSelector(state => state.counterSlice.count)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   if (value > 0) {
  //     dispatch(initCounterState(value))
  //   }
  // }, [dispatch, value])

  useEffect(() => {
    getApiCounter()
      .then(respose => dispatch(initCounterState(respose.counter)))

  }, [dispatch])
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
