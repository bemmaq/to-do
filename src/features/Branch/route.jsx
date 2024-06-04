import { Outlet } from 'react-router-dom'
import BranchList from './ui/list'

const BranchRoute = {
	path: '/branch',
	element: <Outlet />,
	children: [
		{
			path: '',
			element: <BranchList />,
		},
	],
}

export default BranchRoute
