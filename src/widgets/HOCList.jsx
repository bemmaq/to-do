import {
	Paper,
	Skeleton,
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'
import { useEffect } from 'react'
import EmptyListPaper from './EmptyListPaper'
// import { tokensDark } from '../app/providers/ThemeProvider'
// import EmptyListPaper from './EmptyListPaper'
// import ErrorMessage from './ErrorMessage'

const HOCList = ({
	children,
	isLoading,
	isError,
	isSuccess,
	length,
	noLengthMessage,
	createLink,
	createText,
	loader = <TableLoader />,
}) => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])
	if (isLoading) return <TableLoader />
	// else if (isError) return <ErrorMessage />
	else if (isSuccess && length < 1)
		return (
			<EmptyListPaper
				createLink={createLink}
				createText={createText}
				title={noLengthMessage}
			/>
		)
	return <>{children}</>
}
const TableLoader = () => {
	return (
		<TableContainer
			sx={{ background: tokensDark.primary[500] }}
			component={Paper}
		>
			<Table>
				<TableHead>
					{...Array(3)
						.fill(5)
						.map((_, index) => (
							<TableRow>
								{...Array(3)
									.fill(5)
									.map((_, index) => (
										<TableCell
											key={index}
											sx={{
												textTransform: 'uppercase',
												fontWeight: 700,
											}}
										>
											<Skeleton variant='text' width={100} />
										</TableCell>
									))}
							</TableRow>
						))}
				</TableHead>
			</Table>
		</TableContainer>
	)
}
export default HOCList
