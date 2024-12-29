const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user'); // Assuming you have a User model
require('dotenv').config();

// Set up Passport to handle Google OAuth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/auth/google/callback',
  },
  async (token, tokenSecret, profile, done) => {
    try {
      // Check if the user already exists in the database
      let user = await User.findOne({ email: profile.emails[0].value });

      if (!user) {
        // If the user does not exist, create a new user
        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
        });
        await user.save();
      }
      
      // Return the user profile to store in the session
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  }
));

// Serialize and deserialize user information to store in session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
