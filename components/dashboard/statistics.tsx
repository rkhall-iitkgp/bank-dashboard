import { Card, Stack, Group, Text, Button } from '@mantine/core'
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
import { useState } from 'react'
import ArticlesCard from './articlesCard'
import InsightCard from './insightCard'
import RecentTransactions from './recenttransactions'

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
      width={width}
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
  setSelection: Function,
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
              props.setSelection(parseInt(e?.target?.getAttribute('j')));
              props.setValue(parseInt(e?.target?.getAttribute('data:value')));
            },
          },
        },
        labels: props.legends,
        dataLabels: { style: { fontSize: '0.5rem' } },
        legend: { fontFamily: 'Montserrat', fontWeight: 500 },
      }}
      width={400}
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
const PieCategoryData = [
  { value: 25.6, mode: 'Entertainment' },
  { value: 32, mode: 'Food' },
  { value: 23.8, mode: 'Travel' },
  { value: 9.9, mode: 'Investments' },
  { value: 8.7, mode: 'Others' },
]
const PieModeData = [
  { value: 32, mode: 'Bank Transfer' },
  { value: 25.6, mode: 'UPI' },
  { value: 8.7, mode: 'Fund Transfer' },
  { value: 9.9, mode: 'Lorem Ipsum' },
  { value: 23.8, mode: 'Others' },
]
const TotalBalanceData = [
  { x: '05/06/2014', y: 5400.0 },
  { x: '05/07/2014', y: 2800.0 },
  { x: '05/08/2014', y: 3000.0 },
  { x: '05/09/2014', y: 3200.0 },
  { x: '05/10/2014', y: 4000.0 },
  { x: '05/11/2014', y: 4500.0 },
  { x: '05/12/2014', y: 5000.0 },
  { x: '05/13/2014', y: 4800.0 },
  { x: '05/14/2014', y: 4900.0 },
  { x: '05/15/2014', y: 5500.0 },
]
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
  const [modeIndex, setModeIndex] = useState(-1);
  const [catValue, setCatValue] = useState(-1);

  return (
    <Card
      radius={'lg'}
      style={{
        boxShadow: '0px 2px 40px rgba(0, 0, 0, 0.1)',
        maxHeight: '35rem',
        overflow: 'auto',
      }}
      ml={10}
    >
      {categoryIndex != -1 && (
        <Group mx={30}>
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
            Category: {`${PieCategoryData[categoryIndex].mode}` + ` (${catValue}%) `}
          </Text>
        </Group>
      )}
      <Group align={'flex-start'}>
        <Group px={15} py={15}>
          {categoryIndex == -1 && (
            <Stack>
              <Text mb={20} c={'#4D4B4B'} ff="Montserrat" fw={800} fz={30}>
                Financial Statistics
              </Text>
              <BalanceChart
                balanceData={TotalBalanceData}
                color="#008FFB"
                width={600}
              />
            </Stack>
          )}

          <Stack mt={20}>
            <SpendingDonut
              setSelection={setCategoryIndex}
              values={PieCategoryData.map((v) => v.value)}
              legends={PieCategoryData.map((v) => v.mode)}
              setValue={setCatValue}
            />
            {categoryIndex == -1 && (
              <SpendingDonut
                setSelection={setModeIndex}
                values={PieModeData.map((v) => v.value)}
                legends={PieModeData.map((v) => v.mode)}
                setValue={(v: number) => { }}
              />
            )}
            {categoryIndex != -1 && (
              <>
                <BalanceChart
                  balanceData={TotalBalanceData}
                  color="#00A76D"
                  width={580}
                />
                <MontlySpendingChart data={MontlySpendingData} />
              </>
            )}
          </Stack>
        </Group>

        {categoryIndex != -1 && (
          <Stack mx={40}>
            <div style={{ border: "1px solid rgb(131 131 131 / 30%)" }}>
              <RecentTransactions /></div>
            <InsightCard insights={InsightList} />
            <ArticlesCard articles={ArticlesData} />
          </Stack>
        )}
      </Group>
    </Card>
  )
}

export default FinancialStatistics
