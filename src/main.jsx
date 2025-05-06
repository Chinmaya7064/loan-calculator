import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ErrorBoundary } from "react-error-boundary"
import ErrorPage from "./pages/ErrorPage"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
