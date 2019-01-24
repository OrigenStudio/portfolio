import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';

import styles from './styles';
import Padding from '../Padding';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import auditList from '../../data/auditList';

class ListInfoSection extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Padding>
          <List className = {classes.listSection}>
            <Typography
              variant="display1"
              color="inherit"
              className={classes.center}
            >
              Frases Motivadoras
            </Typography>
            {_.map(auditList, (item, index) => (
            <ListItem>
              <ListItemText>
                <Typography>
                {item.description}
                </Typography> 
              </ListItemText>  
            </ListItem>
            ))}
            <div>
              <Button 
              href="mailto:hello@origenstudio.com"
              className={classes.button}>
              Click Me
              </Button> 
            </div>              
          </List>
        </Padding>
      </div>
    );
  }
}

  
  export default withStyles(styles)(ListInfoSection);