import express from "express";
import { engine } from "express-handlebars";
import departmentsRouter from "./routes/admin/departments.js";
import subjectsRouter from "./routes/admin/subjects.js";
import professorsRouter from "./routes/admin/professors.js";
import studentsRouter from "./routes/admin/students.js";

import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
mongoose.connect(process.env.mongoConnectionUrl);

const app = express();

app.use(express.urlencoded({ extended: true} ));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/admin', departmentsRouter);
app.use('/admin', subjectsRouter);
app.use('/admin', professorsRouter);
app.use('/admin', studentsRouter);

app.use(express.static('images'));

app.listen(process.env.port, () => {
    console.log(`The application started on http://localhost:${process.env.port}`);
});

