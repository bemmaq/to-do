import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './router'
import UserList from '../features/Branch/ui/list'

export default function App() {
	return (
		<div>
			<BrowserRouter>
				{/* <MyRoutes /> */}
				<UserList/>
			</BrowserRouter>
		</div>
	)
}
