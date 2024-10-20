

export const TextInput=({placeholder,label,onChange}:{
    placeholder:string;
    label:string;
    onChange:(value:string) =>void;
})=>{
    return (
        <div className="p-2">
            <label className="bloclk mb-2 text-sm font-medium text-gray-900" >{label}</label>
            <input onChange={(e)=>{e.target.value}} placeholder={placeholder}
            type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
        </div>
    )
}