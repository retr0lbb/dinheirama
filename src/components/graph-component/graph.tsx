import React from 'react';
import dayjs from 'dayjs';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface DayGainAndLossProps {
  date: Date;
  expenses: number;
  gains: number;
}

interface FakeDate {
  days: DayGainAndLossProps[];
}

const generateRandomDates = (num: number) => {
    const dates = [];
    const today = dayjs();
    for (let i = 0; i < num; i++) {
      const randomDaysAgo = Math.floor(Math.random() * 365); // até um ano atrás
      const randomDate = today.subtract(randomDaysAgo, 'day').toDate();
      dates.push(randomDate);
    }
    return dates;
  };
  
  // Função para gerar dados aleatórios para despesas e ganhos
  const generateRandomData = (num: number) => {
    const dates = generateRandomDates(num);
    const data = dates.map(date => ({
      date,
      expenses: parseFloat((Math.random() * 500).toFixed(2)), // valor aleatório de 0 a 500
      gains: parseFloat((Math.random() * 500).toFixed(2)) // valor aleatório de 0 a 500
    }));
    return data;
  };


// Função para formatar a data no formato desejado
const formatDate = (date: Date) => dayjs(date).format('MMM D');

const data: FakeDate = {
    days: generateRandomData(50)
  };
  

export default function MontainGraph() {
  // Formatar dados para o formato esperado pelo recharts
  const formattedData = data.days.map(day => ({
    date: formatDate(day.date),
    expenses: day.expenses,
    gains: day.gains,
  }));

  return (
    <ResponsiveContainer width="100%">
      <AreaChart data={formattedData}>
        <CartesianGrid strokeDasharray="2 2" strokeOpacity={0.1} />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          type="linear"
          dataKey="expenses"
          strokeWidth={2}
          stroke="#D7263D"
          fillOpacity={0.5}
          fill="none"
        />
        <Area
          type="linear"
          dataKey="gains"
          stroke="#3F7D20"
          strokeWidth={2}
          fillOpacity={0.5}
          fill="none"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
