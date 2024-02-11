import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider} from '@mui/material';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';

const Main = () => {

    const {balance} = useContext(ExpenseTrackerContext);

  return (
    <Card>
        <CardHeader title="Expense Tracker" align="center"/>
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance $ {balance}</Typography>
            <Divider/>
            <Form />
        </CardContent>
        <CardContent>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <List/>
                </Grid>
            </Grid>
        </CardContent> 
    </Card>
  )
}

export default Main