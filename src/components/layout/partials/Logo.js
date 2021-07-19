import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require('./../../../assets/images/logo.png')}
            style={{filter:"contrast(130%)", marginTop:"7px"}}
            alt="Open"
            width={47}
            height={47} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;