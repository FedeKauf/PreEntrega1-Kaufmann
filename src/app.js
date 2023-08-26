
const express=require('express')
const cartsRouter=require('./routes/carts.router')
const productsRouter=require('./routes/products.router')
const PORT=8080
const app=express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/carts', cartsRouter)
app.use('/api/products', productsRouter)

app.get('/',(req, res)=>{
    res.send('<h1 style="color:red">Bienvenidos al server desarrollado con ExpressJS</h1>')
})

app.get('*',(req, res)=>{
    res.send('Error 404 - Page not found')
})

app.listen(PORT, ()=>{
    console.log(`Server corriendo en puerto ${PORT}`)
})

