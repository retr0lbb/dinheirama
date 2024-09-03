import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip, AreaChart, Area } from "recharts";
import {FinData, generateSmothFakeDataBasedOnValued} from "./utils"
import { RadioButton } from "../radio-button";
// Aqui está a data definida no seu componente. Certifique-se de que os dados que deseja usar no gráfico estejam corretos.
const data: FinData[] = generateSmothFakeDataBasedOnValued(10)

export function Chart() {
  return (
      <>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart   
            data={data}
          >
            <CartesianGrid strokeDasharray="0 0" strokeOpacity={0.06} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip wrapperStyle={{backgroundColor: "#232323"}}/>
            <Legend />
            <Area activeDot={false} type="linear" dataKey="gained" fill="#72B01D" stroke="#72B01D" />
            <Area activeDot={false} type="linear" dataKey="expended" fill="#D7263D" stroke="#D7263D" />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex w-full items-center gap-2">
          <RadioButton Label="10 dias" name="daysby" id="10button" value={10}/>
          <RadioButton Label="15 dias" name="daysby" id="15button" value={15}/>
          <RadioButton Label="30 dias" name="daysby" id="30button" value={30}/>
        </div>
      </>
  );
}
