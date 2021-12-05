import axios from 'axios';
import { BaseUrl } from './Config';
axios.defaults.baseURL = BaseUrl;
axios.interceptors.response.use(function (response) {
    return { ok: true, data: response?.data };
}, function (error) {
    return { ok: false, error: error?.response?.data }
});
export const ApiManager = {
    get: async (endpoint: string, params: object = {}) => {
        return axios.get(endpoint, { params });
    },
    post: async (endpoint: string, body: object, params: object = {}) => {
        return axios.post(endpoint, body, { params });
    },
    put: async (endpoint: string, body: object, params: object = {}) => {
        return axios.put(endpoint, body, { params });
    },
    patch: async (endpoint: string, body: object, params: object = {}) => {
        return axios.patch(endpoint, body, { params });
    },
    delete: async (endpoint: string, params: object = {}) => {
        return axios.delete(endpoint, { params });
    },
};


/**
 * EXAMPLE USAGE
 *  const response = await ApiManager.getData(`/movies.json`) // Final url will be BaseURL + "/movies.json" due to default base url
 *  if (response?.ok)
 *    console.log(response.data);
 *  else
 *    console.log("Error", response.error)
 */
