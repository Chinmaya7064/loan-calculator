import { useState } from "react"

export function useEmiCalculator() {
  const [monthlyEmi, setMonthlyEmi] = useState(0)
  const [amortizationSchedule, setAmortizationSchedule] = useState([])

  //EMI calculation
  const calculateEmi = (principal, annualRate, years) => {
    const monthlyRate = annualRate / 12 / 100
    const months = years * 12

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)

    setMonthlyEmi(emi)
    return emi
  }

  // amortization schedule
  const generateAmortizationSchedule = (principal, annualRate, years) => {
    const monthlyRate = annualRate / 12 / 100
    const months = years * 12
    const emi = calculateEmi(principal, annualRate, years)

    let balance = principal
    const schedule = []

    for (let month = 1; month <= months; month++) {
      const interestPayment = balance * monthlyRate
      const principalPayment = emi - interestPayment
      balance -= principalPayment

      schedule.push({
        month,
        principal: principalPayment,
        interest: interestPayment,
        remainingBalance: balance > 0 ? balance : 0,
      })
    }

    setAmortizationSchedule(schedule)
    return schedule
  }

  return {
    calculateEmi,
    generateAmortizationSchedule,
    monthlyEmi,
    amortizationSchedule,
  }
}
