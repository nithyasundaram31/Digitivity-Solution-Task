import Table from "./components/Table"


function App() {
 
  const columns=["id","name","age","city"];

  const datas=[{id:1,name:"Nithya",age:21,city:"Chennai"},
              {id:2,name:"Swetha",age:20,city:"Coimbatore"},
              {id:3,name:"Karthi",age:30,city:"Mumbai"},
              {id:4,name:"Ram",age:22,city:"Banglore"},
              {id:5,name:"Veni",age:34,city:"Pune"},
              {id:6,name:"Aishu",age:22,city:"chennai"},
              {id:7,name:"Hema",age:26,city:"Madurai"},
              {id:8,name:"Krish",age:36,city:"chennai"},
              {id:9,name:"Kumar",age:23,city:"Trichy"},
              {id:10,name:"Nila",age:27,city:"Banglore"} ]

  return (
    <>
    <Table columns={columns} datas={datas}/>  
   
    </>
  )
}

export default App
