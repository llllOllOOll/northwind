import { json } from "@remix-run/node"
import { Outlet, useLoaderData } from "@remix-run/react"
import { getInvoices } from "./invoices.server"


export const loader = async () =>{
  return json(await getInvoices())
}

function Invoices() {
  const invoices = useLoaderData<typeof loader>()
  return (
    <div className="bg-yellow-200 min-h-full">
      <h1>Invoices</h1>
      <ul>
        {invoices.map((invoice)=><li key={invoice.id}>{invoice.customer}</li>)}
      </ul>
      <Outlet />
      </div>
  )
}

export default Invoices 


