import dayjs from "dayjs"

interface FakeDate{
    days: dayGanAndLoosesProps []
}

interface dayGanAndLoosesProps{
    date: Date
    expenses: number
    gains: number
}

interface GraphDataProps{

}

const data: FakeDate = {
    days: [
        {
            date: new Date(),
            expenses: 100.2,
            gains: 0.0
        },
        {
            date: new Date(),
            expenses: 87.36,
            gains: 48.16
        },
        {
            date: new Date(),
            expenses: 21.91,
            gains: 100.00
        }
    ]
}

export default function Graph(){

}