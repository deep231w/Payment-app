"use client"
import { Card } from "@repo/ui/card"
import { TextInput } from "@repo/ui/TextInput"
import { Button } from "@repo/ui/button"
import {Center} from "@repo/ui/Center"
import { useState } from "react"
export function SendMoneyCard(){
    const [number , setNumber] = useState(0)
    const [amount, setAmount]= useState(0);
    return ( 
            <Center>
                <div className="">
            <Card title="Send Money">
                <div>
                    <TextInput onChange={(value)=>{
                    setNumber(Number(value))
                     }} placeholder="Mobile Number" label="Mobile Number"/>
                </div>
                <div>
                    <TextInput placeholder="Amount" label="Amount" 
                    onChange={(val)=>{
                                setAmount(val)
                    }}/>
                </div>
                <Button onClick={()=>{

                }}> Send</Button>
        </Card>
        </div>
            </Center>
            
            
        
        
    )
}