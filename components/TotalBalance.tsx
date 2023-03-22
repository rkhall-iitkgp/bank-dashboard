import { createStyles } from '@mantine/core'
import Heading from './SmallComponents/Heading'
import styled from '@emotion/styled'
import { Group, Stack, Text } from '@mantine/core'
import Image from 'next/image'
const useStyles = createStyles((theme) => ({
    container: {
        backgroundColor: `#ffffff`,
        borderRadius: `30px`,
        boxShadow: `0px 2px 20px rgba(0,0,0,0.1)`,
        color: `#0052B3`,
        position: 'absolute',
        height: `185px`,
        width: `305px`,
        left: `429px`,
        top: `210px`,

    },
    subcontainer1: {
        color: `#737373`,
        position: 'absolute',
        top: `10px`,
        left: `27px`,
        width: `144px`,
        height: `18px`,
        textAlign: `center`,
        marginTop: `30px`,
        display: `flex`,
        justifyContent: `space`,
    },
    subcontainer5: {
        color: `#737373`,
        position: 'absolute',
        top: `10px`,
        right: `3px`,
        width: `102px`,
        height: `15px`,
        marginTop:`30px`,
        textAlign: `center`,
        display: `flex`,
        justifyContent: `space`,
    },
    subcontainer2: {
        color: `#000000`,
        position: 'absolute',
        top: `62px`,
        left: `27px`,
        width: `240px`,
        height: `52px`,
        display: `flex`,
        alignItems: `center`,
    },
    subcontainer3: {
        color: `#737373`,
        fontSize: `1rem`,
        position: 'absolute',
        top: `120px`,
        left: `27px`,
        width: `55px`,
        height: `18px`,
        textAlign: `center`,
        display: `flex`,
        textalign: `center`,
        background: `#E8F6F0`,
        borderRadius: `5px`,
        
    },
    subcontainer4: {
        color: `#737373`,
        position: 'absolute',
        top: `149px`,
        left: `27px`,
        width: `178px`,
        height: `18px`,
        textAlign: `center`,
        display: `flex`,
        justifyContent: `space`,
    },
   
    
   
}))
export function TotalBalance() {
    const { classes } = useStyles()
    let data = {
       totalBalance: '₹1,23,456', 
       increment: '4.74%',
       timePeriod:'1', 
       number:'****3241',  
    }
    return (
        <div className={classes.container}>
            <div className={classes.subcontainer1}>
                <span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `500`,
                    fontSize: `16px`,
                    lineHeight: `20px`,
                }}>Total Balance</span>
             
            </div>
            
            <div className={classes.subcontainer5}>
                <span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `500`,
                    fontSize: `12px`,
                    lineHeight: `15px`,
                }}><Image
                src={'/../public/icons/sbi.png'}
                width={15}
                height={15}
                alt={''}
              ></Image>{data.number}<Image
              src={'/../public/icons/polygon.png'}
              width={10}
              height={10}
              alt={''}
            ></Image></span>
             
            </div>

            <div className={classes.subcontainer2}>
            <span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `700`,
                    fontSize: `36px`,
                    lineHeight: `44px`,
                }}>{data.totalBalance} </span>

            </div>
            <div className={classes.subcontainer3}>
            <span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `600`,
                    fontSize: `12px`,
                    color:`#2CC578`,
                    lineHeight: `15px`,
                }}> <Image
                src={'/../public/icons/increment.png'}
                width={14}
                height={14}
                alt={''}
              ></Image>{data.increment}</span>

            </div>
            <div className={classes.subcontainer4}>
            <span style={{
                    fontFamily: 'Montserrat',
                    fontStyle: `normal`,
                    fontWeight: `500`,
                    fontSize: `12px`,
                    lineHeight: `15px`,
                }}>Compared to last {data.timePeriod} week</span>

            </div>
           
        </div>
    )
}
