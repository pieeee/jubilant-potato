import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  CollectionPreview: {
    marginBottom: theme.spacing(12),
    backgroundColor: 'transparent',
    borderRadius: 0,
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: '10px',
    marginBottom: theme.spacing(2),
  },
}))
