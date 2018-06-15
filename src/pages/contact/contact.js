import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ContactUsForm from '../../components/ContactUsForm';
import Padding from '../../components/Padding';
import styles from './styles';

const ContactPage = ({ classes }) => (
  <div className={classes.wrapper}>
    <Padding grow>
      <Grid container alignItems="center" className={classes.gridContainer}>
        <Grid item xs={12} sm={6} className={classes.text}>
          <div className={classes.headline}>
            <Typography variant="title" color="inherit">
              We'd love to talk
            </Typography>
          </div>
          <div>
            <Typography variant="display2" color="inherit">
              Need help on an existing project? Interested in what origen studio
              can do for you?
            </Typography>
            <br />
            <Typography variant="display2" color="inherit">
              Get in touch at hello@origen.studio and let us know what do you
              need
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContactUsForm />
        </Grid>
      </Grid>
    </Padding>
  </div>
);

export default withStyles(styles)(ContactPage);
