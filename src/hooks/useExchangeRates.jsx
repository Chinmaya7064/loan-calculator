import { useState, useEffect } from "react"
import axios from "axios"

export function useExchangeRates(baseCurrency = "USD" || "INR") {
  const [rates, setRates] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
        setRates(response.data.rates)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching exchange rates:", err)
        setError("Failed to fetch exchange rates")
        setLoading(false)
      }
    }

    fetchRates()
  }, [baseCurrency])

  return { rates, loading, error }
}
