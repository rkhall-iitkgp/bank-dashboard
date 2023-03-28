import axios from 'axios'

export default axios.create({
    // baseURL: 'http://localhost:8081',
    baseURL:
        'https://transaction-backend-aryasaksham-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/',
})