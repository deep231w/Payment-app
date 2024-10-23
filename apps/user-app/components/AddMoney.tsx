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
        redirectUrl: "https://hdfc.com",
    },
    {   id:2,
        name: "AXIS",
        redirectUrl: "https://axisbank.com",
    },
];

export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANK[0]?.redirectUrl);
    const [value, setValue] = useState(0);
    const [provider, setProvider] = useState(SUPPORTED_BANK[0]?.name || "");

    return (
        <Card title="Add Money">
            <div className="w-full">
                <TextInput
                    label={"Amount"}
                    placeholder={"Amount"}
                    onChange={(val) => {
                        setValue(Number(val))
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
                            await CreateOnrampTnsx( provider ,value);
                            window.location.href = redirectUrl || "";
                        }}
                    >
                        Add Money
                    </Button>
                </div>
            </div>
        </Card>
    );
};
