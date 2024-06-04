import { useRoutes } from 'react-router-dom'
import BranchRoute from '../../features/Branch/route'
import Dashboard from '../../widgets/Dashboard'
import Layout from '../../widgets/Layout'

const MyRoutes = () => {
	return useRoutes([
		{
			path: '',
			element: <Layout />,
			children: [{ path: '', element: <Dashboard /> }, BranchRoute],
		},
	])
}
export default MyRoutes
