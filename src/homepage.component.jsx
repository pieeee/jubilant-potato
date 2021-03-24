import React from 'react'
import {
  makeStyles,
  Grid,
  Container,
  Typography,
  Link,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  menuItem: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '240px;',
    border: '1px solid',
    borderRadius: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    border: '1px solid',
    borderRadius: theme.spacing(1),
    minWidth: '150px',
    width: '33%',
    padding: theme.spacing(2),
  },
}))

const HomePage = () => {
  const classes = useStyles()

  const menuItemList = [
    {
      title: 'MONITOR',
      path: '/',
    },
    {
      title: 'CPU',
      path: '/',
    },
    {
      title: 'GPU',
      path: '/',
    },
    {
      title: 'PSU',
      path: '/',
    },
    {
      title: 'SSD',
      path: '/',
    },
    {
      title: 'RAM',
      path: '/',
    },
  ]

  return (
    <Container>
      <Grid container spacing={2}>
        {menuItemList.map((menuItem) => (
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.menuItem}>
              <div className={classes.content}>
                <Typography variant="h4">{menuItem.title}</Typography>
                <Link href="#">Order Now</Link>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default HomePage
