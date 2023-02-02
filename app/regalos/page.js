'use client'
import axios from 'axios'
import { useState } from 'react'
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
  canalVentaPersonal,
} from '../../Data/data.js'

const addRegalo = async (body) => {
  const url = 'https://apiep-production.up.railway.app/api/orders/regalo'
  try {
    const postData = await axios.post(url, body, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })

    return postData
  } catch (error) {
    console.log(error)
    return {
      error: error,
      message: 'Error',
    }
  }
}

const Regalo = () => {
  const theme = useTheme()
  const isNonMobile = useMediaQuery('(min-width:600px)')
  const colors = modes(theme.palette.mode)
  const [failed, setFailed] = useState(false)
  const [backdrop, setBackdrop] = useState(false)
  const [snackbar, setSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [data, setData] = useState({
    fecha_compra: '',
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
    fecha_envio: '',
    productos: [],
  })
  const [producto, setProducto] = useState([
    {
      nombre: '',
      cantidad: '',
    },
    {
      nombre: '',
      cantidad: '',
    },
    {
      nombre: '',
      cantidad: '',
    },
  ])

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
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

      productos: producto.filter(
        (item) => item.nombre !== '' && item.cantidad > 0
      ),
    }

    if (
      body.fecha_compra === '' ||
      body.canal_venta === '' ||
      body.nombre === '' ||
      body.provincia === '' ||
      body.pais === '' ||
      body.tipo_envio === '' ||
      body.stock === '' ||
      body.fecha_envio === '' ||
      body.productos.length === 0
    ) {
      setSnackbarMessage({
        state: 'error',
        message: 'Por favor, complete todos los campos',
      })
      setBackdrop(false)
      setSnackbar(true)
      return
    }
    addRegalo(body).then((res) => {
      console.log(res)
      if (res.data.message === 'Ok') {
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
      // setTimeout(() => {
      setBackdrop(false)
      setSnackbar(true)
      // }, 1000)
    })
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
        title="Agregar Regalo"
        subtitle="Agrega un nuevo registro de Regalo"
      />

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
            label="Nombre"
            name="nombre"
            value={data.nombre}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Mail"
            name="mail"
            value={data.mail}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="DNI"
            name="dni"
            value={data.dni}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Telefono"
            name="telefono"
            value={data.telefono}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Codigo Postal"
            name="zip_code"
            value={data.zip_code}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Ciudad"
            name="ciudad"
            value={data.ciudad}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="provincia">Provincia</InputLabel>
            <Select
              labelId="provincia"
              id="provincia"
              name="provincia"
              value={data.provincia}
              onChange={handleChange}
              label="Provincia"
            >
              {provincias.map((provincia) => (
                <MenuItem key={provincia} value={provincia}>
                  {provincia}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="pais">Pais</InputLabel>
            <Select
              labelId="pais"
              id="pais"
              name="pais"
              value={data.pais}
              onChange={handleChange}
              label="Pais"
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
            <InputLabel id="tipo_envio">Tipo de envio</InputLabel>
            <Select
              labelId="tipo_envio"
              id="tipo_envio"
              name="tipo_envio"
              value={data.tipo_envio}
              onChange={handleChange}
              label="Tipo de envio"
            >
              {tipoEnvio.map((tipo) => (
                <MenuItem key={tipo} value={tipo}>
                  {tipo}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="stock">Stock</InputLabel>
            <Select
              labelId="stock"
              id="stock"
              name="stock"
              value={data.stock}
              onChange={handleChange}
              label="Stock"
            >
              {stock.map((stock) => (
                <MenuItem key={stock} value={stock}>
                  {stock}
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
        </Box>

        <Typography variant="h5" sx={{ color: colors.blueAccent[300] }}>
          Productos
        </Typography>
        <Box
          display="grid"
          gap="20px"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
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
          variant="contained"
          onClick={handleSubmit}
          sx={{
            width: '100%',
            backgroundColor: '#3f51b5 !important',
            color: '#fff !important',
          }}
        >
          <Typography variant="h5">Cargar Venta</Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default Regalo
