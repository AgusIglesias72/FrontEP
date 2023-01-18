import { Orders } from './getOrders'
import Header from '../../Components/Header'

export default async function Order({ searchParams }) {
  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <Header title="Ordenes" subtitle="Información de Órdenes" />
      <Orders query={searchParams} />
    </div>
  )
}
