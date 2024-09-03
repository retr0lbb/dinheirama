export interface FinData{
    day: number
    gained: number
    expended: number
}


export function generateSmothFakeDataBasedOnValued(len: number): FinData[]{
    function randomRangeBeetweenValues(min: number, max: number): number{
        if(!min || !max){
            throw new Error("number must have a numeric value")
        }
        if(min > max){
            throw new Error("min value must be lesser than max value")
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const arr: FinData[] = Array.from({length: len}, (_, key:number) => ({
        day: key,
        expended: randomRangeBeetweenValues(10, 100),
        gained: randomRangeBeetweenValues(10,100)
    }))

    return arr
}