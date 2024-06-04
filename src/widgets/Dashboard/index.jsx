import { Box, Button, Grid } from '@mui/material'
import Header from '../Header'

const Dashboard = () => {
	const superadminNavs = [
		{
			text: 'филиалы',
			value: '/filial',
		},
	]

	return (
		<Box>
			<Header title={`Добро пожаловать `}></Header>
			<Box sx={{ mt: '20px' }}>
				<Grid container spacing={2} alignItems='center' mb='30px'>
					{superadminNavs.map(nav => {
						return (
							<Grid key={nav.text} item xl={2} lg={3} md={3} sm={4} xs={6}>
								<Button
									fullWidth
									key={nav.text}
									variant='contained'
									sx={{
										width: '200px',
										height: '70px',
										padding: '12px',
										transition: 'all 0.4s ease',
									}}
								>
									{nav.text}
								</Button>
							</Grid>
						)
					})}
				</Grid>
			</Box>
			{/* ) : null} */}
		</Box>
	)
}

export default Dashboard
