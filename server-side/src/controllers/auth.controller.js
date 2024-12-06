import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      username,
    });

    if (!user) {
      return res.status(404).send({
        message: "Invalid Credentials",
      });
    }

    const check = await bcrypt.compare(password, user.password);

    if (!check) {
      return res.status(400).send({
        message: "Invalid Credentials",
      });
    }

    const token = await jwt.sign({ userId: user.id }, "secret");

    return res.status(200).send({ user, token });
  } catch (error) {
    console.log(error.message);

    return res.status(500).send({
      message: "Something went wrong",
    });
  }
};

export const register = async (req, res) => {
  const { username, password, age } = req.body;

  try {
    if (!username || !password) {
      return res.status(500).send({
        message: "All feilds are required",
      });
    }

    // const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      age,
      password: hashed,
    });

    return res.json(user);
  } catch (error) {
    console.log(error.message);

    return res.status(500).send({
      message: "Something went wrong",
    });
  }
};

export const updateProfile = async (req, res) => {
  const id = req.user.id;

  try {
    if (!id) {
      return res.status(400).send({
        message: "Id is required",
      });
    }

    // const user = await User.findById(id);

    const { username, age } = req.body;

    // user.username ??= data.username;
    // user.age ??= data.age;

    // await user.save();

    const updated = await User.findByIdAndUpdate(
      id,
      {
        username,
        age,
      },
      {
        new: true,
      }
    );

    if (!updated) {
      return res.status(404).send({
        message: "User Not Found",
      });
    }

    // const updated = await User.updateOne(
    //   {
    //     id,
    //   },
    //   {
    //     username,
    //     age,
    //   }
    // );

    return res.status(200).send(updated);
  } catch (error) {
    console.log(error.message);

    return res.status(500).send({
      message: "Something went wrong",
    });
  }
};
