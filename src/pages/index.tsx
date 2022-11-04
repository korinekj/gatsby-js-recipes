import React from "react"

export default function Home() {
  interface Name {
    name: string
  }

  const karel: Name = 5

  console.log(karel)

  return <div className="karel">Hello world!</div>
}
