import {Box, createStyles, Group, PinInput} from '@mantine/core'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Heading from '../reusable-components/Heading'
import {hasLength, useForm} from '@mantine/form'
import api from '../datams'
import {IconCheck, IconX} from '@tabler/icons-react';
import {notifications} from '@mantine/notifications';
import useStorage from '../../hooks/useStorage'

const useStyles = createStyles((theme) => ({
  wrapper: {
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
    display: `flex`,
    justifyContent: `center`,
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    fontWeight: 500,
    margin: `0.8rem`,
  },
  titlebold: {
    fontFamily: 'Montserrat',
    lineHeight: 1,
    fontWeight: 600,
    fontSize: `20px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },

  description: {
    color: `#737373`,
    fontSize: `1rem`,
    padding: `0.5rem`,
    textAlign: `center`,
    marginTop: `30px`,
  },

  form: {
    backgroundColor: theme.white,
    borderRadius: theme.radius.xl,
    boxShadow: theme.shadows.lg,
    width: `40vw`,
    color: `#0052B3`,
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
    border: '0',
    borderRadius: '0',
    background: 'transparent',
    borderBottom: `2px solid #eee`,
  },

  inputLabel: {
    color: '#636363',
    transition: `0.25s ease`,
  },
  inputcontainer: {
    position: `relative`,
    paddingTop: `0.75rem`,
    marginTop: `0 !important`,
  },
  button1: {
    background: '#0062D6',
    borderRadius: '30px',
    width: '150px',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: '1.25rem',
    padding: '5px 15px',
    textAlign: 'center',
    fontWeight: 400,
    // cursor: 'no-drop',
    '&:hover': {
      background: '#558ac9',
    },
  },
  control: {
    backgroundColor: `#006AE4`,
    borderRadius: `20px`,
  },
  forminside: {
    maxWidth: `90%`,
    width: `40vw`,
    // padding: theme.spacing.xl,
    margin: `auto`,
    padding: '30px',
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
  pinbox: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  error: {
    color: 'red',
    fontSize: 'calc(0.875rem - 0.125rem)',
  },
}))

export function EnterMPIN() {
  const { classes } = useStyles();
  const router = useRouter()
  const { getItem } = useStorage()
  const form = useForm({
    initialValues: {
      mpin1: '',
      mpin2: '',
    },
    validate: {
      mpin1: hasLength({ min: 4, max: 4 }, 'MPIN must be 4 characters long'),
      mpin2: (value, values) =>
        value !== values.mpin1 ? 'MPIN Does not Match' : null,
    },
  })

  return (
    <Box
      className={classes.wrapper}
      component="form"
      onSubmit={form.onSubmit(() => { })}
    >
      <div className={classes.form}>
        <Heading title="Authentication" />
        <div className={classes.forminside}>
          <div className={classes.titlebox}>
            <div className={classes.titlebold}>
              <span>Enter MPIN</span>
            </div>
          </div>
          <div className={classes.description}>
            <div className={classes.pinbox}>
              <span className={classes.inputLabel}>Enter MPIN</span>
              <Group position="center">
                <PinInput
                  required
                  mask={true}
                  placeholder=""
                  {...form.getInputProps('mpin1')}
                />
              </Group>
              <div className={classes.error}>{form.errors?.mpin1}</div>
            </div>

            <div className={classes.pinbox}>
              <span className={classes.inputLabel}>Confirm MPIN</span>
              <Group position="center">
                <PinInput
                  required
                  mask={true}
                  placeholder=""
                  {...form.getInputProps('mpin2')}
                />
              </Group>
              <div className={classes.error}>{form.errors?.mpin2}</div>
            </div>
          </div>

          {/* <ButtonGroup href1="/UPI/payment-details-review" href2="/UPI/payment-success" /> */}
          <div className={classes.buttoncontainer}>
            <Link href="/kyc/authentication1">
              <div className={classes.button1}>Back</div>
            </Link>
            <div
              style={{ cursor: 'pointer' }}
              className={classes.button1}
              onClick={() => {
                form.validate()
                if (form.isValid()) {
                  api.post("/user/creatempin/", {
                    "mpin": form.values.mpin1
                  }, { headers: { "Authorization": `Bearer ${getItem("access_token")}` } }).then((response) => {
                    console.log(response)
                    router.push(
                      `/home`
                    )
                    notifications.show({
                      id: 'hello-there',
                      withCloseButton: true,
                      autoClose: 5000,
                      title: "Success",
                      message: response.data.message,
                      color: 'green',
                      icon: <IconCheck size={"1.1rem"} />,
                      loading: false,
                    });
                  })
                    .catch((err) => {
                      console.log('err', err)
                      notifications.show({
                        id: 'hello-there',
                        withCloseButton: true,
                        autoClose: 5000,
                        title: "Unsuccessful",
                        message: err.response.data?.message,
                        color: 'red',
                        icon: <IconX size={"1.1rem"} />,
                        loading: false,
                      });
                    })
                }
              }}
            >
              <span>Continue</span>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}