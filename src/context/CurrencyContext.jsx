import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

const CurrencyContext = createContext()

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("USD")
  const [baseCurrency, setBaseCurrency] = useState("USD")
  const [exchangeRates, setExchangeRates] = useState({})

  // Fetch exchange rates 
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get("https://api.exchangerate-api.com/v4/latest/USD")
        setExchangeRates(response.data.rates)
      } catch (error) {
        console.error("Error fetching exchange rates:", error)
      }
    }

    fetchExchangeRates()
  }, [])

  // convert amount from USD to another selected currency
  const convertAmount = (amount) => {
    if (!exchangeRates[currency]) return amount
    return amount * exchangeRates[currency]
  }

  const value = {
    currency,
    setCurrency,
    baseCurrency,
    setBaseCurrency,
    exchangeRates,
    convertAmount,
  }

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error
  }
  return context
}
