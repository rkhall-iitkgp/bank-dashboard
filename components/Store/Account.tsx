
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
            id: '',
            balance: 0
        }],
        Loading: false,
        flag: true,
        uploaded: true,
        DTI_ratio: 0,
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
            isAuthenticated: async () => {
                api.post("https://neobank-backend-aryasaksham-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/user/api/token/verify/", { token: get().token }).then((res) => {
                    // useAccountStore.setState({ Loading: true })
                    useAccountStore.setState({ flag: true })

                    console.log('heelo')
                }).catch((err) => {
                    useAccountStore.setState({ flag: false })
                    console.log('hell')
                })

            }
        }))

)
// useAccountStore.subscribe(console.log)


export default useAccountStore