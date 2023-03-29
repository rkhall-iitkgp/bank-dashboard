import { Button, Card, Group, Stack, Text } from '@mantine/core'
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
import { useEffect, useState } from 'react'
import useAccountStore from '../Store/Account'
import ArticlesCard from './articlesCard'
import InsightCard from './insightCard'
import RecentTransactions from './recenttransactions'
import RecentTransactionsRightPane from './recenttransactionsRightPane'

const BalanceChart = (props: {
  balanceData: { x: string; y: number }[]
  color: string
  width: number
}) => {
  const { balanceData, color, width } = props
  return typeof window === 'undefined' ? (
    <></>
  ) : (
    <ReactApexChart
      type="area"
      height={340}
      width={550}
      margin={'auto'}
      options={{
        fill: { colors: [color] },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', colors: [color] },
        chart: {
          type: 'area',
          zoom: { enabled: false },
          toolbar: { show: false },
        },
        xaxis: {
          type: 'datetime',
          title: {
            text: 'Date',
            style: {
              color: '#636363',
              fontFamily: 'Montserrat',
              fontWeight: 500,
              fontSize: '1rem',
            },
          },
          labels: {
            style: { fontFamily: 'Montserrat', fontWeight: 400 },
          },
        },
        yaxis: {
          opposite: true,
          title: {
            text: 'Total Balance',
            style: {
              color: '#636363',
              fontFamily: 'Montserrat',
              fontWeight: 500,
              fontSize: '0.9rem',
            },
          },
          labels: {
            style: {
              fontFamily: 'Montserrat',
              fontWeight: 400,
            },
          },
        },
      }}
      series={[{ name: '', data: balanceData }]}
    />
  )
}

const SpendingDonut = (props: {
  values: number[]
  legends: string[]
  setSelection: Function
  setValue: Function
}) => {
  return (
    <ReactApexChart
      series={props.values}
      type="donut"
      options={{
        chart: {
          type: 'donut',
          events: {
            dataPointSelection(e, chart, options) {
              props.setSelection(parseInt(e?.target?.getAttribute('j')))
              props.setValue(parseInt(e?.target?.getAttribute('data:value')))
            },
          },
        },
        labels: props.legends,
        dataLabels: { style: { fontSize: '0.3rem' } },
        legend: { fontFamily: 'Montserrat', fontWeight: 500 },
      }}
      width={350}
    />
  )
}

const MontlySpendingChart = (props: { data: { x: string; y: number }[] }) => {
  return (
    <ReactApexChart
      series={[{ data: props.data }]}
      width={500}
      height={250}
      type="bar"
      options={{
        chart: {
          type: 'bar',
          zoom: { enabled: false },
          toolbar: { show: false },
        },
        title: {
          text: 'Montly Spendings',
          style: { fontFamily: 'Montserrat', fontWeight: 700 },
        },
      }}
    />
  )
}
// const PieCategoryData = [
//   { value: 25.6, mode: 'Entertainment' },
//   { value: 32, mode: 'Food' },
//   { value: 23.8, mode: 'Travel' },
//   { value: 9.9, mode: 'Investments' },
//   { value: 8.7, mode: 'Others' },
// ]
// const PieModeData = [
//   { value: 32, mode: 'Bank Transfer' },
//   { value: 25.6, mode: 'UPI' },
//   { value: 8.7, mode: 'Fund Transfer' },
//   { value: 9.9, mode: 'Lorem Ipsum' },
//   { value: 23.8, mode: 'Others' },
// ]
// const TotalBalanceData = [
//   { x: '05/06/2014', y: 5400.0 },
//   { x: '05/07/2014', y: 2800.0 },
//   { x: '05/08/2014', y: 3000.0 },
//   { x: '05/09/2014', y: 3200.0 },
//   { x: '05/10/2014', y: 4000.0 },
//   { x: '05/11/2014', y: 4500.0 },
//   { x: '05/12/2014', y: 5000.0 },
//   { x: '05/13/2014', y: 4800.0 },
//   { x: '05/14/2014', y: 4900.0 },
//   { x: '05/15/2014', y: 5500.0 },
// ]
const MontlySpendingData = [
  { x: 'Apr', y: 400 },
  { x: 'May', y: 420 },
  { x: 'Jun', y: 440 },
  { x: 'Jul', y: 480 },
  { x: 'Aug', y: 530 },
  { x: 'Sep', y: 590 },
  { x: 'Oct', y: 690 },
  { x: 'Nov', y: 690 },
]

const InsightList = [
  'Your food spending increased by 15% last week.',
  'Cutting ₹20 per week on takeout can save ₹80 monthly.',
  'Monthly snack spending increased by 25%, switch to healthier and cost-effective options.',
  'Skipping weekly coffee runs can save up to ₹20 per month, brew at home or bring a travel mug.',
]
const ArticlesData = [
  '7 ways to save on your food budget',
  '12 ways to cut your food costs',
  'How to save money on snacks',
  '7 Simple Ways to Save Money on Coffee',
]

