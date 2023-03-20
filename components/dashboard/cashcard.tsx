import Navbar from "../navbar";
import { Group, Stack, Button, Image, Card, Text } from "@mantine/core";
import styled from "@emotion/styled";
import RecentTransactions from "./recenttransactions";

const CashCard = (props: { n: number, type: string }) => {
    const { n, type } = props;

    const bgc = type === "withdrawl" ? "#FFE5E4" : "#E8F6F0";
    const ffc = type === "withdrawl" ? "#D73331" : "#2CC578";
    const text = type === "withdrawl" ? "Large Cash Withdrawls" : "Large Cash Deposits";

    return (
        <Card radius={"lg"} w={180} style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
            <Card.Section h={50} bg={bgc} py={5}>
                <Text c={ffc} fw={500} ff="Montserrat" mx={40} align="center" style={{ lineHeight: "1.3" }}>{text}</Text>
            </Card.Section>
            <Stack align="center" my={15}>
                <Text fz={25} c={ffc} fw={700} style={{ lineHeight: 0.8 }}>{n}</Text>
                <Text c={"#4D4B4B"} ff="Montserrat" fw={700} fz={14} style={{ lineHeight: 0.5 }}>Set Limit</Text>
            </Stack>
        </Card>
    );
};

export default CashCard;