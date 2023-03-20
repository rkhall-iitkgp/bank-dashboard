import styled from '@emotion/styled'

const Container = styled('div')`
    height: 350px;
    max-height: 350px;
    width: 400px;
    background: #F4F4F4;
    display: flex;
    flex-direction: column;
    margin: auto;
`

const Header = styled('div')`
    width: 250px;
    height: 30px;
    flex:1;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    color: #0062D6;
    //margin-left: 10px;
    margin: auto;
`
const BodyContent = styled('div')`
    width: 100%;
    height: 250px;
    flex: 6;
    background: inherit;
    //margin-top: 20px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 10px;
    gap: 10px;
`
const Card = styled('div')`
    width: 90%;
    min-height: 60px;
    border-radius: 15px;
    background: #FFFFFF;
    margin: auto;
    display: flex;
    flex-direction: row; 
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    position: relative;
`
const Col = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content:center;
    //padding-left: 10px;
    //align-items: center;
`

const DescriptionFull = styled('div')`
    //width: 150px;
    height: 20px;
    background: #FFFFFF;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-size: 10.5px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 48px;
    color: #838383;
    padding: 2px 5px;
    //display: none;
`

const DescriptionShort = styled('div')`
    font-size: 16px;
    color:#4D4B4B;
`

var transactions =[
    {
        'description' : 'Jesse Pinkman Johnson',
        'date' : '19 March, 2023, 17:10',
        'credit': 100,
        'debit' : 0,
        'mode': 'UPI',
        'category': 'Entertainment'
    },
    {
        'description' : 'Jesse Pinkman Johnson',
        'date' : '19 March, 2023, 17:10',
        'credit': 0,
        'debit' : 200,
        'mode': 'UPI',
        'category': 'Food'
    },
    {
        'description' : 'Heisenberg',
        'date' : '19 March, 2023, 17:10',
        'credit': 0,
        'debit' : 1000,
        'mode': 'Bank',
        'category': 'Travel'
    },
    {
        'description' : 'Spotify',
        'date' : '19 March, 2023, 17:10',
        'credit': 59,
        'debit' : 0,
        'mode': 'UPI',
        'category': 'Travel'
    },
    {
        'description' : 'Spotify',
        'date' : '19 March, 2023, 17:10',
        'credit': 59,
        'debit' : 0,
        'mode': 'UPI',
        'category': 'Travel'
    },
    {
        'description' : 'Spotify',
        'date' : '19 March, 2023, 17:10',
        'credit': 59,
        'debit' : 0,
        'mode': 'UPI',
        'category': 'Travel'
    },
    {
        'description' : 'Spotify',
        'date' : '19 March, 2023, 17:10',
        'credit': 59,
        'debit' : 0,
        'mode': 'UPI',
        'category': 'Travel'
    },

]

const palette =['#D56EEA','#26DD76', '#FFAA57', '#4198FF']

const RecentTransactions = ()=>{
    return (
        <Container>
            <Header>
                Recent Transactions
            </Header>
            <BodyContent>
                {
                    transactions.map((transaction)=>{

                        var dict = (transaction.credit!=0)? 
                               { color:'#0062D6', amount:transaction.credit, sign:'+'} : 
                               { color:'#4D4B4B', amount:transaction.debit, sign:'-'}; 
                
                        var paletteIndex = Math.floor(Math.random() * 4);
                        var descriptionShort = transaction.description.substring(0,12);
                        if(transaction.description.length>12)
                        descriptionShort+='...';
                        return (
                            <Card>
                                <Col style={{flex:'4', paddingLeft: '10px'}}>
                                    <DescriptionShort>
                                        {descriptionShort}
                                    </DescriptionShort>
                                    <div style={{fontSize: '11px', color:'#656565', fontWeight: '500', marginTop: '-5px'}}>
                                        {transaction.date}
                                    </div>
                                    <DescriptionFull>
                                        {transaction.description}
                                    </DescriptionFull>
                                </Col>
                                <Col style={{flex: '1.5', color: dict.color, alignItems: 'center'}}>
                                    <span>{dict.sign}&#8377;{dict.amount}</span>
                                </Col>
                                <Col style={{flex:'2', alignItems:'center'}}>
                                    <div style={{fontSize: '16px', color:'#4D4B4B'}}>
                                        {transaction.mode}
                                    </div>
                                    <div style={{fontSize: '11px', color: palette[paletteIndex], fontWeight: '500', marginTop: '-5px'}}>
                                        {transaction.category}
                                    </div>
                                </Col>
                            </Card>
                        )
                    })
                }
            </BodyContent>
        </Container>
    )
}

export default RecentTransactions;