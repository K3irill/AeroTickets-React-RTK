import axios, { CreateAxiosDefaults } from 'axios'

const API_URL = 'http://localhost:5000'

export const IS_CLIENT = typeof window === 'undefined'

const axiosOptions: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
}

export const axiosClassic = axios.create(axiosOptions)

export const instance = axios.create(axiosOptions)
