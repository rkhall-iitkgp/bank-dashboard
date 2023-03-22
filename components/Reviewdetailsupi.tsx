import {
  createStyles,
  TextInput,
  getStylesRef,
  Button
} from '@mantine/core'
import Link from 'next/link'
import ButtonGroup from './SmallComponents/ButtonGroup'
import Heading from './SmallComponents/Heading'
//   import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
//   import { ContactIconsList } from '../ContactIcons/ContactIcons';
const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: `#EEEEEE`,
    minHeight: `100vh`,
    boxSizing: 'border-box',
    padding: `calc(${theme.spacing.xl} * 2.5)`,
    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    background: `grey`,
  },
  titlebox: {
    // marginBottom:`20px`,
    display: `flex`,
    marginLeft: `1rem`,
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    //   color: theme.black,
    lineHeight: 1,
    fontWeight: 500,
    margin: `0.8rem`,
    //   paddingBottom:`5px`,
    //   marginBottom:`10px`
  },
  titlebold: {
    fontFamily: 'Montserrat',
    //   color: theme.black,
    lineHeight: 1,
    fontWeight: 600,
    fontSize: `20px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    paddingBottom: `15px`,
  },

  description: {
    color: `#737373`,
    fontSize: `0.5rem`,
    padding: `0.5rem`,
  },

  form: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.xl,
    boxShadow: theme.shadows.lg,
    // paddingBottom: '5px',
    width: `40vw`,
    color: `#0052B3`,
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    ':focus': {
      borderColor: 'blue',
    },
    ':disabled': {
      color: '#000',
      backgroundColor: '#eee',
      opacity: `0.8`,
    },
    border: '0',
    borderRadius: '0',
    background: 'transparent',
    borderBottom: `2px solid #ccc`,

    //   [`&:hover ~ .${getStylesRef('inputLabel')}`]: {
    //     color: theme.colors.violet[6],
    //     fontSize:`2rem !important`
    //   },
  },

  inputLabel: {
    ref: getStylesRef('inputLabel'),

    color: theme.black,
    // position:`absolute`,
    // top:`1.5rem`,
    fontSize: `0.7rem`,
    transition: `0.25s ease`,
  },
  inputcontainer: {
    position: `relative`,
    // paddingTop:`0.75rem`,
    marginTop: `0 !important`,
  },

  control: {
    backgroundColor: `#006AE4`,
    borderRadius: `20px`,
  },
  forminside: {
    maxWidth: `90%`,
    width: `40vw`,
    padding: theme.spacing.xl,
    margin: `auto`,
  },
  beficiaryformcontainer: {
    width: `90%`,
    margin: `auto`,
  },
  buttoncontainer: {
    display: `flex`,
    justifyContent: `space-between   `,
    // margin:`1rem`,
    marginTop: `2rem`,
  },
  button: {
    width: `150px`,
    backgroundColor: `#0062D6`,
    borderRadius: `20px`,
  },
  topheading: {
    width: `100%`,
    background: `#DDEDFF`,
    display: `flex`,
    justifyContent: `center`,
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    alignItems: `center`,
  },
  payingtext: {
    paddingTop: `10px`,
    fontWeight: 600,
  },
  buttonreview: {
    marginBottom: `1rem`,
    marginLeft: `1rem`,
    marginRight: `1rem`,
},
  }
))

//   const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function Reviewdetailsupi() {
  const { classes } = useStyles()

  // const icons = social.map((Icon, index) => (
  //   <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
  //     <Icon size="1.4rem" stroke={1.5} />
  //   </ActionIcon>
  // ));
  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        {/* <div className={classes.topheading}>
          <div className={classes.title}>UPI Transfer</div>
        </div> */}
        <Heading title="UPI Transfer" />
        <div className={classes.forminside}>
          <div className={classes.titlebox}>
            <div className={classes.titlebold}>
              <span>Review Details</span>
            </div>
          </div>
          <div className={classes.beficiaryformcontainer}>
            <TextInput
              label="Paying From"
              variant="unstyled"
              type={'number'}
              mt="md"
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              required
              value={`197288882222`}
              disabled
            />

            <TextInput
              label="UPI ID"
              variant="unstyled"
              required
              value={`WelcomtoGc@iitkgp`}
              disabled
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
            />
            <div className={classes.payingtext}>Paying</div>
            <TextInput
              label="Name"
              variant="unstyled"
              required
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              disabled
              value={'Ritik'}
            />
            <TextInput
              label="UPI ID"
              variant="unstyled"
              mt="md"
              value={'mytself@upi'}
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              required
              disabled
            />
            <TextInput
              label="Amount"
              type={'number'}
              variant="unstyled"
              mt="md"
              value={222}
              disabled
              classNames={{
                input: classes.input,
                label: classes.inputLabel,
                root: classes.inputcontainer,
              }}
              required
            />
          </div>

          {/* <div className={classes.buttoncontainer}>
            <Link href='/UPI/Payment'><Button className={classes.button} >Back</Button></Link>
            <Link href='/UPI/Pin'><Button className={classes.button}>Continue</Button></Link>
          </div> */}
        </div>
        <div className='buttonreview'> 
          <ButtonGroup href1="/UPI/Payment" href2="/UPI/Pin" />
        </div>
        </div>
      </div>

  )
}
