import { Router } from "express";
import { createTodo, getAllTodo } from "../controller/Todo.controller.js";

export const todoRouter = Router();

todoRouter.post('/todo' , createTodo);
todoRouter.get('/todos' , getAllTodo);

