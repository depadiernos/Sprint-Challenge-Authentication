const { jwt } = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET || "this is my secret passphrase"

/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

module.exports = (req, res, next) => {
  const notAllowed = { you: "shall not pass!" }
  const token = req.headers.authorization

  if (!token) {
    res.status(401).json(notAllowed)
  }
  jwt.verify(token, jwtSecret, (err, { sub, username }) => {
    if (err) {
      res.status(401).json(notAllowed)
    } else {
      req.user = { id: sub, username }
    }
  })
  next()
}
