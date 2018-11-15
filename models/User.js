const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  method: {
    type: String,
    enum: ['local', 'google', 'facebook'],
    required: true
  },
  local: {
    email: {
      type: String,
      maxlength: 50,
      minlength: 4,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      maxlength: 1024,
      minlength: 3
    },
    picture: {
      type: String,
      default:"https://vignette.wikia.nocookie.net/villains/images/6/61/Unknown_Face_Of_The_Collector.jpg/revision/latest?cb=20171207211806"
    }
  },
  google: {
    id: String,
    email: {
      type: String,
      lowercase: true
    },
    picture: String
  },
  facebook: {
    id: String,
    email: {
      type: String,
      lowercase: true
    },
    picture: String
  }
});

// generating JWT
userSchema.methods.genToken = function() {
  return jwt.sign({ _id: this._id }, config.get('jwtSecret'));
};

userSchema.methods.validPassword = async function(password) {
  return await bcrypt.compare(password, this.local.password);
};

// hashing password before saving for local
userSchema.pre('save', async function(next) {
  if (this.method !== 'local') next();
  const salt = await bcrypt.genSalt(10);
  this.local.password = await bcrypt.hash(this.local.password, salt);
  next();
});

const User = mongoose.model('user', userSchema);

module.exports = User;
