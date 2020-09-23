import React, { useState, useEffect } from "react"
import { GetJokes } from "../utils/api"

export default function() {
  const [jokes, setJokes] = useState()
  useEffect(() => {
    GetJokes().then((jokes) => {
      console.log(jokes)
      setJokes(jokes)
    })
  }, [])
  return (
    <div>
      {jokes && jokes.map((joke)=><div key={joke.id}>{joke.joke}<br/><br/></div>)}
    </div>
  )
}
