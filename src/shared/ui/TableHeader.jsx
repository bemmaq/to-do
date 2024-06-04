import { Button, Grid, Stack } from '@mui/material'
import Header from '../../widgets/Header'

/**
 * Компонент для отображения шапки в таблицах
 */
const TableHeader = ({
	title,
	showCreateButton,
	subtitle = '',
	addHandler = () => {},
	buttonText = '',
}) => {
	return (
		<Stack
			direction='row'
			alignItems='center'
			justifyContent='space-between'
			flexWrap='wrap'
			mb='16px'
		>
			<Grid xs={12} sm={6} md={6} lg={6} xl={6} item>
				<Header title={title} subtitle={subtitle} />
			</Grid>
			{showCreateButton ? (
				<Grid xs={12} sm={6} md={6} lg={6} xl={6} item>
					<Button
						variant='contained'
						sx={{
							background: '#7575ac',
							'&:hover': {
								background: '#0909f8',
							},
						}}
						onClick={addHandler}
					>
						{buttonText}
					</Button>
				</Grid>
			) : null}
		</Stack>
	)
}

export default TableHeader
