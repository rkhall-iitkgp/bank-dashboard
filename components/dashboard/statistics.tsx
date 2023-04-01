import { Button, Card, Group, Select, Stack, Text } from '@mantine/core'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import useAccountStore from '../Store/Account'
import ArticlesCard from './articlesCard'
import InsightCard from './insightCard'
import RecentTransactions from './recenttransactions'
import RecentTransactionsRightPane from './recenttransactionsRightPane'
import SetCategoryLimit from './setLimitCategory'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

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
  setColor: Function
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
              props.setColor(e?.target?.getAttribute('fill'))
            },
          },
        },
        labels: props.legends,
        dataLabels: { style: { fontSize: '0.3rem' } },
        legend: { fontFamily: 'Montserrat', fontWeight: 500 },
      }}
      width={400}
    />
  )
}

const MontlySpendingChart = (props: { data: { x: string; y: number }[], name: string }) => {
  return (
    <ReactApexChart
      series={[{ data: props.data, name: props.name }]}
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

const WeeklySpendingChart = (props: { data: { x: string; y: number }[], name: string }) => {
  return (
    <ReactApexChart
      series={[{ data: props.data, name: props.name }]}
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
          text: 'Weekly Spendings',
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
  { x: 'Apr', y: 0 },
  { x: 'May', y: 0 },
  { x: 'Jun', y: 0 },
  { x: 'Jul', y: 0 },
  { x: 'Aug', y: 0 },
  { x: 'Sep', y: 0 },
  { x: 'Oct', y: 0 },
  { x: 'Nov', y: 0 },
]

const WeeklySpendingData = {
  Jan: [{ y: 0, x: '1' }],
  Feb: [{ y: 0, x: '1' }],
  Mar: [{ y: 0, x: '1' }],
  Apr: [{ y: 0, x: '1' }],
  May: [{ y: 0, x: '1' }],
  Jun: [{ y: 0, x: '1' }],
  Jul: [{ y: 0, x: '1' }],
  Aug: [{ y: 0, x: '1' }],
  Sep: [{ y: 0, x: '1' }],
  Oct: [{ y: 0, x: '1' }],
  Nov: [{ y: 0, x: '1' }],
  Dec: [{ y: 0, x: '1' }],
}

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
  const [catValue, setCatValue] = useState(-1)
  const [balanceColor, setBalanceColor] = useState('#00A76D');
  const useAccount = useAccountStore();
  const [PieCategoryData, setpiecategorydata] = useState<{ mode: string, value: number }[]>([]);
  const [PieModeData, setpiemodedata] = useState<{ mode: string, value: number }[]>([]);
  const [TotalBalanceData, settotalbalancedata] = useState<{ x: string, y: number }[]>([]);
  const [filteredBalanceData, setFilterBalanceData] = useState<{ x: string, y: number }[]>([]);
  const transactions = useAccount.Transaction;
  const [filteredTransactions, setFilteredTransaction] = useState(transactions);
  const [modTotal, setModTotal] = useState(0);
  const [filterTotal, setFilterTotal] = useState(0);
  const [montlyData, setMontlyData] = useState(MontlySpendingData);
  const [isWeekly, setIsWeekly] = useState(false);
  const [weeklyData, setWeeklyData] = useState(WeeklySpendingData);
  const [selectedMonth, setSelectedMonth] = useState<string | null>('Jan');

  useEffect(() => {
    let catlegends = new Set<string>();
    let catdata: { mode: string, value: number }[] = [];
    transactions.forEach(v => catlegends.add(v.category))
    let modt = 0;
    // transactions.filter(v => v.debit > 0).forEach(v => modt += v.debit)
    catlegends.forEach(k => {
      if (k) {
        let total = 0;
        transactions.filter(x => x.category === k).filter(v => v.debit > 0).forEach(x => { total += x.debit })
        catdata.push({ mode: k, value: total });
        modt += total
      }
    })
    setModTotal(modt);
    setpiecategorydata(catdata);
  }, [useAccount.Transaction])

  useEffect(() => {
    let modelegends = new Set<string>();
    let modedata: { mode: string, value: number }[] = [];
    transactions.forEach(v => modelegends.add(v.mode))

    modelegends.forEach(k => {
      let total = 0;
      transactions.filter(x => x.mode === k).forEach(x => { total += x.credit - x.debit })
      modedata.push({ mode: k, value: total });
    })

    // console.log(`modedata = ${modedata[0].value}`)
    setpiemodedata(modedata);
  }, [useAccount.Transaction])

  useEffect(() => {
    let datelegends = new Set<string>();
    let datedata: { x: string, y: number }[] = [];
    transactions.forEach(v => datelegends.add(v.date))

    let dateslist = Array.from(datelegends);

    dateslist.sort((a, b) => {
      let A = new Date(a);
      let B = new Date(b);
      return A > B ? 1 : -1
    })

    dateslist.forEach(k => {
      let datefiltered = transactions.filter(x => x.date === k)
      // datefiltered.sort((a, b) => {
      //   let A = new Date(a.date);
      //   let B = new Date(b.date);
      //   return A > B ? 1 : -1
      // })
      // .forEach(x => { total += x.credit - x.debit })
      console.log(`x = ${k} y = ${datefiltered.at(-1)?.balance}`)
      datedata.push({ x: k, y: datefiltered.at(-1)?.balance || 0 });
    })

    settotalbalancedata(datedata);
    // console.log(`date data = ${datedata[0].y}`)
  }, [useAccount.Transaction])

  useEffect(() => {
    const newfilteredTransactions = transactions
      .filter(v => PieCategoryData[categoryIndex !== -1 ? categoryIndex : 0]?.mode === v.category).filter(v => v.debit > 0);
    setFilteredTransaction(JSON.parse(JSON.stringify(newfilteredTransactions)));
    console.log('filteredTransactions', newfilteredTransactions)
    let datelegends = new Set<string>();
    let datedata: { x: string, y: number }[] = [];
    newfilteredTransactions.forEach(v => datelegends.add(v.date))
    let dateslist = Array.from(datelegends);

    let totaltal = 0
    dateslist.forEach(k => {
      let total = 0;
      console.log(k)
      newfilteredTransactions.filter(x => x.date === k).forEach(x => {
        total += x.debit
      })
      datedata.push({ x: k, y: total });
      totaltal += total
    })

    setFilterTotal(Math.abs(totaltal));
    setFilterBalanceData(datedata);
  }, [categoryIndex])

  useEffect(() => {
    const montNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const filteredTransactions = transactions
      .filter(v => PieCategoryData[categoryIndex !== -1 ? categoryIndex : 0]?.mode === v.category).filter(v => v.debit > 0);
    const Months = new Set<number>();
    let MonthData: { x: string, y: number }[] = [];
    filteredTransactions.forEach(v => {
      let A = new Date(v.date);
      Months.add(A.getMonth());
    })

    Months.forEach(v => {
      let total = 0;
      filteredTransactions.filter(x => {
        let a = new Date(x.date);
        return a.getMonth() === v
      }).forEach(v => total += v.debit)
      MonthData.push({ x: montNames[v], y: Math.abs(total) })
    })

    setMontlyData(MonthData);

  }, [categoryIndex])

  useEffect(() => {
    const montNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const filteredTransactions = transactions
      .filter(v => PieCategoryData[categoryIndex !== -1 ? categoryIndex : 0]?.mode === v.category).filter(v => v.debit > 0);
    let weekData = { Jan: [], Feb: [], Mar: [], Apr: [], May: [], Jun: [], Jul: [], Aug: [], Sep: [], Oct: [], Nov: [], Dec: [] };
    for (let i = 0; i < 12; i++) {
      let data: { x: string, y: number }[] = [];
      let thismonthtr = filteredTransactions.filter(v => {
        let A = new Date(v.date);
        return A.getMonth() == i;
      })
      for (let j = 0; j < 5; j++) {
        let total = 0;
        thismonthtr.filter(v => {
          let A = new Date(v.date);
          return Math.floor(A.getDate() / 7) == j;
        }).forEach(v => total += v.debit)
        data.push({ x: (j + 1).toString(), y: total })
      }
      weekData[montNames[i]] = data;
    }

    setWeeklyData(weekData);
    console.log(weekData);
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
              {`${PieCategoryData[categoryIndex].mode}` + ` (${Math.round((filterTotal / modTotal) * 100)}%) `}
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
        align={'center'}
        style={{
          flex: 1,
          maxHeight: '53vh',
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
        <Stack style={{ flex: 2 }} align="center">
          <SpendingDonut setColor={setBalanceColor}
            setSelection={setCategoryIndex}
            values={PieCategoryData?.map((v) => v.value)}
            legends={PieCategoryData?.map((v) => v.mode)}
            setValue={setCatValue}
          />
          {categoryIndex == -1 && (
            <SpendingDonut setColor={() => { }}
              setSelection={() => { }}
              values={PieModeData?.map((v) => v.value)}
              legends={PieModeData?.map((v) => v.mode)?.map(v => {
                if (v === "1") {
                  return "UPI"
                } else {
                  return "Bank Transfer"
                }
              })}
              setValue={(v: number) => { }}
            />
          )}
          {categoryIndex != -1 && (
            <>
              <SetCategoryLimit category={PieCategoryData[categoryIndex]?.mode || ''} />
              <BalanceChart
                balanceData={filteredBalanceData}
                color={balanceColor}
                width={550}
              />
              <Group>
                {!isWeekly && <MontlySpendingChart data={montlyData} name={PieCategoryData[categoryIndex].mode} />}
                {isWeekly && <WeeklySpendingChart data={weeklyData[selectedMonth || 'Feb']} name={PieCategoryData[categoryIndex].mode} />}

                <Stack style={{ flex: 1, justifyContent: 'flex-start' }}>
                  {isWeekly && <Stack>
                    <Text fz={13} c={"#636363"} ff="Montserrat">Select Month</Text>
                    <Select data={[
                      { value: 'Jan', label: 'January' },
                      { value: 'Feb', label: 'February' },
                      { value: 'Mar', label: 'March' },
                      { value: 'Apr', label: 'April' },
                      { value: 'May', label: 'May' },
                      { value: 'Jun', label: 'June' },
                      { value: 'Jul', label: 'July' },
                      { value: 'Aug', label: 'August' },
                      { value: 'Sep', label: 'September' },
                      { value: 'Oct', label: 'October' },
                      { value: 'Nov', label: 'Noveber' },
                      { value: 'Dec', label: 'December' },
                    ]} value={selectedMonth} onChange={setSelectedMonth} unselectable={'off'} />
                  </Stack>}
                  <Text fz={13} c={"#636363"} ff="Montserrat">See Spendings By</Text>
                  <Button size={"xs"} radius={'xl'} w={100} style={{
                    backgroundColor: isWeekly ? '#0062D6' : '#FFF',
                    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',
                    color: isWeekly ? '#FFF' : '#0062D6'
                  }} onClick={() => setIsWeekly(true)}>Weekly</Button>
                  <Button size={'xs'} radius={'xl'} w={100} style={{
                    backgroundColor: isWeekly ? '#FFF' : '#0062D6',
                    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',
                    color: isWeekly ? '#0062D6' : '#FFF'
                  }} onClick={() => setIsWeekly(false)}>Montly</Button>
                </Stack>
              </Group>
            </>
          )}
        </Stack>

        {categoryIndex != -1 && (
          <Stack mx={10} style={{ flex: 1.5 }} styles={{ maxHeight: '25rem' }}>
            <div
              style={{
                // border: "1px solid rgb(131 131 131 / 30%)",
                borderRadius: '1rem',
                padding: '1px',
                boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <RecentTransactions transactions={filteredTransactions} />
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
