import React from 'react'
import {
  Typography,
  TextField,
  FormControl,
  Button,
  Grid,
} from '@material-ui/core'
import { ReactComponent as GoogleIcons } from './google.svg'
import { useForm, Controller } from 'react-hook-form'

import { useStyles } from './auth-component.styles'

const Signin = () => {
  const classes = useStyles()
  const { control, errors: fieldsErrors, handleSubmit, reset } = useForm()

  // form on submit
  const onSubmit = async (data) => {
    console.log(data)
    reset()
  }
  return (
    <div>
      <Typography variant="h4" color="primary">
        Alreade Have an Account?
      </Typography>
      <Typography variant="subtitle1" color="primary">
        Sign in with your email and password
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

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Button type="submit" color="primary" variant="contained" fullWidth>
              Signin
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              startIcon={<GoogleIcons />}
            >
              Signin With Google
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Signin
