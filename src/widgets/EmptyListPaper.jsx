import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import { Link, Paper } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'

const EmptyListPaper = ({
	title,
	createLink = '',
	createText = 'Создать запись',
}) => {
	const navigate = useNavigate()
	const onClickEvent = () => {
		navigate('/')
	}

	return (
		<Paper
			className='emptyList'
			sx={{
				margin: '40px auto 0 auto',
				maxWidth: '500px',
				minHeight: '150px',
				background: '#424242',
				paddingY: '20px',
			}}
		>
			<SentimentVeryDissatisfiedIcon sx={{ fontSize: 80, color: '#4caf50' }} />
			<div className='emptyListTitle'>{title}</div>
			{createLink ? (
				<NavLink style={{ paddingTop: '20px' }} to={createLink}>
					<Link
						underline='none'
						sx={{
							cursor: 'pointer',
							fontSize: '16px',
							textAlign: 'right',
							'@media(max-width:768px)': {
								fontSize: '11px',
							},
						}}
					>
						{createText}
					</Link>
				</NavLink>
			) : null}
			<Link
				underline='none'
				sx={{
					cursor: 'pointer',
					mt: '10px',
					fontSize: '13px',
					color: '#f60303',
					textAlign: 'right',
					'@media(max-width:768px)': {
						fontSize: '11px',
					},
				}}
				onClick={onClickEvent}
			>
				Перезагрузить страницу
			</Link>
		</Paper>
	)
}

export default EmptyListPaper
