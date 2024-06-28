/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersForUser } from "@/state/Order/Action";
import { calculateProfitLoss } from "@/utils/calculateProfitLoss";
import { formatDateTime } from "@/utils/formatDateTime";
const Activity = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getAllOrdersForUser({ jwt: localStorage.getItem("jwt") }));
  }, []);
  return (
    <div className="p-5 lg:px-20">
      <h1 className="pb-5 font-bold text-3xl">Treading History</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date & Time</TableHead>
            <TableHead>Treading Pair</TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead>Selling Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead>Profit/Loss</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {order.orders.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{formatDateTime(item.timeStamp)}</TableCell>
              <TableCell className="flex items-center gap-2 font-medium">
                <Avatar className="-z-50">
                  <AvatarImage src={item.orderItem?.coin.image}/>
                </Avatar>
                <span>{item.orderItem?.coin.name}</span>
              </TableCell>
              <TableCell>{item.orderItem?.buyPrice}</TableCell>
              <TableCell>{item.orderItem?.sellPrice}</TableCell>
              <TableCell>{item.orderType}</TableCell>
              <TableCell>{calculateProfitLoss(item)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;
