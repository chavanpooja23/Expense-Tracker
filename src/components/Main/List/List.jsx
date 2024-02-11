import React, { useContext } from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton, Slide, ListItemSecondaryAction } from '@mui/material'
import { Delete, MonetizationOn } from '@mui/icons-material'

import { ExpenseTrackerContext } from '../../../context/context'

const List = () => {

    const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);

    return (
        <MUIList dense={false} style={{ maxHeight: '150px', overflow: 'auto' }}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: transaction.type === 'Expense' ? 'red' : 'green' }}>
                                <MonetizationOn/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
  )
}

export default List;