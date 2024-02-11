import React from 'react';
import { Card, CardHeader, CardContent, Typography  } from '@mui/material';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import useTransactions from '../../useTransactions';

ChartJS.register(ArcElement, Tooltip, Legend);

const Details = ({ title }) => {

  const cardStyle = {
    borderBottom: title === 'Income' ? '10px solid rgba(0, 255, 0, 0.5)' : '10px solid rgba(255, 0, 0, 0.5)',
  };

  const {total, chartData} = useTransactions(title);
  
  return (
    <div>
      <Card style={cardStyle}> 
        <CardHeader title={title}/>
        <CardContent>
          <Typography variant="h5">${total}</Typography>
          <Doughnut data={chartData}/>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;

