const express = require("express");
const app=express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/public")));
    app.get("*", (req, res) => {
       res.sendFile(path.resolve(__dirname, "client/public/index.html"));
     });
}

console.log(__dirname);
console.log(path.join(__dirname, "client/public"));

app.use("/auth",require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
})


