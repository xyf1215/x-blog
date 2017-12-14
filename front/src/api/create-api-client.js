import axios from 'axios'
import {config, initAxios} from './config'

export const serv = axios.create({
  ...config,
  baseURL: '/api'
})

initAxios(serv)
