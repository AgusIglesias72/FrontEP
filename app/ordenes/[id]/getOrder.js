const fetchOrder = async (id) => {
  const res = await fetch(
    `https://apiep-production.up.railway.app/api/orders/${id}`,
    {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    }
  )
  return await res.json()
}

export async function Order({ id }) {
  const order = await fetchOrder(id)
  const orderData = order.order

  if (order.status !== 200) return <h1>404</h1>

  return (
    <>
      <h1>{orderData.IdPedido}</h1>
      <p>{orderData.CanalVenta}</p>
    </>
  )
}
