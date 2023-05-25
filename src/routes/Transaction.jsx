import React from 'react'

import ItemCard from '../components/Entry/ItemCard'

const Transaction = () => {
  return (
    <div className='flex flex-row justify-center items-center pt-16'>
        <ItemCard subPath={"add"} title={"Create Entry"} description={"Create your entries here"} />

        <span className='w-24' />

        <ItemCard subPath={"diary"} title={"View Entry Diary"} description={"View your created entries here"} />
    </div>
  )
}

export default Transaction