const express = require('express')
const mysql = require('mysql2');
const app = express();
const path = require("path")
app.use(express.json())
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"));
const cors = require('cors');
app.use(cors());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "dataset",
});


app.get("/show", (req, res) => {
    let q = "select username,language,input,left(code,100) as code,stamp from info"
    try {
        db.query(q, (err, result) => {
            if (err) throw err
            let data = result;
            res.render("home.ejs", { data });
        });
    }
    catch (err) {
        console.log(err);
    }

    console.log("server is working");
})


app.post("/insert", (req, res) => {

   let date=new Date().toISOString().slice(0, 19).replace('T', ' ');
    const values = [
        req.body.username, req.body.language,
        req.body.input,
        req.body.code,
        date,
    ]
    const q = `insert into info(username,language,input,code,stamp) VALUES (?)`
    console.log(values)
    


    try {
        db.query(q, [values], (err, data) => {
            if (err) console.log(err)
            else console.log("data inserted");
        })
    }
    catch (err) {
        console.log(err);
    }



})

db.end


app.listen(3000, () => {
    console.log("server listening");
})