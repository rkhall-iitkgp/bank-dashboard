import { Card, Stack, Group, Text, Button } from "@mantine/core"
import ApexCharts from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
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

const SpendingChart = (props: { values: number[], legends: string[] }) => {
    return (
        <ReactApexChart series={props.values} type="donut" options={{
            chart: {
                type: "donut",
            },
            labels: props.legends,
            dataLabels: { style: { fontSize: "0.5rem" } },
            legend: { fontFamily: "Montserrat", fontWeight: 500 },
        }} width={400} />
    )
}

const FinancialStatistics = () => {
    const [showCat, setShowCat] = useState(false);
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
    return (<Card radius={"lg"} style={{ boxShadow: "0px 2px 40px rgba(0, 0, 0, 0.1)" }} ml={20}>
        <Group align={"flex-start"}>
            <Group px={15} py={15}>
                {!showCat &&
                    <Stack>
                        <Text mb={20} c={"#4D4B4B"} ff="Montserrat" fw={800} fz={30}>Financial Statistics</Text>
                        <BalanceChart balanceData={TotalBalanceData} color="#008FFB" width={600} />
                    </Stack>}

                <Stack>
                    <SpendingChart values={PieModeData.map(v => v.value)} legends={PieModeData.map(v => v.mode)} />
                    {!showCat &&
                        <SpendingChart values={PieCategoryData.map(v => v.value)} legends={PieCategoryData.map(v => v.mode)} />}
                    {showCat && <BalanceChart balanceData={TotalBalanceData} color="#00A76D" width={580} />}
                </Stack>
            </Group>
            {showCat &&
                <Stack>
                    <RecentTransactions />
                </Stack>}

        </Group>
        <Button onClick={() => setShowCat(!showCat)}>Click ME</Button>
    </Card >)
}

export default FinancialStatistics;