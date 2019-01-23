const passport = requeire('passport');
const GoogleStrategy = requeire('passport-google-oauth');
const keys = requeire('./keys');

passport.use(
  new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
  }), () => {
    
  }
)