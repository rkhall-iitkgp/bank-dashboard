import Navbar from "../navbar";
import { Group, Stack, Button, Image, Card, Text } from "@mantine/core";
import styled from "@emotion/styled";

const AccountSelect = styled(Group)`
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    padding: 0.8rem 1.2rem;
`

const CashCard = (props: { n: number, type: string }) => {
    const { n, type } = props;

    const bgc = type === "withdrawl" ? "#FFE5E4" : "#E8F6F0";
    const ffc = type === "withdrawl" ? "#D73331" : "#2CC578";
    const text = type === "withdrawl" ? "Large Cash Withdrawls" : "Large Cash Deposits";

    return (
        <Card radius={"lg"} w={180} style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
            <Card.Section h={50} bg={bgc} py={5}>
                <Text c={ffc} fw={500} mx={50} align="center" style={{ lineHeight: "1.3" }}>{text}</Text>
            </Card.Section>
            <Stack align="center" my={20}>
                <Text fz={25} c={ffc} fw={700}>{n}</Text>
                <Text c={"#4D4B4B"} fw={700} fz={14}>Set Limit</Text>
            </Stack>
        </Card>
    );
};

const TransactionCard = (props: { name: string, amount: number, method: string, category: string, date: string }) => {
    const { name, amount, method, category, date } = props;

    return (
        <Group style={{ borderRadius: "1rem" }}>
            <Stack>
                <Text c={"#4D4B4B"} fw={600}></Text>
                <Text fw={500} fz={10}></Text>
            </Stack>

            <Text c={"#0062D6"}>{amount}</Text>

            <Stack>
                <Text fw={600}>{method}</Text>
                <Text c={"#D56EEA"} fw={500}>{category}</Text>
            </Stack>
        </Group>
    )
}

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

                <Group px={10} style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: "2rem" }}>
                    <Stack mx={20} my={20}>
                        <Text c={"#7E7E7E"} fw={500}>Average EOD Balance</Text>
                        <Text fw={700} fz={28}>$1,23,456</Text>
                    </Stack>
                    <Stack w={80} ml={20}>
                        <Group bg={"#E8F6F0"} w={50} style={{ borderRadius: "0.4rem" }}>
                            <Text mx={15} c={"#2CC578"} fz={13} fw={600}>7.6%</Text>
                        </Group>
                        <Text c={"#7E7E7E"} fw={500} fz={13}>Compared to last 1 week</Text>
                    </Stack>
                </Group>

            </Stack>

            <Stack className="right-side">

            </Stack>
        </Group>
    </div>)
}

export default Dashboard;