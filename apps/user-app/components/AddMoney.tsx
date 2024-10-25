"use client";
import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/button";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/TextInput";
import { useState } from "react";
import { CreateOnrampTnsx } from "../app/lib/actions/createOnRampTnx";

const SUPPORTED_BANK = [
    {   id:1,
        name: "HDFC",
        redirectUrl: "http://localhost:3005/payment",
    },
    {   id:2,
        name: "AXIS",
        redirectUrl: "http://localhost:3005/payment",
    },
];

export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANK[0]?.redirectUrl);
    const [value, setValue] = useState(0);
    const [provider, setProvider] = useState(SUPPORTED_BANK[0]?.name || "");
    const [loading , setLoading] =useState(false)

    async function handleBankWebhook(){
        
    }
    return (
        <Card title="Add Money">
            <div className="w-full">
                <TextInput
                    label={"Amount"}
                    placeholder={"Amount"}
                    onChange={(val) => {
                        
                        setValue(val)
                        console.log("input amount" ,val)
                    }}
                />
                <div className="py-4 text-left">Bank</div>
                <Select
                    onSelect={(value) => {
                        const selectedBank = SUPPORTED_BANK.find((x) => x.name === value);
                        setProvider(selectedBank?.name || "");
                        setRedirectUrl(selectedBank?.redirectUrl || "");
                        
                    }}
                    options={SUPPORTED_BANK.map((x) => ({
                        key: x.id,
                        value: x.name,
                    }))}
                />
                <div className="flex justify-center pt-4">
                    <Button
                        onClick={async () => {
                            console.log("Current value (amount):", value);  // Check what value is here

                         if (value > 0) {
                            await CreateOnrampTnsx(provider, value);  // Only send valid amounts
                            window.location.href = redirectUrl || "";
                            console.log("Transaction initiated with amount:", value);
                             } else {
                                    console.log("Invalid amount:", value);
                             }
                        }}
                    >
                        Add Money
                    </Button>
                </div>
            </div>
        </Card>
    );
};
