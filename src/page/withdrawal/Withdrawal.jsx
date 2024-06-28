/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDispatch, useSelector } from 'react-redux';
import { getWithdrawalHistory } from '@/state/Withdrawal/Action';
import { formatDateTime } from '@/utils/formatDateTime';

const Withdrawal = () => {
  const { withdrawal } = useSelector((store) => store);
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getWithdrawalHistory({jwt:localStorage.getItem("jwt")}));
  },[]);
  console.log(withdrawal.history);
  return (
    <div className="p-5 lg:px-20">
    <h1 className="pb-5 font-bold text-3xl">
       Withdrawal History
    </h1>
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="py-5">Date & Time</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {withdrawal.history.map((items, index) => (
          <TableRow key={index}>
           <TableCell>{formatDateTime(items.date)}</TableCell>
            <TableCell>Bank</TableCell>
            <TableCell>$ {Math.floor(items.amount)}</TableCell>
            <TableCell className="text-right">{items.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default Withdrawal
