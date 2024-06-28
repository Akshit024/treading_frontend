/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getUserAsset } from "@/state/Asset/Action";

const Portfolio = () => {
  const dispatch = useDispatch();
  const {asset} = useSelector((store) => store);
  useEffect(()=>{
    dispatch(getUserAsset({jwt:localStorage.getItem("jwt")}));
  },[]);
  
  return (
    <div className="p-5 lg:px-20">
      <h1 className="pb-5 font-bold text-3xl">Portfolio</h1>
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
          {asset.userAssets.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center gap-2 font-medium">
                <Avatar className="-z-50">
                  <AvatarImage src={item.coin.image} />
                </Avatar>
                <span>{item.coin.name}</span>
              </TableCell>
              <TableCell>{item.coin.symbol.toUpperCase()}</TableCell>
              <TableCell>{item.quantity}</TableCell>
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

export default Portfolio;
