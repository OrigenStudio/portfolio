import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import _ from 'lodash';

import styles from './styles';
import Section from '../Section';

class ListInfoSection extends React.PureComponent {
  render() {
    const { classes, title, items, buttonText, buttonHref } = this.props;
    return (
      <div className={classes.root}>
        <Section>
          <div className={classes.wrapper}>
            <Typography
              variant="display1"
              color="inherit"
              className={classes.center}
            >
              {title}
            </Typography>
            <List className={classes.listSection}>
              {_.map(items, (item, index) => (
                <ListItem key={index}>
                  <ListItemText className={classes.listText}>
                    <Typography variant="body1">{item.description}</Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
            <div>
              <Button href={buttonHref} size="large" className={classes.button}>
                {buttonText}
              </Button>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default withStyles(styles)(ListInfoSection);
