/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const { auth } = useSelector((store) => store);
  const [ activeSearchButton, setActiveSearchButton ] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const amount = e.target.value;
  };

  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-11 h-11"
            >
              <DragHandleHorizontalIcon className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-72 border-r-0 flex flex-col justify-center"
            side="left"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center pt-3">
                  <Avatar>
                    <AvatarImage src="src\assets\logo.png" />
                  </Avatar>
                  <div>
                    <span className="font-bold text-blue-400 pl-2 pr-1">
                      Akshit
                    </span>
                    <span className="pr-6">Tread</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>
        <p
          className="text-sm lg:text-base cursor-pointer"
          onClick={() => navigate("/")}
        >
          Akshit Treading
        </p>
        <div className="p-0 ml-9">
          {activeSearchButton ? (
            <Button
              variant="outline"
              className="flex items-center gap-3"
              onClick={() => {
                setActiveSearchButton(false);
              }}
            >
              <MagnifyingGlassIcon />
              <span>Search</span>
            </Button>
          ) : (
            <Input
              className="py-5 focus:outline-none"
              placeholder="Search Coin"
              onChange={handleChange}
              name="coinName"
            />
          )}
        </div>
      </div>
      <div
        className="bg-slate-700 h-10 w-10 rounded-full flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/profile")}
      >
        <Avatar>
          <AvatarFallback>
            {auth.user?.fullName[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
