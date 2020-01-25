import axios from "axios"

export const api = () => {
  return axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
  })
}

export function setToken(token) {
  return localStorage.setItem("token", token)
}

export const LoginUser = async (credentials) => {
  const res = await api().post("/api/auth/login", credentials)
  setToken(res.data.token)
  return res.data
}

export const SignupUser = async (user) => {
  const res = await api().post("/api/auth/register", user)
  return res.data
}
