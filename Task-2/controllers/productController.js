const db=require("../config/db")


exports.getProducts=(req,res)=>{
const mysql="SELECT * FROM products WHERE deleted_at is NULL "
db.query(mysql,(err,result)=>{
if(err){
    return res.status(500).json({messag:err.message})
}
return res.status(200).json(result)
})
},

exports.createProduct=(req,res)=>{
    const {name,price,description}=req.body
    const mysql="INSERT INTO products(name,price,description) VALUES (?,?,?)"

    db.query(mysql,[name,price,description],(err,result)=>{
   if(err){
    return res.status(500).json({message:err.message})
   }
   const newData={
id:result.insertId,
name,
price,
description
   }
   return res.status(201).json({message:"Product created successfully",newData})
    })
},

exports.updateProduct=(req,res)=>{
const {id}=req.params;
const{name,price,description}=req.body

const mysql="UPDATE products SET name=?,price=?,description=? WHERE id=? AND deleted_at is NULL"

db.query(mysql,[name,price,description,id],(err,result)=>{
    if(err){
          return res.status(500).json({message:err.message})
    }

    if(result.affectedRows===0){
          return res.status(404).json({message:"Product not found"})
    }
return res.status(200).json({message:"product updated successfully"})
}
)
},

exports.deleteProduct=(req,res)=>{
const {id}=req.params
const mysql="UPDATE products SET deleted_at = NOW() WHERE id=? AND deleted_at is NULL"
db.query(mysql,[id],(err,result)=>{
if(err){
     return res.status(500).json({message:err.message})
}

if(result.affectedRows===0){
    return res.status(404).json({message:"product not found"})
}
    return res.status(200).json({message:"product deleted successfully"})

})
}
