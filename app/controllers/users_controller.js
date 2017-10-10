import User from '../models/user';
import {
  userIndex,
  userShow
} from '../views/users_view';

export const index = (req, res, next) => {
  User.find().lean().exec((err, users) => {
    res.json(userIndex(users));
  });
};

export const show = (req, res, next) => {
  User.findById(req.params.id).lean().exec((err, user) => {
    if (err) {
      return res.status(404)
        .json({
          error: errorMessage(err.message)
        });
    } else {
      res.json(userShow(user));
    }
  });
}

export const create = (req, res, next) => {
  User.create(req.body.user, function(err, user) {
    if (err) {
      return res.status(400)
        .json({
          error: errorMessage(err.message)
        });
    } else {
      return res.json({});
    }
  });
}

export const update = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, {
    $set: req.body.user
  }, {
    new: true
  }).exec((err, user) => {
    if (err) {
      return res.status(400)
        .json({
          error: errorMessage(err.message)
        });
    } else {
      return res.json(userShow(user));
    }
  });
}

export const destroy = (req, res, next) => {
  User.findByIdAndRemove(req.params.id).exec((err, user) => {
    if (err) {
      return res.status(400)
        .json({
          error: errorMessage(err.message)
        });
    } else {
      return res.json({});
    }
  });
}

function errorMessage(error) {
  switch(error) {
    case (error.match(/email_1 dup key/) || {}).input:
      return ('THE EMAIL ALREADY EXISTS');
    case (error.match(/nickname_1 dup key/) || {}).input:
      return ('THE NICKNAME ALREADY EXISTS');
    case (error.match(/you must enter a email/) || {}).input:
      return ('YOU MUST ENTER A EMAIL');
    case (error.match(/invalid email/) || {}).input:
      return ('INVALID EMAIL');
    case (error.match(/you must enter a nickname/) || {}).input:
      return ('YOU MUST ENTER A NICKNAME');
    case (error.match(/invalid nickname/) || {}).input:
      return ('INVALID NICKNAME');
    case (error.match(/you must enter a password/) || {}).input:
      return ('YOU MUST ENTER A PASSWORD');
    case (error.match(/invalid password/) || {}).input:
      return ('INVALID PASSWORD');
    default:
      return error
  }
}