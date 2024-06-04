// import { addAuthHeader, apiRoot } from '../../app/api'
import { apiRoot } from '../../app/api'

const api = {
	// get
	// post
	// put
	// patch
	// deleate

	///get
	// getBranchReq: () => {
	// 	return apiRoot.get(`/branch/`)
	// },
    getPost:() =>{
		return apiRoot.post(`/users/`)
	}
	////PUT
	// 	updateBranch: () => {
	// 		return (
	// 			apiRoot.put <
	// 			Branch >
	// 			(`/admin/addtional/branch/${branch.id}/`, branch, addAuthHeader(token))
	// 		)
	// 	},
}

export default api
