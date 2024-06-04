import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar'
import { SideBar } from '../Sidebar'

const Layout = () => {
	return (
		<Box>
			<SideBar />
			<Box flexGrow={1} sx={{ overflowX: 'auto' }}>
				<Navbar />
				<Box m='2rem 1rem'>
					dfghjk
					<Outlet />
				</Box>
			</Box>
		</Box>
	)
}

export default Layout
