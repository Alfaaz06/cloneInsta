import express from 'express';
export const app = express();
import index from "./routes/index.js"
import message from "./routes/message.js"
import path from 'path'
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/backend/public')))
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/backend/views'));



app.use(index)
app.use(message)