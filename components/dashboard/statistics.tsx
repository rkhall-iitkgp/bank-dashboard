import { Card, Stack, Group, Text, Button } from "@mantine/core"
import ApexCharts from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import ArticlesCard from "./articlesCard";
import InsightCard from "./insightCard";
import RecentTransactions from "./recenttransactions";


const BalanceChart = (props: { balanceData: { x: string, y: number }[], color: string, width: number }) => {
    const { balanceData, color, width } = props;
    return (
        <ReactApexChart type="area" height={340} width={width} options={{
            fill: { colors: [color] },
            dataLabels: { enabled: false },
            stroke: { curve: "smooth", colors: [color] },
            chart: { type: "area", zoom: { enabled: false }, toolbar: { show: false } },
            xaxis: {
                type: "datetime", title: {
                    text: "Date", style: {
                        color: "#636363",
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "1rem"
                    }
                }, labels: {
                    style: { fontFamily: "Montserrat", fontWeight: 400 }
                }
            },
            yaxis: {
                opposite: true, title: {
                    text: "Total Balance", style: {
                        color: "#636363",
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                    },
                },
                labels: {
                    style: {
                        fontFamily: "Montserrat",
                        fontWeight: 400
                    }
                }
            }
        }} series={[{ name: "", data: balanceData }]} />
    )
};

const TotalSpendingChart = (props: { values: number[], legends: string[] }) => {
    return (
        <ReactApexChart series={props.values} type="donut" options={{
            chart: {
                type: "donut"
            },
            labels: props.legends,
            dataLabels: { style: { fontSize: "0.5rem" } },
            legend: { fontFamily: "Montserrat", fontWeight: 500 },
        }} width={400} />
    )
};

const MontlySpendingChart = (props: { data: { x: string, y: number }[] }) => {
    return (
        <ReactApexChart series={[{ data: props.data }]} width={500} height={250} type="bar" options={{
            chart: {
                type: "bar", zoom: { enabled: false }, toolbar: { show: false },
            },
            title: {
                text: "Montly Spendings",
                style: { fontFamily: "Montserrat", fontWeight: 700 }
            }
        }} />
    )
}
const PieModeData = [
    { value: 25.6, mode: "Entertainment" },
    { value: 32, mode: "Food" },
    { value: 23.8, mode: "Travel" },
    { value: 9.9, mode: "Investments" },
    { value: 8.7, mode: "Others" },
];
const PieCategoryData = [
    { value: 32, mode: "Bank Transfer" },
    { value: 25.6, mode: "UPI" },
    { value: 8.7, mode: "Fund Transfer" },
    { value: 9.9, mode: "Lorem Ipsum" },
    { value: 23.8, mode: "Others" },
];
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
];
const MontlySpendingData = [
    { x: "Apr", y: 400 },
    { x: "May", y: 420 },
    { x: "Jun", y: 440 },
    { x: "Jul", y: 480 },
    { x: "Aug", y: 530 },
    { x: "Sep", y: 590 },
    { x: "Oct", y: 690 },
    { x: "Nov", y: 690 },
];
const InsightList = [
    "Your food spending increased by 15% last week.",
    "Cutting ₹20 per week on takeout can save ₹80 monthly.",
    "Monthly snack spending increased by 25%, switch to healthier and cost-effective options.",
    "Skipping weekly coffee runs can save up to ₹20 per month, brew at home or bring a travel mug."
];
const ArticlesData = [
    "7 ways to save on your food budget",
    "12 ways to cut your food costs",
    "How to save money on snacks",
    "7 Simple Ways to Save Money on Coffee"
]

const FinancialStatistics = () => {
    const [showCat, setShowCat] = useState(false);
    const [category, setCategory] = useState("Food")

    return (<Card radius={"lg"} style={{ boxShadow: "0px 2px 40px rgba(0, 0, 0, 0.1)", maxHeight: "35rem", overflow: "auto" }} ml={20}>
        {showCat && <Group mx={40}>
            <Button radius={"xl"} variant="gradient" gradient={{ from: '#0062D6', to: '#0062D6' }} onClick={() => setShowCat(false)} px={35}>Back</Button>
            <Text mx={20} c={"#4D4B4B"} ff="Montserrat" fz={28} fw={800}>Category: {category} {"(32%)"}</Text>
        </Group>}
        <Group align={"flex-start"}>

            <Group px={15} py={15}>
                {!showCat &&
                    <Stack>
                        <Text mb={20} c={"#4D4B4B"} ff="Montserrat" fw={800} fz={30}>Financial Statistics</Text>
                        <BalanceChart balanceData={TotalBalanceData} color="#008FFB" width={600} />
                    </Stack>}

                <Stack mt={20}>
                    <TotalSpendingChart values={PieModeData.map(v => v.value)} legends={PieModeData.map(v => v.mode)} />
                    {!showCat &&
                        <TotalSpendingChart values={PieCategoryData.map(v => v.value)} legends={PieCategoryData.map(v => v.mode)} />}
                    {showCat && <>
                        <BalanceChart balanceData={TotalBalanceData} color="#00A76D" width={580} />
                        <MontlySpendingChart data={MontlySpendingData} />
                    </>}
                </Stack>
            </Group>

            {showCat &&
                <Stack mx={40}>
                    <RecentTransactions />
                    <InsightCard insights={InsightList} />
                    <ArticlesCard articles={ArticlesData} />
                </Stack>}
        </Group>
        {/* {!showCat && */}
        {/* <Button onClick={() => setShowCat(!showCat)}>Click ME</Button>} */}
    </Card >)
}

export default FinancialStatistics;