/* eslint-disable no-unused-vars */
import React from "react";
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
import { BookMarkedIcon, WatchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

const WatchList = () => {

  const handleRemoveToWatchlist=(value)=>{
  }
  return (
    <div className="p-5 lg:px-20">
      <div className="flex">
      <BookmarkFilledIcon className="w-9 h-9"/>
      <h1 className="pb-5 font-bold text-3xl">
         WatchList
      </h1>
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right text-red-700">Remove</TableHead>
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
              <TableCell className="text-right">
                <Button variant = "ghost" onClick={()=>handleRemoveToWatchlist(index)} size="icon" className="h-10 w-10">
                  <BookmarkFilledIcon className="w-6 h-6"/>
                </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WatchList;
