const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

const find = (filter) => {
  return db("users")
    .where(filter)
    .select("id", "username")
}

const findBy = (filter) => {
  return db("users")
    .where(filter)
    .select(["id", "username", "password"]).first()
}

const findById = (id) => {
  return db("users")
    .where({ id })
    .first("id", "username")
}

const add = async (user) => {
  user.password = await bcrypt.hash(user.password, 12)
  const [id] = await db("users").insert(user)
  return findById(id)
}

const verifyUser = async (user) => {
  const userExists = await findById(user.id)
  if (userExists) {
    return true
  } else {
    return false
  }
}

module.exports = { find, findBy, findById, add, verifyUser }