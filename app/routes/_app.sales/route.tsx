import { Outlet } from "@remix-run/react"

function Sales() {
  return (
    <div className="min-h-screen">
      <h1>Sales</h1>
      <Outlet />
      </div>
  )
}

export default Sales 
