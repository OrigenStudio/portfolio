import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextLoop from 'react-text-loop';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './styles';
import Section from '../Section';

class PageTitleIterator extends React.PureComponent {
  render() {
    const { classes, headline, list =[], text1, text2 } = this.props;
    return (
      <div className={classes.container}>
        <Section headline={headline} className={classes.wrapper}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="display2"
                color="inherit"
                className={classes.pageTitle}
              >
                <span>{text1}</span>
                <TextLoop speed={2000}>
                  {list.map(list => (
                    <span className={classes.textLoop}>{list}</span>
                  ))}
                </TextLoop>
                <br />
                <span>{text2}</span>
              </Typography>
            </Grid>
          </Grid>
        </Section>
      </div>
    );
  }
}

export default withStyles(styles)(PageTitleIterator);
