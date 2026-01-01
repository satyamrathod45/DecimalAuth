import Todo from "../Model/todo.model.js";
import { colors } from "../color.js";

export const createTodo = async (req, res) => {
  try {
    const { text} = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({
        message: "Text cannot be empty",
        status: "failed",
      });
    }

    const newTodo = await Todo.create({
      text: text,
      color: colors[Math.floor(Math.random() * colors.length)],
      Rotate: Math.floor(Math.random() * 6) - 3,

    });

    return res.status(201).json({
      message: "Todo added successfully",
      status: "success",
      todo: newTodo,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Failed to create todo",
      status: "error",
      error: error.message,
    });
  }
};


export const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });

    return res.status(200).json({
      status: "success",
      length: todos.length,
      todos,
    });

  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to fetch todos",
      error: error.message,
    });
  }
};