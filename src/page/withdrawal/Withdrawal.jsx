/* eslint-disable no-unused-vars */
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Withdrawal = () => {
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
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((items, index) => (
          <TableRow key={index}>
            <TableCell>BTC</TableCell>
            <TableCell>12345678</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell className="text-right">1234</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default Withdrawal
