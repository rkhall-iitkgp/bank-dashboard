import {
  createStyles,
  TextInput,
  Button,
  Group,
  rem,
  PinInput
} from '@mantine/core';
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: `100vh`,
    boxSizing: 'border-box',
    padding: `calc(${theme.spacing.xl} * 2.5)`,
    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
    display: `flex`,
    justifyContent:`center`,
    alignItems:`center`,
    background:`grey`
  },
  titlebox:{
      display:`flex`,
      justifyContent:`center`,
   

  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    fontWeight:500,
    margin:`0.8rem`,

  },
  titlebold: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    fontWeight:600,
    fontSize:`1.5rem`,
    display:`flex`,
    justifyContent:`center`,
    alignItems:`center`,

    
  },

  description: {
    color:`#737373`,
    fontSize:`1rem`,
      padding:`0.5rem`,
      textAlign:`center`,
      marginTop:`10px`
  },

  form: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
    width:`500px`,
    color:`#0052B3`
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
      maxWidth:`90%`,
      width:`500px`,
    padding: theme.spacing.xl,
    margin:`auto`
  },
  
  buttoncontainer:{
      display:`flex`,
      justifyContent:`space-between   `,
      // margin:`1rem`,
      marginTop:`2rem`
  },
  button:{
      width:`150px`,
      backgroundColor: `#0062D6`,
      borderRadius:`20px`,
  },
  topheading:{
      width:`100%`,
      background:`#DDEDFF`,
      display:`flex`,
      justifyContent:`center`,
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    alignItems:`center`,
  },
  
  
}));

function Demo() {
return (
  <Group position="center">
    <PinInput placeholder="" />
  </Group>
);
}
export function UpiTransfer5() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      
        <div className={classes.form}>
          <div className={classes.topheading}>

          <div className={classes.title}>UPI Transfer</div>
          </div>
          <div className={classes.forminside}>
          <div className={classes.titlebox}>
          <div className={classes.titlebold}><span >Enter PIN</span></div>
          
          </div>
         <div className={classes.description}>
           <Demo/>
          </div>
          <div className={classes.buttoncontainer}>
          <Button className={classes.button} onClick={()=>{
            }}>Back</Button>
            <Button className={classes.button} onClick={()=>{
            }}>Continue</Button>
          </div>
          </div>
        </div>
    </div>
  );
}
