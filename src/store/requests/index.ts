import axios from 'axios';
import { KeyTokenName } from '../../constants';
import { objectToFormData } from '../../helpers';

const defaultHeader = (token?: string | null) => {
	const header: any = {
		'Content-Type': 'application/json',
		'Cache-Control': 'no-cache',
	};
	if (token) header.Authorization = `Bearer ${token}`;
	return header;
};

export class ApiRequests {
	public get(apiUrl: string, params: any = {}, isAuth: boolean = true): Promise<any> {
		const headers = defaultHeader(isAuth ? localStorage.getItem(KeyTokenName) : null);
		return new Promise<any>((resolve, reject) => {
			axios
				.get(apiUrl, { headers, params })
				.then((response: any) => {
					const jsonData = response.data;
					resolve(jsonData);
				})
				.catch((e: any) => {
					reject(e);
				});
		});
	}

	public post(apiUrl: string, input: any = {}, isAuth: boolean = true, jsonParser: boolean = false): Promise<any> {
		const data = jsonParser ? JSON.stringify(input) : objectToFormData(input);
		const headers = defaultHeader(isAuth ? localStorage.getItem(KeyTokenName) : null);
		return new Promise<any>((resolve, reject) => {
			axios
				.post(apiUrl, data, { headers })
				.then((response: any) => {
					const jsonData = response.data;
					resolve(jsonData);
				})
				.catch((e: any) => {
					reject(e);
				});
		});
	}

	public put(apiUrl: string, input: any = {}, isAuth: boolean = true, jsonParser: boolean = false): Promise<any> {
		const data = jsonParser ? JSON.stringify(input) : objectToFormData(input);
		const headers = defaultHeader(isAuth ? localStorage.getItem(KeyTokenName) : null);
		return new Promise<any>((resolve, reject) => {
			axios
				.put(apiUrl, data, { headers })
				.then((response: any) => {
					const jsonData = response.data;
					resolve(jsonData);
				})
				.catch((e: any) => {
					reject(e);
				});
		});
	}

	public delete(apiUrl: string, params: any = {}, isAuth: boolean = true, jsonParser: boolean = false): Promise<any> {
		const headers = defaultHeader(isAuth ? localStorage.getItem(KeyTokenName) : null);
		const data = jsonParser ? JSON.stringify(params) : objectToFormData(params);
		return new Promise<any>((resolve, reject) => {
			axios
				.delete(apiUrl, { headers, data })
				.then((response: any) => {
					const jsonData = response.data;
					resolve(jsonData);
				})
				.catch((e: any) => {
					reject(e);
				});
		});
	}
}

export const Requests = new ApiRequests();
