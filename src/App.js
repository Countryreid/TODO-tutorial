import { useState } from "react"

export default function App(){
  const [newitem, setnewitem] = useState("")
  setnewitem("")
  return (
    <>
    <form className = "new-item-form">
      <div className="form-row">
        <label htmlFor="item"> New Item </label>
        <input type = "text" id = "item"/>
      </div>

      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo list</h1>
    <ul className="list">
      <li>
        <label>
          <input type="checkbox"/>
          Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox"/>
          Item 2
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
    </>
  )
}