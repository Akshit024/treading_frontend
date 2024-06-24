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
import { useNavigate } from "react-router-dom";

const AssetTable = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1].map((items, index) => (
            <TableRow key={index} onClick={()=>navigate(`/market/bitcoin`)}>
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
  );
};

export default AssetTable;
