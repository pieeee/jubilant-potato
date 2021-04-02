import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '16px 0',
        },
        '& .MuiButtonBase-root': {
          padding: '10px 0'
      }
  },
}))
