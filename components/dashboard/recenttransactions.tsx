import { Card, Text, Group, Stack, HoverCard } from "@mantine/core";

const palette = ['#D56EEA', '#26DD76', '#FFAA57', '#4198FF']

var transactions = [
    {
        description: 'Jesse Pinkman Johnson',
        date: '19 March, 2023, 17:10',
        credit: 100,
        debit: 0,
        mode: 'UPI',
        category: 'Entertainment',
    },
    {
        description: 'Jesse Pinkman Johnson',
        date: '19 March, 2023, 17:10',
        credit: 0,
        debit: 200,
        mode: 'UPI',
        category: 'Food',
    },
    {
        description: 'Heisenberg',
        date: '19 March, 2023, 18:10',
        credit: 0,
        debit: 1000,
        mode: 'Bank',
        category: 'Travel',
    },
    {
        description: 'Spotify',
        date: '19 March, 2023, 17:20',
        credit: 59,
        debit: 0,
        mode: 'UPI',
        category: 'Travel',
    },
    {
        description: 'Spotify',
        date: '19 March, 2023, 17:30',
        credit: 59,
        debit: 0,
        mode: 'UPI',
        category: 'Travel',
    },
    {
        description: 'Spotify',
        date: '19 March, 2023, 15:10',
        credit: 59,
        debit: 0,
        mode: 'UPI',
        category: 'Travel',
    },
    {
        description: 'Spotify',
        date: '19 March, 2023, 17:50',
        credit: 59,
        debit: 0,
        mode: 'UPI',
        category: 'Travel',
    },
]

const TransactionCard = (props: { data: { description: string, date: string, credit: number, debit: number, mode: string, category: string } }) => {
    const { data } = props;
    var dict = data.credit != 0
        ? { color: '#0062D6', amount: data.credit, sign: '+' }
        : { color: '#4D4B4B', amount: data.debit, sign: '-' }

    var paletteIndex = Math.floor(Math.random() * 4)
    var descriptionShort = data.description.substring(0, 12)
    if (data.description.length > 12) descriptionShort += '...'

    return (<Card radius={"lg"} shadow="0px 4px 20px rgba(0, 0, 0, 0.1)" my={10} py={20}>
        <Group px={10} style={{ justifyContent: "space-between" }}>
            <Stack>
                <HoverCard>
                    <HoverCard.Target>
                        <Text fw={600} fz={19} c="#4D4B4B" ff={"Montserrat"} style={{ lineHeight: 0.5 }}>{descriptionShort}</Text>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text fw={600} fz={12} c="#838383" ff={"Montserrat"} style={{ lineHeight: 0.5 }}>{data.description}</Text>
                    </HoverCard.Dropdown>
                </HoverCard>
                <Text c="#656565" fw={500} fz={13} ff={"Montserrat"} style={{ lineHeight: 0.5 }}>{data.date}</Text>
            </Stack>

            <Text c={dict.color} fw={500} fz={18} mx={13} ff={"Montserrat"}>{dict.sign}&#8377;{dict.amount}</Text>

            <Stack style={{ alignItems: "center", width: "110px" }}>
                <Text ff={"Montserrat"} c={"#4D4B4B"} fw={600} style={{ lineHeight: 0.5, margin: "auto" }}>{data.mode}</Text>
                <Text ff={"Montserrat"} style={{ lineHeight: 0.5 }} c={palette[paletteIndex]}>{data.category}</Text>
            </Stack>
        </Group>
    </Card>)
}

const RecentTransactions = () => {
    return (<div>
        <Text ff={"Montserrat"} c="#0062D6" fw={700} mt={20} fz={22}>Recent Transactions</Text>
        <div style={{ maxHeight: "23rem", overflow: "auto" }}>
            {transactions.map((t) => <TransactionCard data={t} />)}
        </div>
    </div>)
}

export default RecentTransactions;