const fetchData = async () => {
  const res = await fetch(
    `https://apiep-production.up.railway.app/api/orders/Revendedores`,
    {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    }
  )
  return await res.json()
}

export async function Revendedores() {
  const order = await fetchData()
  const orderData = order.data

  if (order.status !== 200) return <h1>{JSON.stringify(order)}</h1>

  return orderData
}