import { Orders } from './getOrders'

export default async function Order({ searchParams }) {
  return (
    <div>
      <Orders query={searchParams} />
    </div>
  )
}
