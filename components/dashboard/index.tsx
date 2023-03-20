import Navbar from "../navbar";
import { Group, Stack, Button, Image, Card, Text } from "@mantine/core";
import styled from "@emotion/styled";
import RecentTransactions from "./recenttransactions";
import CashCard from "./cashcard";
import EodBalance from "./eodBalance";

const AccountSelect = styled(Group)`
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    padding: 0.8rem 1.2rem;
`

const Dashboard = () => {
    return (<div>
        <Navbar />

        <Group className="dashboard-group">
            <Stack className="left-side" mx={20}>
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

                <EodBalance balance="$1,23,456" comparision={4.6} />

                <RecentTransactions />
            </Stack>

            <Stack className="right-side">

            </Stack>
        </Group>
    </div>)
}

export default Dashboard;