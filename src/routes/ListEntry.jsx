import React from 'react';
import ItemCard from '../components/Entry/ItemCard'

const ListEntry = () => {
  let dummy = [];

  for (let i = 0; i < 5; i++) {
    dummy.push(<ItemCard subPath={i} title={`Entry #${i}`} description={"View your entries here"} />);
  }

  return (
    <div className='flex flex-col justify-center items-center pt-16'>
        {dummy.map((item, key) => (
          <div className='py-4'>
            {item}
          </div>
        ))}

    </div>
  )
}

export default ListEntry