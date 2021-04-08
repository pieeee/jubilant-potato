import React, { useRef } from 'react'
import {
  Typography,
  TextField,
  FormControl,
  Button,
  Grid,
  Link,
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import { useStyles } from './auth-component.styles'

const Signup = (props) => {
  const classes = useStyles()
  const {
    control,
    errors: fieldsErrors,
    handleSubmit,
    reset,
    watch,
  } = useForm()

  // confirm password error
  const password = useRef({})
  password.current = watch('password')

  // form on submit
  const onSubmit = async (data) => {
    const { displayName, email, password } = data
    console.log(displayName)
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      await createUserProfileDocument(user, { displayName })
    } catch (error) {
      console.log(error)
    }
    reset()
  }

  return (
    <div>
      <Typography variant="h4" color="primary">
        {`I don't have an account`}
      </Typography>
      <Typography variant="subtitle1" color="primary">
        Sign up with your email and password
      </Typography>
      {/**Signin Form */}

      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className={classes.root}
      >
        <FormControl fullWidth>
          <Controller
            name="displayName"
            as={
              <TextField
                label="Name"
                type="text"
                labelwidth={40}
                helperText={
                  fieldsErrors.displayName
                    ? fieldsErrors.displayName.message
                    : null
                }
                error={fieldsErrors.displayName ? true : false}
              />
            }
            defaultValue=""
            rules={{
              required: 'Name can not be empty',
            }}
            control={control}
          />
        </FormControl>
        <FormControl fullWidth>
          <Controller
            name="email"
            as={
              <TextField
                label="Email"
                type="email"
                labelwidth={40}
                helperText={
                  fieldsErrors.email ? fieldsErrors.email.message : null
                }
                error={fieldsErrors.email ? true : false}
              />
            }
            defaultValue=""
            rules={{
              required: 'Email can not be empty',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            }}
            control={control}
          />
        </FormControl>
        <FormControl fullWidth>
          <Controller
            name="password"
            as={
              <TextField
                label="Password"
                type="password"
                labelwidth={40}
                error={fieldsErrors.password ? true : false}
                helperText={
                  fieldsErrors.password ? fieldsErrors.password.message : null
                }
              />
            }
            defaultValue=""
            control={control}
            rules={{
              required: 'You must enter a password',
              minLength: {
                value: 6,
                message: 'Password required to be minimum 6 character',
              },
            }}
          />
        </FormControl>
        <FormControl fullWidth>
          <Controller
            name="confirmPassword"
            as={
              <TextField
                label="Confirm Password"
                type="password"
                labelwidth={40}
                error={fieldsErrors.confirmPassword ? true : false}
                helperText={
                  fieldsErrors.confirmPassword ? 'Passwords do not match' : null
                }
              />
            }
            defaultValue=""
            control={control}
            rules={{
              required: true,
              validate: {
                value: (value) => value === password.current,
              },
            }}
          />
        </FormControl>

        {props.redirectLink ? (
          <Link onClick={() => props.onSwitchComponent()}>
            Already have an account? Signin.
          </Link>
        ) : null}

        <Grid container spacing={2} className={classes.formButtons}>
          <Grid item xs={12} sm={6}>
            <Button type="submit" color="primary" variant="contained" fullWidth>
              Signup
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Signup
