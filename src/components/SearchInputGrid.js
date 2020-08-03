import { SearchInput } from '@/components/index';
import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  searchBlock: {
    paddingRight: 80,
  }
}));

export const SearchInputGrid = ({sm, md, lg}) => {
  const classes = useStyles();
  return (
    <Grid item sm={sm} md={md} lg={lg}>
      <div className={classes.searchBlock}>
        <SearchInput />
      </div>
    </Grid>
  )
}
