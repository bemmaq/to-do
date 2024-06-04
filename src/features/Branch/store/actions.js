import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api'

export const getUsers = createAsyncThunk(
	'users/getBranches',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await api.getPost()
			console.log(data)
			console.log('sdfs')
			// return response.data
		} catch {
			return rejectWithValue('Error')
		}
	}
)
