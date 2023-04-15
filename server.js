import express from 'express';
import cors from 'cors'
import { getMails,getTodaysMails,createMail} from './database.js';

const app= express();
app.use(cors())
app.use(express.json());

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
  
  res.status(500).send('Something broke!')
})

const port = process.env.PORT || 8080;
app.listen(port,()=>{
 
})