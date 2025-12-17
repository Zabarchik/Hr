const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../utils/generateTokens');
const cookieConfig = require('../configs/cookieConfig');
const jwt = require('jsonwebtoken');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const authRouter = express.Router();

authRouter.post('/registr', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(401).send({ message: 'Fill all fields' });

    const [foundUser, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, hashpass: await bcrypt.hash(password, 10) },
    });
    if (!created) return res.status(403).json({ message: 'User already exists' });

    const user = foundUser.get();
    delete user.hashpass;
    const { accessToken, refreshToken } = generateTokens({ user });

    // в ответе refreshToken пишем в куки, а accessToken отправляем в теле ответа
    return res
      .cookie('refreshToken', refreshToken, cookieConfig)
      .status(200)
      .json({ accessToken, user });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

authRouter.get('/refresh', async (req, res) => {
  try {
    const { refreshToken: oldRefreshToken } = req.cookies;
    const { user } = jwt.verify(oldRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    const { accessToken, refreshToken: newRefreshToken } = generateTokens({ user });
    res.cookie('refreshToken', newRefreshToken, cookieConfig).json(user);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ message: 'Fill fields' });
    }

    const foundUser = await User.findOne({
      where: { email },
    });
    if (!foundUser) return res.status(401).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, foundUser.hashpass);
    if (!valid) return res.status(401).json({ message: 'Incorrect password' });

    const user = foundUser.get();
    delete user.hashpass;
    const { accessToken, refreshToken } = generateTokens({ user });

    return res
      .cookie('refreshToken', refreshToken, cookieConfig)
      .status(200)
      .json({ accessToken, user });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

authRouter.get('/logout', (req, res) => {
  res.clearCookie('refreshToken').sendStatus(200);
});




module.exports = authRouter;
