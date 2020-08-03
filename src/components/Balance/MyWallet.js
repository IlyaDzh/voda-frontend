import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@/components';

const useStyles = makeStyles({
  myWalletButton: {
    marginLeft: 20,
  }
});

const MyWallet = () => {
  const classes = useStyles();
  return (
    <Button color="secondary" className={classes.myWalletButton}>
      Choose another wallet
    </Button>
    )
};

export default MyWallet;
