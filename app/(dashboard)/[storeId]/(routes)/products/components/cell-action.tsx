"use client";

import React, { useState } from "react";
import { ProductColumn } from "./columns";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Copy, Edit, MoreHorizontalIcon, Trash } from "lucide-react";
import { toast } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { AlertModel } from "@/components/modals/alert-modal";

interface  CellactionProps {

data:ProductColumn;


}



export const CellAction:React.FC<CellactionProps> =({

data

})=>{



const [open,setOpen]= useState(false);
const [loading,setLOading]= useState(false);

const router = useRouter();
const params = useParams();






const onCopy = (id:string)=>{
 navigator.clipboard.writeText(id)
 toast.success(" Product Id copied to the clipboard.")
        
        

 }


    
      
 const onDelete = async ()=>{

    try {
        setLOading(true)
     await axios.delete(`/api/${params.storeId}/products/${data.id}`)
    router.refresh()
    toast.success("Product deleted.")
    
    console.log(data.id)
    
    
    } catch (error) {
        toast.error("Something went wrong")
    }finally{
    
    setLOading(false);
    setOpen(false)
    
    
    }
    
    
    
    }
    
    
        




return (

<>
<AlertModel  
isOpen={open}
onClose={()=>setOpen(false)}
onConfirm={onDelete}
loading={loading}


/>




<DropdownMenu>
<DropdownMenuTrigger asChild>
<Button variant="ghost" className="h-8 w-8 p-0">

<span className="sr-only">Open menu</span>
<MoreHorizontalIcon className="h-4 w-4"/>
</Button>
</DropdownMenuTrigger>


<DropdownMenuContent align="end">

<DropdownMenuLabel>

    Actions
</DropdownMenuLabel>
<DropdownMenuItem 
onClick={()=>onCopy(data.id)}
>
 <Copy className="mr-2 h-4 w-4" />   
Copy 
</DropdownMenuItem>

<DropdownMenuItem onClick={()=> router.push(`/${params.storeId}/products/${data.id}`) } >
<Edit className="mr-2 h-4 w-4" />
Update

</DropdownMenuItem>

<DropdownMenuItem onClick={()=>setOpen(true)}>
<Trash className="mr-2 h-4 w-4" />
Delete

</DropdownMenuItem>

</DropdownMenuContent>



</DropdownMenu>
</>
)


}
