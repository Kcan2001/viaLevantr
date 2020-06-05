// axios
import axios from 'axios'

// const baseURL = 'levantr-db-do-user-1332317-0.a.db.ondigitalocean.com'

export default axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 1000,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  auth: {
    username: 'doadmin',
    password: 'hqt3j6tkme25ldh3'
  },
  responseType: 'json',
  proxy: {
    host: 'levantr-db-do-user-1332317-0.a.db.ondigitalocean.com',
    port: 25060,
    auth: {
      username: 'doadmin',
      password: 'hqt3j6tkme25ldh3'
    }
  }
})
