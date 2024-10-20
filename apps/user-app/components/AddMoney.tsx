"use client"
import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/button";
import {Select} from "@repo/ui/select";
import { TextInput } from "@repo/ui/TextInput";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";

const SUPPORTED_BANK=[{
    name:"HDFC",
    redirectUrl:"https://hdfc.com"
},{
    name:"AXIS",
    redirectUrl:"https://axixbank.com"
}]
export const AddMoney= ()=>{
    const [redirectUrl, setRedirectUrl]= useState(SUPPORTED_BANK[0]?.redirectUrl)
    return (
        <Card title="Add Money">
    <div className="w-full">
        <TextInput label={"Amount"} placeholder={"Amount"} onChange={() => {

        }} />
        <div className="py-4 text-left">
            Bank
        </div>
        <Select onSelect={(value) => {
            setRedirectUrl(SUPPORTED_BANK.find(x => x.name === value)?.redirectUrl || "")
        }} options={SUPPORTED_BANK.map(x => ({
            key: x.name,
            value: x.name
        }))} />
        <div className="flex justify-center pt-4">
            <Button onClick={() => {
                window.location.href = redirectUrl || "";
            }}>
            Add Money
            </Button>
        </div>
    </div>
</Card>
    )
}