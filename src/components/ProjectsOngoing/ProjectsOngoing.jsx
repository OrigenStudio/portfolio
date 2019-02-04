import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ButtonBase from '@material-ui/core/ButtonBase';
import _ from 'lodash';
import Link from 'gatsby-link';
import classNames from 'classnames';

import styles from './styles';
import Section from '../Section';

class ProjectsOngoing extends React.PureComponent {
  render() {
    const { classes, title, headline, items } = this.props;
    return (
      <div className={classes.container}>
        <Section className={classes.wrapper}>
          <div className={classes.textIntro}>
            <Typography
              variant="display2"
              color="inherit"
              align="center"
              className={classes.title}
            >
              {title}
            </Typography>
            <Divider className={classes.decoration} />
            <Typography
              variant="subheading"
              color="inherit"
              align="center"
              className={classes.description}
            >
              {headline}
            </Typography>
          </div>
          <Grid container>
            {_.map(items, (item, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                key={`methods${index}`}
                className={classes.item}
              >
                <ButtonBase
                  href={item.href}
                  target="_blank"
                  className={classNames(classes.link, classes.itemBackground)}
                >
                  <div
                    className={classes.itemBackground}
                    style={{
                      backgroundImage: `url('${item.image}')`,
                    }}
                  >
                    <div className={classes.itemText}>
                      <Typography
                        variant="display2"
                        color="inherit"
                        className={classes.projectName}
                      >
                        {item.projectName}
                      </Typography>
                    </div>
                  </div>
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
        </Section>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectsOngoing);
