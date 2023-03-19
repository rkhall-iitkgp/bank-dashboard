import {
    createStyles,
    TextInput,
    Button,
    Group,
    rem,
  } from '@mantine/core';
  import {useState} from 'react'
//   import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
//   import { ContactIconsList } from '../ContactIcons/ContactIcons';
  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: `100vh`,
      boxSizing: 'border-box',
      borderRadius: theme.radius.md,
      padding: `calc(${theme.spacing.xl} * 2.5)`,
      [theme.fn.smallerThan('sm')]: {
        padding: `calc(${theme.spacing.xl} * 1.5)`,
      },
      display: `flex`,
      justifyContent:`center`,
      alignItems:`center`,
    },
    titlebox:{
        marginBottom:`20px`
    },
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    //   color: theme.black,
      lineHeight: 1,
      fontWeight:400,
      paddingBottom:`5px`
    },
    titlebold: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    //   color: theme.black,
      lineHeight: 1,
      fontWeight:600,
      fontSize:`1.5rem`
    },
  
    description: {
      color: theme.colors[theme.primaryColor][0],
      maxWidth: rem(300),
  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
    },
  
    form: {
      backgroundColor: theme.white,
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
      width:`300px`,
      color:`#0052B3`
    },
  
    social: {
      color: theme.white,
  
      '&:hover': {
        color: theme.colors[theme.primaryColor][1],
      },
    },
  
    input: {
      backgroundColor: theme.white,
      borderColor: theme.colors.gray[4],
      color: theme.black,
  
      '&::placeholder': {
        color: theme.colors.gray[5],
      },
      border:'0',
      borderRadius:"0",
      background:'transparent',
      borderBottom:`2px solid #eee`
    },
  
    inputLabel: {
      color: theme.black,
      position:`absolute`,
      top:`1.5rem`,
      transition:`0.25s ease`
    },
    inputcontainer:{
        position:`relative`,
        paddingTop:`0.75rem`,
        marginTop:`0 !important`,
    },
  
    control: {
      backgroundColor: `#006AE4`,
      borderRadius:`20px`
    },
    forminside:{
        maxWidth:`80%`,
        width:`300px`,
        margin:`auto`
    },
  }));
  
//   const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
  
  export function ContactUs() {
    const { classes } = useStyles();
  
    // const icons = social.map((Icon, index) => (
    //   <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
    //     <Icon size="1.4rem" stroke={1.5} />
    //   </ActionIcon>
    // ));
  const [otp, setOtp] = useState(false)
    return (
      <div className={classes.wrapper}>
        
          <div className={classes.form}>
            <div className={classes.forminside}>
            <div className={classes.titlebox}>
            <div className={classes.title}>Add Account</div>
            <div className={classes.titlebold}>Enter Your Details</div>
            </div>
            
            <TextInput
              placeholder="Account Number"
              type={"number"}
              required
              classNames={{ input: classes.input, label: classes.inputLabel,root: classes.inputcontainer }}
            />
            <TextInput
              placeholder="Mobile Number"
              type={"number"}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel,root: classes.inputcontainer }}
            />
            <TextInput
              placeholder="IFSC"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel,root: classes.inputcontainer }}
            />
            {
                otp?<TextInput
                placeholder="OTP"
              type={"number"}
                
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel,root: classes.inputcontainer }}
              />:<></>
            }
            
            <Group position="center" mt="md">
              <Button className={classes.control} onClick={()=>{
                setOtp(true)
              }}>{otp?"Confirm":"Get OTP"}</Button>
            </Group>
            </div>
          </div>
      </div>
    );
  }