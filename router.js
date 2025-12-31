import { Router } from "express";
import { users } from "./db.js";
import { validateUser } from "./helper.js";

export const router = Router();

router.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find(u => u.id === Number(id));

  if (!user) {
    return res.json({
      status: "failed",
      msg: "User not found"
    });
  }

  return res.json(user);
});

router.get("/users", (req, res) => {
  const { age, role } = req.query;
  const ageNum = age ? Number(age) : null;

  if (!age && !role) {
    return res.json({
      users,
      length: users.length
    });
  }

  const filteredUsers = users.filter(user => {
    if (ageNum && role) {
      return user.age === ageNum && user.role === role;
    }
    if (ageNum) {
      return user.age === ageNum;
    }
    if (role) {
      return user.role === role;
    }
    return true;
  });

  return res.json({
    users: filteredUsers,
    length: filteredUsers.length
  });
});

router.put("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const updatedData = req.body;

  const index = users.findIndex(user => user.id === userId);

  if (index === -1) {
    return res.json({
      status: "failed",
      msg: "User not found"
    });
  }

  if (!validateUser(updatedData)) {
    return res.json({
      status: "failed",
      msg: "Invalid user data"
    });
  }

  users[index] = {
    ...users[index],
    ...updatedData
  };

  return res.json({
    status: "updated",
    user: users[index]
  });
});

