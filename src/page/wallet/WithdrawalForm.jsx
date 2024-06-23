/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

const WithdrawalForm = () => {
  const [amount, setAmount] = useState("");
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = () => {
    console.log(amount);
  };
  return (
    <div className='pt-10 space-y-5'>
      <div className='flex justify-between items-center rounded-md'>
        <p>Available balance</p>
        <p>$509009</p>
      </div>
      <div className='flex flex-col items-center'>
        <h1>Enter Withdrawal amount</h1>
        <div className='flex items-center justify-center'>
          <Input
          onChange={handleChange}
          value={amount}
          className="withdrawalInput py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center"
          placeholder = "$9999"
          type="number" 
           />
        </div>
      </div>
      <div>
        <p className='pb-2'>
          Transfer to
        </p>
        <div className='flex items-center gap-5 border px-5 py-2 rounded-md'>
          <img className="h-8 w-8" src='https://static.vecteezy.com/system/resources/thumbnails/013/948/616/small_2x/bank-icon-logo-design-vector.jpg' alt=''/>
          <div>
          <p className='font-bold text-lg'>Yes Bank</p>
          <p className='text-xs'>********1234</p>
          </div>
        </div>
      </div>
      <DialogClose className='w-full'>
        <Button className="w-full py-7 text-xl" onClick={handleSubmit}>
          Withdraw
        </Button>
      </DialogClose>
    </div>
  )
}

export default WithdrawalForm