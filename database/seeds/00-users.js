const bcrypt = require("bcryptjs")
const hash = async (password) => await bcrypt.hash(password, 12)

exports.seed = async (knex) => {
  await knex("users").truncate()
  await knex("users").insert([
    {
      username: "Pencil",
      password: `${await hash('password1')}`
    },
    {
      username: "Paper",
      password: `${await hash('password2')}`
    },
    {
      username: "Eraser",
      password: `${await hash('password3')}`
    }
  ])
}