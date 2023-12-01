import { json } from '@remix-run/node'
import { Overview } from './chart'
import { getOrdersByMonth } from './chart.server'
import { useLoaderData } from '@remix-run/react'

export const loader = async () => json(await getOrdersByMonth())

//VIEW 
function Dashboard() {
  const data = useLoaderData<typeof loader>()
  return (
    <div>
      <Overview data={data} />
    </div>
  )
}

export default Dashboard