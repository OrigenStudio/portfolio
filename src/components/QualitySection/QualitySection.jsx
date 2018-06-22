import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import Section from '../Section';

import styles from './styles';

class QualitySection extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
  };

  render() {
    const { classes } = this.props;
    return <div id="quality">
        <Section headline="Create quality software" className={classes.wrapper}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="display3" color="inherit">
                To achieve excellent user satisfaction our products are secure, scalable, and future proof
              </Typography>
            </Grid>
          </Grid>
        </Section>
      </div>;
  }
}

export default withStyles(styles)(QualitySection);
