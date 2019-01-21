import _ from 'lodash';
import Link from 'gatsby-link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

import Padding from '../../components/Padding';
// Data
// TODO move this somewhere else??
import serviceList from '../../data/serviceList';
import styles from './styles';

const LinkButton = ({ href, classes, children }) => {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={classes.link}>
        <ButtonBase className={classes.button}>{children}</ButtonBase>
      </Link>
    );
  }
  return (
    <ButtonBase href={href} className={classes.button}>
      {children}
    </ButtonBase>
  );
};

class Services extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Padding>
          <Typography variant="display3" className={classes.title}>
            Our services
          </Typography>
          <Divider className={classes.decoration} />
          <Grid container spacing={16}>
            {_.map(serviceList, (service, index) => (
              <Grid
                item
                xs={12}
                lg={4}
                key={`service${index}`}
                className={classes.item}
              >
                <LinkButton
                  href={service.href}
                  classes={{ link: classes.link, button: classes.button }}
                >
                  <div
                    className={classes.itemImage}
                    style={{
                      backgroundImage: `url('${service.image}')`,
                    }}
                  >
                    <div className={classes.itemText}>
                      <Typography
                        variant="display2"
                        color="inherit"
                        className={classes.primaryText}
                      >
                        {service.firstLine}
                        <br />
                        {service.secondLine ? service.secondLine : null}
                      </Typography>
                      <div className={classes.secondaryText}>
                        <Typography variant="body1" color="inherit">
                          {service.description}
                        </Typography>
                        <Typography variant="button" color="inherit" className={classes.knowMore}>
                          Read more
                        </Typography>
                      </div>
                    </div>
                  </div>
                </LinkButton>
              </Grid>
            ))}
          </Grid>
        </Padding>
      </div>
    );
  }
}

export default withStyles(styles)(Services);
