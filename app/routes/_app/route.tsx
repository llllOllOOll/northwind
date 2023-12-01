import { Outlet } from "@remix-run/react"
import { NavBar } from "./sidebar"
import { items } from "./consts"

function Landing() {
  return (
    <div className="grid grid-cols-[1fr_4fr] xl:grid-cols-[1fr_6fr]">
        <NavBar  items={items}/>
        <main className="bg-zinc-600 min-h-screen">
            <Outlet />
        </main>
    </div>
  )
}

export default Landing

