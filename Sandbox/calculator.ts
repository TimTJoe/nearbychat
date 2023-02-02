function calcTax(state:string, income: number, dependent: number) : number {
    if (state == "NY") {
        return income * 0.06 - dependent * 500
    } else if (state == "NJ") {
        return income * 0.03 - dependent * 300
    }
}

let tax: number = calcTax('NJ', 5000, 'two')