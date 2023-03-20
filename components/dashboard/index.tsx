import Navbar from "../navbar";
import { Group, Stack, Button, Image, Card, Text } from "@mantine/core";
import styled from "@emotion/styled";
import RecentTransactions from "./recenttransactions";
import CashCard from "./cashcard";

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

                <Group px={10} bg="#FFF" py={5} style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: "2rem" }}>
                    <Stack mx={20} my={20}>
                        <Text c={"#7E7E7E"} fw={500} ff="Montserrat" style={{ lineHeight: 0.5 }}>Average EOD Balance</Text>
                        <Text fw={700} fz={28} ff="Montserrat" style={{ lineHeight: 0.8 }}>$1,23,456</Text>
                    </Stack>
                    <Stack w={80} ml={20} style={{ justifyContent: "space-around" }}>
                        <Group bg={"#E8F6F0"} w={50} style={{ borderRadius: "0.4rem" }}>
                            <Text mx={15} c={"#2CC578"} ff="Montserrat" fz={13} fw={600}>7.6%</Text>
                        </Group>
                        <Text c={"#7E7E7E"} fw={500} fz={12} ff="Montserrat" style={{ lineHeight: 1.3 }}>Compared to last 1 week</Text>
                    </Stack>
                </Group>

                <RecentTransactions />
            </Stack>

            <Stack className="right-side">

            </Stack>
        </Group>
    </div>)
}

export default Dashboard;