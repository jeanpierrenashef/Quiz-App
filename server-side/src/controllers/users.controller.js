import { User } from "../models/user.model.js";
import { throwError, throwNotFound } from "../utils/errors.js";

export const getUsers = async (req, res) => {
  const id = req.params.id;

  try {
    if (id) {
      const user = await User.findById(id);

      if (!user) {
        res.status(404).send({
          message: "User Not Found",
        });
      }

      return res.json(user);
    }

    const users = await User.find();

    return res.json(users);
  } catch (error) {
    console.log(error.message);

    return res.status(500).send({
      message: "Something went wrong",
    });
  }
};

export const createUser = async (req, res) => {
  const { username, password, age } = req.body;

  try {
    if (!username || !password) {
      return res.status(500).send({
        message: "All feilds are required",
      });
    }

    const user = await User.create({
      username,
      password,
      age,
    });

    return res.json(user);
  } catch (error) {
    console.log(error.message);

    return res.status(500).send({
      message: "Something went wrong",
    });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;

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

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await User.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).send({
        message: "User Not Found",
      });
    }

    return res.json(deleted);
  } catch (error) {
    console.log(error.message);

    throwError({
      message: "Something went wrong",
    });
  }
};

// const userNotFound = (res) =>
// res.status(404).send({
//   message: "User Not Found",
// });
