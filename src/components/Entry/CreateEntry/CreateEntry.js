import React, { useState } from 'react';
import Amount from './Amount';

const CreateEntry = () => {
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");

    const handleAmountUpdate = (newAmount) => {
        setAmount(newAmount);
    };

    return (
    <div>
        <div>Create Entry</div>


        <div className='flex flex-col justify-center items-center'>
            {/* Main amount input field */}
            <Amount onAmountUpdate={handleAmountUpdate} />


            {/* Form Body */}
            <label htmlFor="type">Type</label>
            <select name='type' id='type'>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>

            <label htmlFor='created_at_date'>Date</label>
            <input type='date' name='created_at_date'></input>

            <label htmlFor='category'>Category</label>
            <input type='text' name='category'></input>

            <label htmlFor='description'>Description</label>
            <input type='text' name='description'></input>
        </div>
    </div>
  )
};

export default CreateEntry;