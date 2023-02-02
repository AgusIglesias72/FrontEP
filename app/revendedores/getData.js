import BasicCard from '../../Components/Card'

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

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      {orderData.map((item) => (
        <BasicCard
          key={item.Nombre}
          name={item.Nombre}
          email={item.Email}
          id={item.CUIT}
          province={item.Provincia}
          buyQuantity={item.CantidadCompras}
          lastBuy={item.UltimaCompra}
          instagram="enpalabrass"
          website="enpalabrass.com"
          extra={JSON.stringify(item)}
        />
      ))}
      {/* <div key={item.Nombre}>
      <h1>{item.Nombre}</h1>
      <p>{item.UltimaCompra}</p>
      {JSON.stringify(item)}
    </div> */}
    </div>
  )
}

// extra,
// name,
// id,
// buyQuantity,
// province,
// email,
// lastBuy,
