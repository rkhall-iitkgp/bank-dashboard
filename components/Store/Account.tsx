
import dayjs from 'dayjs'
import { create } from 'zustand'
import useStorage from '../../hooks/useStorage'
import api from '../datams'
import { combine } from 'zustand/middleware'
const { getItem } = useStorage()
const useAccountStore = create(
    combine({
        token: '',
        account_no: '',
        mpin: '',
        startDate: dayjs(new Date()).subtract(1, 'month').toDate(),
        endDate: new Date(),
        Transaction: [{
            description: '',
            date: '',
            credit: 0,
            debit: 0,
            mode: '',
            category: '',
            id: ''
        }],
        Loading: false,
        flag: false
    },
        (set, get) => ({
            setTransaction: () => {
                useAccountStore.setState({ Loading: true })
                api.post("/user/gettrxn/", {
                    "account_no": get().account_no,
                    "mpin": get().mpin,
                    "startDate": get().startDate.getUTCFullYear() + "-" + (get().startDate.getMonth() + 1) + "-" + get().startDate.getDate(),
                    "endDate": get().endDate.getUTCFullYear() + "-" + (get().endDate.getMonth() + 1) + "-" + get().endDate.getDate()

                }, { headers: { "Authorization": `Bearer ${getItem("access_token")}` } }).then((res) => {
                    console.log('res', res)

                    useAccountStore.setState({ Transaction: res.data, Loading: false })

                }).catch(err => console.log('err', err))

            },
            isAuthenticated: (): any => {
                get().flag = false
                api.post("https://neobank-backend-aryasaksham-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/user/api/token/verify/", { token: get().token }).then((res) => {
                    // useAccountStore.setState({ Loading: true })
                    get().flag = true
                    console.log('heelo')
                }).catch((err) => {
                    get().flag = false
                })

                return get().flag
            }
        }))

)
useAccountStore.subscribe(console.log)


export default useAccountStore