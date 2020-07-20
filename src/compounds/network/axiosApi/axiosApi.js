import axios from 'axios';
import {DEPLOYED_SERVER_URL} from '../../../config/deploymentConfig'

export const axiosRequest = axios.create({
    baseURL: DEPLOYED_SERVER_URL,
    responseType: 'json'
});