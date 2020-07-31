import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { ArrowBackOutlined } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  errorPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Overpass',
    height: 600,
    '& h6': {
      fontWeight: 'bold',
      fontSize: '200px',
      lineHeight: '190px',
      margin: 0,
      color: theme.palette.primary.main,
      [theme.breakpoints.down("sm")]: {
        fontSize: '160px',
      }
    },
    '& p': {
      margin: 0,
      fontSize: '48px',
      color: theme.palette.text.secondary,
      [theme.breakpoints.down("sm")]: {
        fontSize: '38px',
      }
    },
    '& a': {
      display: 'flex',
      alignItems: 'center',
      marginTop: 20,
      fontSize: '32px',
      color: theme.palette.text.secondary,
      '& svg': {
        marginRight: 10,
      }
    }
  },
}));

const ErrorPage = () => {
  const classes = useStyles();
    return (
        <div className={classes.errorPage}>
          <h6>404</h6>
          <p>Page not found</p>
          <Link to="/">
            <ArrowBackOutlined />
             Go to main page
          </Link>
        </div>
    )
};

export default ErrorPage
