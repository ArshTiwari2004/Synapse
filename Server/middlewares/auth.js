import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  let { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  if (token.startsWith("Bearer ")) {
    token = token.split(' ')[1];
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    console.log("Decoded token:", decoded); // Log the decoded token

    // Ensure the token contains the user _id
    req.userId = decoded._id;
    if (!req.userId) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    next();
  });
};

export default auth;
