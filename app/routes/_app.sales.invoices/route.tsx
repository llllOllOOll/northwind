import { Outlet, useLoaderData} from "@remix-run/react"
import { InvoicesList } from "./invoices"
import { json } from "@remix-run/node"
import { getInvoices } from "./invoices.server"

export const loader = async () => json(await getInvoices())


function Invoices() {
  const invoices  = useLoaderData<typeof loader>()
  return (
    <div className="bg-zinc-400 min-h-full">
      <InvoicesList invoices={invoices}/>
      <Outlet />
     </div>
  )
}

export default Invoices 


