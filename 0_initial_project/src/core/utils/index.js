import moment from '../../../node_modules/moment'

export const calculateSumOfNumbers =  numbers => numbers.reduce((acc, number) => acc += number, 0)
export const getFormattedTime = date => moment(date).format('MMMM Do YYYY, h:mm:ss a')