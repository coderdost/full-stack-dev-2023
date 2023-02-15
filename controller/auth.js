const jwt = require('jsonwebtoken');
const model = require('../model/user');
const User = model.User;
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const privateKey = fs.readFileSync(
  path.resolve(__dirname, '../private.key'),
  'utf-8'
);

exports.signUp = (req, res) => {
  const user = new User(req.body);
  var token = jwt.sign({ email: req.body.email }, privateKey, {
    algorithm: 'RS256',
  });
  const hash = bcrypt.hashSync(req.body.password, 10);

  user.token = token;
  user.password = hash;

  user.save((err, doc) => {
    console.log({ err, doc });
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json({token});
    }
  });
};

exports.login = async (req, res) => {
  try {
    const doc = await User.findOne({ email: req.body.email });
    const isAuth = bcrypt.compareSync(req.body.password, doc.password);
    if (isAuth) {
      var token = jwt.sign({ email: req.body.email }, privateKey, {
        algorithm: 'RS256',
      });
      doc.token = token;
      doc.save(()=>{
        res.json({token})
      })
      
    }else{
        res.sendStatus(401);

    }
  } catch (err) {
    res.status(401).json(err);
  }

};
