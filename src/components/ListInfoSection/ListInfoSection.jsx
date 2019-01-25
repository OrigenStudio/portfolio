import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';

import styles from './styles';
import Padding from '../Padding';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';

class ListInfoSection extends React.PureComponent {
  render() {
    const { classes, title, items, buttonText , buttonHref } = this.props;
    return (
      <div className={classes.root}>
        <Padding>
          <Typography
            variant="display1"
            color="inherit"
            className={classes.center}
          >
            {title}
          </Typography>  
          <List className = {classes.listSection}>
            {_.map(items, (item, index) => (
              <ListItem>
                <ListItemText>
                  <Typography>
                  {item.description}
                  </Typography> 
                </ListItemText>  
              </ListItem>
            ))}               
          </List>
          <div>
            <Button 
              href={buttonHref}
              className={classes.button}
            >
              {buttonText}
            </Button>
          </div>
        </Padding>
      </div>
    );
  }
}

  
  export default withStyles(styles)(ListInfoSection);