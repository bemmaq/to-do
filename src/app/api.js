import axios from 'axios'

export const apiRoot = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1/',
})
