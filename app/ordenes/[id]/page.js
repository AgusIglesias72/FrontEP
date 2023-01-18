import { Order } from './getOrder'
import Header from '../../../Components/Header'

export default async function PageOrder({ params }) {
  const { id } = params

  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <Order id={id} />
    </div>
  )
}
