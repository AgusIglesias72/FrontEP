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

const MySidebar = () => {
  const theme = useTheme()
  const colors = modes(theme.palette.mode)
  const pathname = usePathname()

  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState(pathname.replace('/', ''))

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
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
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
                    src={
                      'data:image/jpeg;base64,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'
                    }
                    style={{ cursor: 'pointer', borderRadius: '50%' }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: '10px 0 0 0' }}
                  >
                    Ed Roh
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    VP Fancy Admin
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
                Data
              </Typography>
              <Item
                title="Ventas"
                to="/ventas"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Contacts Information"
                to="/contacts"
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
