export const formatDateToMonthShortDayNumeric = (date: string) => {
    const options = { month: "short", day: "numeric"};
    return new Intl.DateTimeFormat("es-ES", options).format(new Date(date))
}