import React from 'react';

import Amount from '../components/Entry/CreateEntry/Amount';
import CreateEntry from '../components/Entry/CreateEntry/CreateEntry';


const Transactions = () => {
  return (
    <div className='flex flex-col items-center justify-center py-8'>
        <p className='text-xl md:text-3xl font-semibold'>Create Transaction!</p>
        <Amount />
        <CreateEntry />
    </div>
  )
};

export default Transactions;