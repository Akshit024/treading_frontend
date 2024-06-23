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
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
const Activity = () => {
  return (
    <div className="p-5 lg:px-20">
    <h1 className="pb-5 font-bold text-3xl">
       Treading History 
    </h1>
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="py-5">Date & Time</TableHead>
          <TableHead>Treading Pair</TableHead>
          <TableHead>Buy Price</TableHead>
          <TableHead>Selling Price</TableHead>
          <TableHead>Order Type</TableHead>
          <TableHead>Profit/Loss</TableHead>
          <TableHead className="text-right">Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((items, index) => (
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
            <TableCell>$250.00</TableCell>
            <TableCell className="text-right">1234</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default Activity
