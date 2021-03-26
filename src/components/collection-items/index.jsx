import React from 'react'
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core'

import { useStyles } from './styles'

const CollectionItem = ({ items }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      {items
        .filter(({}, idx) => idx < 4)
        .map(({ name, id, imageUrl, price }) => (
          <Grid item key={id} xs={12} sm={6} md={3}>
            <Card className={classes.root} elevation={0}>
              <CardActionArea>
                <CardMedia className={classes.media} image={imageUrl} />
                <CardContent className={classes.content}>
                  <div>
                    <Typography variant="body2">{name}</Typography>
                    <Typography variant="body2" className={classes.priceTag}>
                      ${price}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>

              <Button fullWidth color="primary" variant="contained">
                Add To Cart
              </Button>
            </Card>
          </Grid>
        ))}
    </Grid>
  )
}

export default CollectionItem
