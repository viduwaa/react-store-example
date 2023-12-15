
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{
    currency:"LKR",style:"currency"
})

export function currencyFormat(number:number){
    return CURRENCY_FORMATTER.format(number)
}