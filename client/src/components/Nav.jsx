import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="bg-zinc-700 flex justify-between text-white font-bold text-xl items-center py-4 px-12">
      <Link to="/"><h1>React Mysql</h1></Link>
      <ul className="flex gap-4">
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/new">create task</Link>
          </li>
      </ul>
    </div>
  )
}

export default Nav