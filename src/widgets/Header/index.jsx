import { Box, Typography } from '@mui/material'

const Header = ({ title, subtitle }) => {
	return (
		<Box sx={{ marginBottom: '15px' }}>
			<Typography
				sx={{
					mb: '5px',
					fontSize: '32px',
					color: '#010101',
					'@media(max-width:640px)': {
						fontSize: '25px',
						textAlign: 'center',
					},
				}}
			>
				{title}
			</Typography>
			<Typography
				variant='h5'
				sx={{
					'@media(max-width:640px)': {
						textAlign: 'center',
					},
				}}
			>
				{subtitle}
			</Typography>
		</Box>
	)
}

export default Header
