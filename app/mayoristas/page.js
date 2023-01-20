'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  Alert,
  InputLabel,
  InputAdornment,
  MenuItem,
  FormControl,
  Select,
  Backdrop,
  CircularProgress,
  useMediaQuery,
  Snackbar,
} from '@mui/material'
import { modes } from '../../Components/Topbar'
import {
  provincias,
  paises,
  stock,
  tipoEnvio,
  moneda,
  juegos,
  metodoPago,
} from '../../Data/data.js'
import { Revendedores } from './getData.js'

const getRevendedores = async () => {
  return await Revendedores()
}

const addMayorista = async (data) => {
  console.log(data)

  try {
    const postData = await axios.post(
      'https://apiep-production.up.railway.app/api/orders/mayorista',
      {
        data,
        headers: {
          Authorization: process.env.AUTH_TOKEN,
        },
      }
    )
    return postData
  } catch (error) {
    return {
      error: error,
      message: 'Error',
    }
  }
}

export default function Mayoristas() {
  const theme = useTheme()
  const isNonMobile = useMediaQuery('(min-width:600px)')
  const colors = modes(theme.palette.mode)
  const [failed, setFailed] = useState(false)
  const [backdrop, setBackdrop] = useState(false)
  const [revendedor, setRevendedor] = useState('')
  const [revendedores, setRevendedores] = useState([])
  const [snackbar, setSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [data, setData] = useState({
    fecha_compra: '',
    canal_venta: '',
    nombre: '',
    mail: '',
    dni: '',
    telefono: '',
    zip_code: '',
    ciudad: '',
    provincia: '',
    pais: '',
    tipo_envio: '',
    stock: '',
    metodo_pago: '',
    moneda: '',
    fecha_envio: '',
    fecha_pago: '',
    costo_envio: 0,
    productos: [],
  })
  const [producto, setProducto] = useState([
    {
      nombre: '',
      cantidad: '',
      precio: '',
    },
    {
      nombre: '',
      cantidad: '',
      precio: '',
    },
    {
      nombre: '',
      cantidad: '',
      precio: '',
    },
  ])

  // const revendedores = await getData()

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  useEffect(() => {
    getRevendedores().then((res) => {
      setRevendedores(res)
    })
  }, [getRevendedores, setRevendedores])

  const handleRevendedor = (e) => {
    setRevendedor(e.target.value)
    const revendedor = revendedores.find(
      (item) => item.Nombre === e.target.value
    )
    console.log(revendedor)
    setData({
      ...data,
      nombre: revendedor.Nombre,
      mail: revendedor.Email,
      dni: revendedor.CUIT,
      telefono: revendedor.Telefono,
      provincia: revendedor.Provincia,
      pais: revendedor.Pais,
      canal_venta: 'Reventa',
    })
  }

  const handleProducto = (e, index) => {
    const { name, value } = e.target
    const list = [...producto]
    list[index][name] = value
    setProducto(list)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setBackdrop(true)
    const body = {
      ...data,
      fecha_compra: data.fecha_compra.split('-').reverse().join('/'),
      fecha_envio: data.fecha_envio.split('-').reverse().join('/'),
      fecha_pago: data.fecha_pago.split('-').reverse().join('/'),

      productos: producto.filter(
        (item) => item.nombre !== '' && item.cantidad > 0
      ),
    }

    console.log('body', body)
    console.log('data', data)

    if (
      data.fecha_compra === '' ||
      data.nombre === '' ||
      data.provincia === '' ||
      data.pais === '' ||
      data.tipo_envio === '' ||
      data.stock === '' ||
      data.fecha_envio === '' ||
      data.metodo_pago === '' ||
      data.moneda === '' ||
      data.fecha_pago === '' ||
      data.productos.length === 0
    ) {
      setSnackbarMessage({
        state: 'error',
        message: 'Por favor, complete todos los campos',
      })
      setBackdrop(false)
      setSnackbar(true)
      return
    }
    addMayorista(body).then((res) => {
      if (res.message === 'Ok') {
        setSnackbarMessage({
          state: 'success',
          message: 'Ingresado correctamente',
        })
      } else {
        setSnackbarMessage({
          state: 'error',
          message: 'Error al ingresar',
        })
      }
    })
    setTimeout(() => {
      setBackdrop(false)
    }, 1000)
  }

  const SnackMessage = () => {
    return (
      <Snackbar
        open={snackbar}
        autoHideDuration={5000}
        onClose={() => setSnackbar(false)}
      >
        <Alert severity={snackbarMessage.state} sx={{ width: '100%' }}>
          {snackbarMessage.message}
        </Alert>
      </Snackbar>
    )
  }

  return (
    <Box
      m="20px"
      sx={{
        '& legend': {
          color: colors.primary[100],
        },

        '& .MuiInputLabel-shrink': {
          color: colors.primary[100],
        },
        '& .Mui-focused': {
          color: colors.primary[100],
        },
        '& .MuiButtonBase-root': {
          backgroundColor: colors.blueAccent[300],
          color: colors.primary[900],
        },
      }}
    >
      {backdrop && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={backdrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {snackbar && <SnackMessage />}
      <Header
        title="Venta Mayorista"
        subtitle="Agrega una nueva venta mayorista"
      />

      <Box>
        <FormControl
          sx={{
            mb: '20px',
            gridColumn: 'span 4',
            width: '25%',
          }}
        >
          <InputLabel
            sx={{
              color: colors.primary[100],
            }}
          >
            Seleccionar Revendedor
          </InputLabel>
          <Select
            type="text"
            name="revendedor"
            label="Revendedores"
            value={revendedor}
            onChange={handleRevendedor}
            sx={{
              color: colors.primary[100],

              gridColumn: 'span 4',
            }}
          >
            {revendedores &&
              revendedores.map((revendedor) => (
                <MenuItem key={revendedor.Nombre} value={revendedor.Nombre}>
                  {revendedor.Nombre}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>

      <Box
        display="grid"
        gap="20px"
        gridTemplateColumns="repeat(1, minmax(0, 1fr))"
        sx={{
          '& > div': {
            gridColumn: isNonMobile ? undefined : 'span 4',
          },
        }}
      >
        <Typography variant="h5" sx={{ color: colors.blueAccent[300] }}>
          Datos del Comprador
        </Typography>

        <Box
          display="grid"
          gap="20px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            '& > div': {
              gridColumn: isNonMobile ? undefined : 'span 2',
            },
          }}
        >
          <TextField
            type="text"
            name="nombre"
            label="Nombre"
            value={data.nombre}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            type="text"
            name="mail"
            label="Mail"
            value={data.mail}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            type="text"
            name="dni"
            label="DNI / CUIT"
            value={data.dni}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            type="text"
            name="telefono"
            label="Teléfono"
            value={data.telefono}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            type="text"
            name="zip_code"
            label="Código Postal"
            value={data.zip_code}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            type="text"
            name="ciudad"
            label="Ciudad"
            value={data.ciudad}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <FormControl>
            <InputLabel
              sx={{
                color: colors.primary[100],
              }}
            >
              Provincia
            </InputLabel>
            <Select
              type="text"
              name="provincia"
              label="Provincias"
              value={data.provincia}
              onChange={handleChange}
              sx={{
                color: colors.primary[100],

                gridColumn: 'span 4',
              }}
            >
              {provincias.map((provincia) => (
                <MenuItem key={provincia} value={provincia}>
                  {provincia}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel
              sx={{
                color: colors.primary[100],
              }}
            >
              País
            </InputLabel>
            <Select
              type="text"
              name="pais"
              label="País"
              value={data.pais}
              onChange={handleChange}
              sx={{
                color: colors.primary[100],
                gridColumn: 'span 4',
              }}
            >
              {paises.map((pais) => (
                <MenuItem key={pais} value={pais}>
                  {pais}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Typography variant="h5" sx={{ color: colors.blueAccent[300] }}>
          Datos de la Venta
        </Typography>
        <Box
          display="grid"
          gap="20px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            '& > div': {
              gridColumn: isNonMobile ? undefined : 'span 2',
            },
          }}
        >
          <TextField
            label="Fecha Compra"
            name="fecha_compra"
            type="date"
            value={data.fecha_compra}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            fullWidth
            required
          />

          <FormControl variant="outlined" fullWidth>
            <InputLabel id="canal_venta">Canal Venta</InputLabel>
            <Select
              type="text"
              name="canal_venta"
              label="Canal de Venta"
              value={data.canal_venta}
              onChange={handleChange}
            >
              <MenuItem value="Empresa">Empresa</MenuItem>
              <MenuItem value="Reventa">Reventa</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel
              sx={{
                color: colors.primary[100],
              }}
            >
              Tipo de Envío
            </InputLabel>
            <Select
              type="text"
              name="tipo_envio"
              label="Tipo de Envío"
              value={data.tipo_envio}
              onChange={handleChange}
              sx={{
                color: colors.primary[100],
                gridColumn: 'span 4',
              }}
            >
              {tipoEnvio.map((tipo) => (
                <MenuItem key={tipo} value={tipo}>
                  {tipo}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel
              sx={{
                color: colors.primary[100],
              }}
            >
              Stock
            </InputLabel>
            <Select
              type="text"
              name="stock"
              label="Stock"
              value={data.stock}
              onChange={handleChange}
              sx={{
                color: colors.primary[100],
                gridColumn: 'span 4',
              }}
            >
              {stock.map((stock) => (
                <MenuItem key={stock} value={stock}>
                  {stock}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel
              sx={{
                color: colors.primary[100],
              }}
            >
              Método Pago
            </InputLabel>
            <Select
              type="text"
              name="metodo_pago"
              label="Método Pago"
              value={data.metodo_pago}
              onChange={handleChange}
              sx={{
                color: colors.primary[100],

                gridColumn: 'span 4',
              }}
            >
              {metodoPago.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel
              sx={{
                color: colors.primary[100],
              }}
            >
              Moneda
            </InputLabel>
            <Select
              type="text"
              name="moneda"
              label="Moneda"
              value={data.moneda}
              onChange={handleChange}
            >
              {moneda.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Fecha Envío"
            name="fecha_envio"
            type="date"
            value={data.fecha_envio}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            fullWidth
            required
          />

          <TextField
            label="Fecha Pago"
            name="fecha_pago"
            type="date"
            value={data.fecha_pago}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Costo Envío"
            name="costo_envio"
            value={data.costo_envio}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Box>

        <Typography variant="h5" sx={{ color: colors.blueAccent[300] }}>
          Productos
        </Typography>
        <Box
          display="grid"
          gap="20px"
          gridTemplateColumns="repeat(3, minmax(0, 1fr))"
          sx={{
            '& > div': {
              gridColumn: isNonMobile ? undefined : 'span 1',
            },
          }}
        >
          {producto.map((item, index) => (
            <>
              <FormControl key={index}>
                <InputLabel
                  sx={{
                    color: colors.primary[100],
                  }}
                >
                  Juego
                </InputLabel>
                <Select
                  type="text"
                  name="nombre"
                  label="Producto"
                  value={item.nombre}
                  onChange={(event) => handleProducto(event, index)}
                >
                  {juegos.map((juego) => (
                    <MenuItem key={juego} value={juego}>
                      {juego}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Cantidad"
                name="cantidad"
                value={item.cantidad}
                onChange={(event) => handleProducto(event, index)}
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Precio"
                name="precio"
                value={item.precio}
                onChange={(event) => handleProducto(event, index)}
                variant="outlined"
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          my: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          color="secondary"
          variant="contained"
          onClick={handleSubmit}
          sx={{
            width: '60%',
          }}
        >
          <Typography variant="h5">Cargar Venta</Typography>
        </Button>
      </Box>
    </Box>
  )
}
