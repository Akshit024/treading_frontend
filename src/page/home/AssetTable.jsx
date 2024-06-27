/* eslint-disable no-unused-vars */
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const AssetTable = ({coin,category}) => {
  const navigate = useNavigate();
  return (
    <div>
      <ScrollArea className="h-[74vh]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>Change in 24h</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coin.map((items, index) => (
            <TableRow key={index} className="cursor-pointer"  onClick={()=>navigate(`/market/${items.id}`)}>
              <TableCell className="flex items-center gap-2 font-medium">
                <Avatar className="-z-50">
                  <AvatarImage src={items.image} />
                </Avatar>
                <span>{items.name}</span>
              </TableCell>
              <TableCell>{items.symbol.toUpperCase()}</TableCell>
              <TableCell>{items.total_volume}</TableCell>
              <TableCell>{items.market_cap}</TableCell>
              <TableCell>{items.price_change_percentage_24h} %</TableCell>
              <TableCell className="text-right">$ {items.current_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </ScrollArea>

    </div>
  );
};

export default AssetTable;
