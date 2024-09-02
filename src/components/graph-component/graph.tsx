import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip, AreaChart, Area } from "recharts";

// Aqui está a data definida no seu componente. Certifique-se de que os dados que deseja usar no gráfico estejam corretos.
const data = [
  { day: 1, gained: 103.81, expended: 29.12 },
  { day: 2, gained: 115.34, expended: 10.12 },
  { day: 3, gained: 153.81, expended: 89.12 },
  { day: 4, gained: 13.81, expended: 209.12 },
];

export function Chart() {
  return (
      <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        
        data={data}
      >
        <CartesianGrid strokeDasharray="0 0" strokeOpacity={0.06} />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area activeDot={false} type="linear" dataKey="gained" fill="#72B01D" stroke="#72B01D" />
        <Area activeDot={false} type="linear" dataKey="expended" fill="#D7263D" stroke="#D7263D" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
