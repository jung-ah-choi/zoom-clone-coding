import express from "express";

const app = express();


app.set("view engine", "pug"); // Pug로 view engine 설정
app.set("views", __dirname + "/views"); // Express에 template이 어딨는지 지정
app.use("/public", express.static(__dirname + "/public")); // public url을 생성해서 유저에게 파일을 공유
app.get("/", (req, res) => res.render("home")); // home.pug를 render 해주는 route handler를 만들어줌
app.get("*/", (req, res) => res.redirect("/")); // redirect url 설정

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen); // port 3000으로 설정