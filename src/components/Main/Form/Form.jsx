import React, { useState, useContext } from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';

import { ExpenseTrackerContext } from '../../../context/context'
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import { formatDate } from '../../../utils/utils';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date())
}

const Form = () => {
    
    const [formData, setFormData] = useState(initialState);
    const {addTransaction} = useContext(ExpenseTrackerContext);
    const createTransaction = () => {
        if (Number.isNaN(Number(formData.amount)) || !formData.category || !formData.date.includes('-')) return;

        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4()}
        addTransaction(transaction);
        setFormData(initialState); 
    }
    
    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

  return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>

                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select label='Type' name='type' value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                        <MenuItem value="Income">
                            Income
                        </MenuItem>
                        <MenuItem value="Expense">
                            Expense
                        </MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select label='Category' name='category' value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                        {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type='number' label='Amount' name='amount' fullWidth value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <TextField type='date' label='Date' name='date' fullWidth value={formData.date} onChange={(e) => setFormData({...formData, date: formatDate(e.target.value)})} />
            </Grid>
            <Grid item xs={12}>
                <Button variant='outlined' color='primary' fullWidth onClick={createTransaction}>Create</Button>
            </Grid>
        </Grid>
    </div>
  )
}

export default Form;
