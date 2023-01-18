import Header from '../../Components/Header'
import { Revendedores } from './getData'

export default async function Reventa() {
  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <Header title="Revendedores" subtitle="Lista de revendedores" />
      <Revendedores />
    </div>
  )
}
