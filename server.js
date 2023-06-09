import express from 'express';
import cors from 'cors'
import { getMails,getTodaysMails,createMail} from './database.js';
//console.log(await getMails())

const app= express();
app.use(cors())
app.use(express.json());
app.get("/",async (req,res)=>{
  
  res.send('welcome')

})

app.get("/mails",async (req,res)=>{
  const mails = await getMails();
  res.send(mails)

})

app.get("/today",async (req,res)=>{
  res.send(await getTodaysMails());
  
})
app.post("/mails",async (req,res)=>{
  const {full_name, email, message} = req.body;
  const mail=await createMail(full_name,email,message);
  res.status(201).send(mail)

})

app.use((err, req, res, next) => {
  
  res.status(500).send('Something broke!');
  console.error(err)
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
 
})