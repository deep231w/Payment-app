

export const TextInput=({placeholder,label,onChange}:{
    placeholder:string;
    label:string;
    onChange:(value:number) =>void;
})=>{
    return (
        <div className="p-2">
            <label className="bloclk mb-2 text-sm font-medium text-gray-900" >{label}</label>
            <input onChange={(e)=>{
               const value = parseFloat(e.target.value); // Parse the value as a float
               onChange(isNaN(value) ? 0 : value); // Send the value to the parent component
            
            }} placeholder={placeholder}
            type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
        </div>
    )
}