import mysql from 'mysql2';
import dotenv from 'dotenv'

dotenv.config()

const pool=mysql.createPool(
//     host:process.env.MYSQL_HOST,
//   user:process.env.MYSQL_USER,
//   password:process.env.MYSQL_PASSWORD,
//   database:process.env.MYSQL_DATABASE
process.env.DATABASE_URL

   
).promise()
console.log(pool)
console.log(process.env.DATABASE_URL)
export async  function getMails(){
    const [rows] = await pool.query("SELECT*FROM contacts");
    return rows;
}


export async function getTodaysMails(){
    const data=await getMails();
    return data.filter(obj=> obj.created_at.toString().slice(0,15)===Date().slice(0,15) )
   
}

export async function createMail(full_name,email,message){
    const result=await pool.query(`
    INSERT INTO contacts (full_name,email,message)
    VALUES(?,?,?)`,[full_name,email,message])
    return result;
}
