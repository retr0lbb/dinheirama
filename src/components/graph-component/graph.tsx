import React from 'react';
import FakeData from "./fake-data.json"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


interface FakeDataType{
  isodate: number,
  expenses: number
  gains: number
}


const transformData = (data: FakeDataType[]) => {
  return data.map(item => ({
    date: new Date(item["isodate"] * 1000).toLocaleDateString(), // Converte o timestamp para uma data legível
    expenses: item.expenses,
    gains: item.gains
  }));
};
  


export default function MontainGraph() {
  const data = transformData(FakeData)

  return (
    <ResponsiveContainer width="100%" className="bg-red-500">
       <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area 
          type="monotone"
          dataKey="expenses"
          stroke="#ff7300"
          fill="#ff7300"
          fillOpacity={0.4}
        />
        <Area 
          type="monotone"
          dataKey="gains"
          stroke="#387908"
          fill="#387908"
          fillOpacity={0.4}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
