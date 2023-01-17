import { Order } from './getOrder'

export default async function PageOrder({ params }) {
  const { id } = params

  return (
    <div>
      <Order id={id} />
    </div>
  )
}
