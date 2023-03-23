import Navbar from "../home/navbar/navbar";
import { Group, Stack, Button, Image, Card, Text } from "@mantine/core";
import styled from "@emotion/styled";
import RecentTransactions from "./recenttransactions";
import CashCard from "./cashcard";
import EodBalance from "./eodBalance";
import { TotalBalance } from "./TotalBalance";
import { FinancialRatios } from "./FinancialRatios";
import { createStyles } from '@mantine/core'
const useStyles = createStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: `30% 70%`,
    },
    leftContainer: {
        margin:`15px`,
        display: "flex",
        flexDirection: "column",
    },
    rightContainer: {
     
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "space-around",
    },
    rightMainContainer: {
        // margin:`18px`,
        // marginTop: "70px",
        display: "flex",
        flexDirection: "row",
        position: "relative",
        justifyContent: "space-around",
    },
   
}))
const AccountSelect = styled(Group)`
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    padding: 0.8rem 1.2rem;
`

const Dashboard = () => {
    const { classes } = useStyles()
    return (<div >
        <Navbar />
        <div className={classes.container}>
            <div className={classes.leftContainer}>
                <Group my={10} style={{ justifyContent: "space-between" }}>
                    <Card h={50} w={50} bg={"#0062D6"} p={10} radius={50} ml={15}>
                        <Image src={"icons/filter.png"} my="auto" />
                    </Card>
                    <AccountSelect>
                        <Image src={"icons/sbilogo.png"} height={"28px"} width={"28px"} />
                        <Text c={"#7E7E7E"}>**** 3241 ▼</Text>
                    </AccountSelect>
                </Group>

                <Group style={{ justifyContent: "space-between" }}>
                    <CashCard n={5} type={"deposit"} />
                    <CashCard n={10} type={"withdrawl"} />
                </Group>

                <EodBalance balance="₹1,23,456" comparision={4.6} />

                <RecentTransactions />
            </div>
            <span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `700`,
                    fontSize: `36px`,
                    top:`5px`,
                    lineHeight: `44px`,
                    margin:`15px`,
                }}>Welcome Back,</span> <span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `700`,
                    fontSize: `36px`,
                    top:`5px`,
                    lineHeight: `44px`,
                    // margin:`15px`,
                    color:`#0062D6`

                }}>Bill Gates!</span>
            <div className={classes.rightContainer}>
                    <div>
                  
                    </div>
                    <div className={classes.rightMainContainer}>
                    <TotalBalance />
                    <FinancialRatios />
                    </div>
                   
            </div>
        </div>
    </div>
    )
}

export default Dashboard;
