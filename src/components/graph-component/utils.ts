export interface FinData{
    day: number
    gained: string
    expended: string
}


export function generateSmothFakeDataBasedOnValued(len: number): FinData[]{
    function randomRangeBeetweenValues(min: number, max: number): string{
        if(!min || !max){
            throw new Error("number must have a numeric value")
        }
        if(min > max){
            throw new Error("min value must be lesser than max value")
        }

        return (Math.random() * (max - min) + min).toFixed(2);
    }

    const arr: FinData[] = Array.from({length: len}, (_, key:number) => ({
        day: key,
        expended: randomRangeBeetweenValues(10, 100),
        gained: randomRangeBeetweenValues(10,100)
    }))

    return arr
}