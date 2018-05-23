import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import sharpToImgProps from '../../utils/sharpToImgProps';

import styles from './styles';

class SharpImage extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
    image: PropTypes.shape({}),
    alt: PropTypes.string,
    wrapperClassName: PropTypes.string,
    imgClassName: PropTypes.string,
  };

  render() {
    const { classes, image, alt = 'image', wrapperClassName, imgClassName } = this.props;
    return (
      <div className={classNames(classes.wrapper, wrapperClassName)}>
        <img
          {...sharpToImgProps(image)}
          alt={alt}
          className={classNames(classes.img, imgClassName)}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SharpImage);
