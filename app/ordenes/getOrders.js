import Link from 'next/link'

const fetchOrders = async (props) => {
  const page = props.page || 1
  const canal = props.canal || 'all'

  const res = await fetch(
    `https://apiep-production.up.railway.app/api/orders?page=${page}&canal=${canal}`,
    {
      cache: 'no-store',
    }
  )
  return await res.json()
}

export async function Orders({ query }) {
  const orders = await fetchOrders(query)
  const ordersData = orders.orders

  if (orders.status !== 200) return <h1>404</h1>

  return ordersData.map((order) => (
    <div>
      <Link href="/ordenes/[id]" as={`/ordenes/${order.IdPedido}`}>
        <h1>{order.IdPedido}</h1>
        <p>{order.CanalVenta}</p>
      </Link>
    </div>
  ))
}