const FinancialStatistics = () => {
  const [categoryIndex, setCategoryIndex] = useState(-1)
  const [modeIndex, setModeIndex] = useState(-1)
  const [catValue, setCatValue] = useState(-1)
  const useAccount = useAccountStore();
  const [PieCategoryData, setpiecategorydata] = useState([{ mode: 'Entertainment', value: 50 }]);
  const [PieModeData, setpiemodedata] = useState([{ mode: 'UPI', value: 100 }]);
  const [TotalBalanceData, settotalbalancedata] = useState([{ x: '05/15/2014', y: 5500.0 }]);
  const [filteredBalanceData, setFilterBalanceData] = useState([{ x: '05/15/2014', y: 5500.0 }]);

  useEffect(() => {
    const transactions = useAccount.Transaction;
    let catlegends = new Set<string>();
    let catdata: { mode: string, value: number }[] = [];
    transactions.forEach(v => catlegends.add(v.category))

    catlegends.forEach(k => {
      let total = 0;
      transactions.filter(x => x.category === k).forEach(x => { total += x.credit - x.debit })
      catdata.push({ mode: k, value: total });
    })

    setpiecategorydata(catdata);
  }, [useAccount.Transaction])

  useEffect(() => {
    const transactions = useAccount.Transaction;
    let modelegends = new Set<string>();
    let modedata: { mode: string, value: number }[] = [];
    transactions.forEach(v => modelegends.add(v.mode))

    modelegends.forEach(k => {
      let total = 0;
      transactions.filter(x => x.mode === k).forEach(x => { total += x.credit - x.debit })
      modedata.push({ mode: k, value: total });
    })

    setpiemodedata(modedata);
  }, [useAccount.Transaction])

  useEffect(() => {
    const transactions = useAccount.Transaction;
    let datelegends = new Set<string>();
    let datedata: { x: string, y: number }[] = [];
    transactions.forEach(v => datelegends.add(v.date))

    let total = 0;
    datelegends.forEach(k => {
      console.log(k)
      transactions.filter(x => x.date === k).forEach(x => { total += x.credit - x.debit })
      datedata.push({ x: k, y: total });
    })

    datedata.sort((a, b) => {
      let A = new Date(a.x);
      let B = new Date(b.x);
      return A > B ? 1 : -1
    })

    settotalbalancedata(datedata);
    // console.log(`date data = ${datedata[0].y}`)
  }, [useAccount.Transaction])

  useEffect(() => {
    const transactions = useAccount
      .Transaction
      .filter(v => PieCategoryData[categoryIndex !== -1 ? categoryIndex : 0].mode == v.category);
    let datelegends = new Set<string>();
    let datedata: { x: string, y: number }[] = [];
    transactions.forEach(v => datelegends.add(v.date))

    let total = 0;
    datelegends.forEach(k => {
      console.log(k)
      transactions.filter(x => x.date === k).forEach(x => {
        // console.log(`credi = ${x.credit} debit ${x.debit}`)
        total += x.credit - x.debit
      })
      datedata.push({ x: k, y: total });
    })

    datedata.sort((a, b) => {
      let A = new Date(a.x);
      let B = new Date(b.x);
      return A > B ? 1 : -1
    })

    setFilterBalanceData(datedata);
    // console.log(`date data = ${datedata[0].y}`)
  }, [categoryIndex])

  return (
    <Card
      // radius={'lg'}
      style={{
        boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.1)',
      }}
      mr={15}
    >
      <Card.Section>
        {categoryIndex != -1 && (
          <Group mx={30} mt={25}>
            <Button
              radius={'xl'}
              variant="gradient"
              gradient={{ from: '#0062D6', to: '#0062D6' }}
              onClick={() => setCategoryIndex(-1)}
              px={35}
              ff="Montserrat"
              fw={500}
            >
              Back
            </Button>
            <Text mx={20} c={'#4D4B4B'} ff="Montserrat" fz={28} fw={800}>
              Category:{' '}
              {`${PieCategoryData[categoryIndex].mode}` + ` (${catValue}%) `}
            </Text>
          </Group>
        )}

        {categoryIndex == -1 && (
          <Text mx={30} mt={25} c={'#4D4B4B'} ff="Montserrat" fw={800} fz={30}>
            Financial Statistics
          </Text>
        )}
      </Card.Section>

      <Group
        align={'flex-start'}
        style={{
          flex: 1,
          maxHeight: '44vh',
          overflow: 'auto',
          margin: 'auto',
        }}
      >
        {categoryIndex == -1 && (
          <BalanceChart
            balanceData={TotalBalanceData}
            color="#008FFB"
            width={450}
          />
        )}
        <Stack style={{ flex: 1 }} align="center">
          <SpendingDonut
            setSelection={setCategoryIndex}
            values={PieCategoryData?.map((v) => v.value)}
            legends={PieCategoryData?.map((v) => v.mode)}
            setValue={setCatValue}
          />
          {categoryIndex == -1 && (
            <SpendingDonut
              setSelection={setModeIndex}
              values={PieModeData?.map((v) => v.value)}
              legends={PieModeData?.map((v) => v.mode)}
              setValue={(v: number) => { }}
            />
          )}
          {categoryIndex != -1 && (
            <>
              <BalanceChart
                balanceData={filteredBalanceData}
                color="#00A76D"
                width={450}
              />
              <MontlySpendingChart data={MontlySpendingData} />
            </>
          )}
        </Stack>

        {categoryIndex != -1 && (
          <Stack mx={10} style={{ flex: 3 }} styles={{ maxHeight: '25rem' }}>
            <div
              style={{
                // border: "1px solid rgb(131 131 131 / 30%)",
                borderRadius: '1rem',
                padding: '1px',
                boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <RecentTransactions transactions={
                useAccount.Transaction.filter(v => PieCategoryData[categoryIndex !== -1 ? categoryIndex : 0].mode == v.category)} />
            </div>

            <InsightCard insights={InsightList} />
            <ArticlesCard articles={ArticlesData} />
          </Stack>
        )}
      </Group>
    </Card>
  )
}

export default FinancialStatistics
