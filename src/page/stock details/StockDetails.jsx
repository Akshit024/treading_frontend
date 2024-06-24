/* eslint-disable no-unused-vars */
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookmarkFilledIcon, BookmarkIcon } from "@radix-ui/react-icons";
import { DotIcon } from "lucide-react";
import React from "react";
import TreadingForm from "./TreadingForm";
import StockChart from "../home/StockChart";

const StockDetails = () => {
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div>
            <Avatar>
              <AvatarImage src={"https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-6278326_1280.png"} alt="gelt"/>
            </Avatar>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p>BTC</p>
              <DotIcon className="text-gray-400" />
              <p className="text-gray-400">Bitcoin</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-xl font-bold">$4567</p>
              <p className="text-red-600">
                <span>-134567.567</span>
                <span>(-0.234567%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button>
            {true ? (
              <BookmarkFilledIcon className="h-6 w-6" />
            ) : (
              <BookmarkIcon className="h-6 w-6" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg">
                Tread
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How Much Do you want to spend ?</DialogTitle>
              </DialogHeader>
              <TreadingForm/>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-14">
      <StockChart/>
      </div>
    </div>
  );
};

export default StockDetails;
