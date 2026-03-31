import { useState } from "react"

function Table({columns,datas}){
const [search,setSearch]=useState('');
const[field,setField]=useState(null); //which field choose like name or age 
const[sort,setSort]=useState("asc");

const filterSearch=datas.filter((a)=>
    Object.values(a).some((val)=>(val.toString().toLowerCase().includes(search.toLowerCase()))))

const handleSort=(key)=>{
if(field!==key){
 setField(key);
 setSort("asc")   
}else{
setSort(sort==='asc'?"desc":"asc")
}
}

const sortedData=[...filterSearch].sort((a,b)=>{
  if(!field){
    return 0
  }

  const A=a[field];
  const B=b[field];
  if(typeof A==="number"){
    return sort==='asc'?A-B:B-A
  }

  if(sort==="asc"){
    return String(A).toLowerCase().localeCompare(String(B).toLowerCase())
  }else{
   return  String(B).toLowerCase().localeCompare(String(A).toLowerCase())
  }
}
  )



return (
    <>
    <div className=" p-4">
        <div className=" w-full mx-auto md:w-[70%] border shadow-md ">
             <div className="p-6 flex items-center bg-gray-100 ">
             <div className="text-green-600 text-xl md:text-3xl font-semibold"> Data Table</div> 
             <div className="flex flex-1  ml-32 md:ml-72  items-center gap-2">
            <label className="font-semibold text-gray-500 "> Search:</label> 
            <input  value={search} onChange={(e)=>setSearch(e.target.value)} className=" w-full border p-2 rounded outline-none" type="text" placeholder="Filter..."/>
             </div>
                </div> 
             <hr/>
           <div className="p-4">
             <table className="border-1 mx-auto md:w-[70%] w-full ">
                <thead>
            <tr className="border ">
              {columns.map((col)=>
               <th className='border-r text-l p-3 bg-gray-100' key={col}>
                <button className=""onClick={()=>handleSort(col)}>{col.charAt(0).toUpperCase()+col.slice(1).toLowerCase()}
                   {field===col?(sort==='asc'?"↑":"↓"):""}</button></th>
            )
              }
             </tr>
                </thead>
             <tbody className="shadow-md">
              {sortedData.length==0?
              (<tr>
                <td colspan={columns.length} className=" text-center p-6 text-gray-400">Data Not Found</td>
               </tr>
               )
                :
               (sortedData.map((data)=>(
                <tr key={data?.id} className="border p-3">
                  {columns.map((col)=>
                  (  <td  key={col} className="text-center border-r  p-3">
                   {data[col]}

                  </td>))}
                    
               
                </tr>)))}
            
             </tbody>
             </table>
           </div>
        </div>

       
    </div>
   
    
    </>
)
}

export default Table