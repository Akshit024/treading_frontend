/* eslint-disable no-unused-vars */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CopyIcon,
  ReloadIcon,
  UpdateIcon,
  UploadIcon,
} from "@radix-ui/react-icons";
import { Check, DollarSign, ShuffleIcon, WalletIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import TopUpForm from "./TopUpForm";
import WithdrawalForm from "./WithdrawalForm";
import TransferForm from "./TransferForm";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  depositeMoney,
  getUserWallet,
  getWalletTransaction,
} from "@/state/Wallet/Action";
import { useLocation, useNavigate } from "react-router-dom";

function useQueary() {
  return new URLSearchParams(useLocation().search);
}
const Wallet = () => {
  const navigate = useNavigate();
  const { wallet } = useSelector((store) => store);
  const dispatch = useDispatch();
  const queary = useQueary();

  const order_id = queary.get("order_id");
  const razorPayPaymentId = queary.get("razorpay_payment_id");
  const payment_id = queary.get("payment_id");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(wallet.userWallet?.id);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  useEffect(() => {
    handleFetchUserWallet();
    handleFetchWalletTransaction();
  }, []);

  useEffect(() => {
    if (order_id) {
      dispatch(
        depositeMoney({
          jwt: localStorage.getItem("jwt"),
          orderId: order_id,
          paymentId: razorPayPaymentId,
          navigate,
        })
      );
    }
  }, [order_id, razorPayPaymentId, payment_id]);
  const handleFetchUserWallet = () => {
    dispatch(getUserWallet(localStorage.getItem("jwt")));
  };

  const handleFetchWalletTransaction = () => {
    dispatch(getWalletTransaction(localStorage.getItem("jwt")));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <WalletIcon size={30} />
                <div className="">
                  <CardTitle className="text-2xl">My Wallet</CardTitle>
                  <div className="flex items-center gap-2 pt-1">
                    <p className="text-gray-200 text-sm">
                      #{wallet.userWallet?.id}
                    </p>
                    {!isCopied ? (
                      <CopyIcon
                        onClick={handleCopy}
                        className="cursor-pointer hover:text-slate-400"
                      />
                    ) : (
                      <Check size={18} className="text-green-500" />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <ReloadIcon
                  onClick={handleFetchUserWallet}
                  className="w-6 h-6 cursor-pointer hover:text-gray-400"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign />
              <span className="text-2xl font-semibold">
                {wallet.userWallet?.balance}
              </span>
            </div>
            <div className="flex gap-7 mt-5">
              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                    <UploadIcon className="h-6 w-6" />
                    <span className="text-sm mt-2">Add Money</span>
                  </div>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Top Up Your Wallet</DialogTitle>
                  </DialogHeader>
                  <TopUpForm />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                    <UploadIcon className="h-6 w-6" />
                    <span className="text-sm mt-2">Withdrawal</span>
                  </div>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request Withdrawal</DialogTitle>
                  </DialogHeader>
                  <WithdrawalForm />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                    <ShuffleIcon size={20} />
                    <span className="text-sm mt-2">Transfer</span>
                  </div>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Transfer to another Wallet</DialogTitle>
                  </DialogHeader>
                  <TransferForm />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
        <div className="py-5 pt-10">
          <div className="flex gap-2 items-center pb-5">
            <h1 className="text-2xl font-semibold">History</h1>
            <UpdateIcon
              onClick={handleFetchWalletTransaction}
              className="h-7 w-7 p-0 cursor-pointer hover:text-gray-400"
            />
          </div>
          <div className="space-y-5">
            {wallet.transactions?.map((items, key) => (
              <div key={key}>
                <Card className="px-5 flex justify-between items-center p-2">
                  <div className="flex items-center gap-5">
                    <Avatar>
                      <AvatarFallback>
                        <ShuffleIcon />
                      </AvatarFallback>
                    </Avatar>

                    <div className="space-y-1">
                      <h1>{items.walletTransactionType}</h1>
                      <p className="text-sm text-gray-500">{items.date}</p>
                    </div>
                  </div>
                  <div>
                    <p className={`text-green-600`}>{items.amount} USD</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
