import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8000',
  //   baseURL: 'https://neobank-backend-aryasaksham-dev.apps.sandbox-m3.1530.p1.openshiftapps.com'
})
