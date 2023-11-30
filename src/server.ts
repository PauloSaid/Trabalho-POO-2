import express from 'express';
import AlunoRouter from './routes/AlunoRoute';
import AvaliacaoRouter from './routes/AvaliacaoRoute';
import EstandeRouter from './routes/EstandeRoute';
import GrupoRouter from './routes/GrupoRoute';
import ProfessorRouter from './routes/ProfessorRoute';

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(AlunoRouter);
app.use(AvaliacaoRouter);
app.use(EstandeRouter);
app.use(GrupoRouter);
app.use(ProfessorRouter);



app.listen(3000, function(){
    console.log("Server running on port 3000");
})