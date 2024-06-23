/* eslint-disable no-unused-vars */
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Portfolio = () => {
  return (
    <div className='p-5 lg:px-20'>
      <h1 className='pb-5 font-bold text-3xl'>Portfolio</h1>
            <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Asset</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Change(%)</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1].map((items, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center gap-2 font-medium">
                <Avatar className="-z-50">
                  <AvatarImage src="src\assets\logo.png" />
                </Avatar>
                <span>BitCoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>12345678</TableCell>
              <TableCell>12345678</TableCell>
              <TableCell>12345678</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Portfolio
