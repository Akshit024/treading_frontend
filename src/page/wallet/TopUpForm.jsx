/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const TopUpForm = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("RAZORPAY");
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };
  const handleSubmit = () => {
  };
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          className="py-7 text-lg"
          placeholder="money"
          onChange={handleChange}
          value={amount}
        />
      </div>
      <div>
        <h1 className="pb-1">Select Payment Method</h1>
        <RadioGroup
          className="flex"
          defaultValue="RAZORPAY"
          onValueChange={(value) => handlePaymentMethodChange(value)}
        >
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9"
              value="RAZORPAY"
              id="r1"
            />
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-2 w-32">
                <img
                  src="https://sellonboard.com/wp-content/uploads/2021/09/razorpay.png"
                  alt="RAZORPAY"
                  className="text-gray-600"
                />
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9"
              value="STRIPE"
              id="r2"
            />
            <Label htmlFor="r2">
              <div className="bg-white rounded-md px-5 py-2 w-32">
                <img
                  src="https://banner2.cleanpng.com/20180419/ogw/kisspng-stripe-payment-gateway-payment-processor-payment-s-technical-stripe-5ad905de5929b1.1738818115241722543652.jpg"
                  alt="STRIPE"
                  className="h-8 w-full overflow-x-hidden text-gray-600"
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7">
          Submit
        </Button>
      </DialogClose>
    </div>
  );
};

export default TopUpForm;
