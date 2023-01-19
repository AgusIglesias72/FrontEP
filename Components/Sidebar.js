import { useState } from 'react'
import { ProSidebarProvider, Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import { modes } from './Topbar.js'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import CachedIcon from '@mui/icons-material/Cached'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import AccountBoxIcon from '@mui/icons-material/AccountBox'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = modes(theme.palette.mode)

  return (
    <MenuItem
      as="div"
      active={selected.toLowerCase() === title.toLowerCase()}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link href={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

const MySidebar = ({ imageUrl, userName }) => {
  const theme = useTheme()
  const colors = modes(theme.palette.mode)
  const pathname = usePathname()

  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState(
    pathname == '/' ? 'Dashboard' : pathname.replace('/', '')
  )

  return (
    <ProSidebarProvider>
      <Box
        sx={{
          '& .pro-icon-wrapper': {
            backgroundColor: 'transparent !important',
          },
          '& .pro-inner-item': {
            padding: '5px 35px 5px 20px !important',
          },
        }}
      >
        <Sidebar
          defaultCollapsed={isCollapsed}
          backgroundColor={colors.primary[400]}
        >
          <Menu
            iconShape="square"
            menuItemStyles={{
              button: ({ active }) => {
                return {
                  padding: '5px 35px 5px 20px !important',
                  color: active ? 'white !important' : colors.grey[100],
                  backgroundColor: active ? colors.primary[700] : undefined,
                  '&:hover': {
                    backgroundColor: active
                      ? colors.primary[700]
                      : theme.palette.mode === 'dark'
                      ? colors.primary[500]
                      : colors.primary[800],
                  },
                }
              },
            }}
          >
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: '10px 0 20px 0',
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography
                    variant="h3"
                    color={colors.grey[100]}
                  ></Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Image
                    alt="profile-user"
                    width={100}
                    height={100}
                    src={imageUrl}
                    style={{ cursor: 'pointer', borderRadius: '50%' }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: '10px 0 0 0' }}
                  >
                    En Palabras
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    {userName}
                  </Typography>
                </Box>
              </Box>
            )}

            <Box paddingLeft={isCollapsed ? undefined : '10%'}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: '15px 0 5px 20px' }}
              >
                Datos
              </Typography>
              <Item
                title="Ordenes"
                to="/ordenes"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Revendedores"
                to="/revendedores"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Actualizar Datos"
                to="/actualizar"
                icon={<CachedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: '15px 0 5px 20px' }}
              >
                Cargar Ventas
              </Typography>
              <Item
                title="Mayoristas"
                to="/mayoristas"
                icon={<LocalShippingIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Regalos"
                to="/regalos"
                icon={<VolunteerActivismIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Personales"
                to="/personales"
                icon={<AccountBoxIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: '15px 0 5px 20px' }}
              >
                Charts
              </Typography>
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    </ProSidebarProvider>
  )
}

export default MySidebar
