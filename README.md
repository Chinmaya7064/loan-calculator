## Project Overview

The Loan Calculator is a modern, user-friendly web application that helps users calculate loan EMIs (Equated Monthly Installments), 
view detailed payment breakdowns, and convert currencies using real-time exchange rates. 
This tool is designed to make financial planning easier by providing clear information about loan repayments.

## Live Demo
https://chinmaya7064.github.io/loan-calculator/

## Purpose

This application serves several important purposes:

- Help users understand their monthly loan payments before taking a loan
- Provide a detailed month-by-month breakdown of payments (amortization schedule)
- Allow users to see how their payments would look in different currencies
- Give access to up-to-date exchange rates for financial planning


## Key Features

1. **Loan EMI Calculation**

    - Calculate monthly payments using the standard EMI formula
    - Input loan amount, interest rate, and loan term
    - Get instant results with a single click



2. **Detailed Amortization Schedule**

    - Month-by-month breakdown of payments
    - See how much goes toward principal vs. interest each month
    - Track remaining balance throughout the loan term



3. **Real-time Currency Conversion**

    - Convert EMI and payment details to different currencies
    - Uses live exchange rates from Exchange Rate API
    - Support for multiple currencies (USD, EUR, GBP, INR, JPY)



4. **Exchange Rates Page**

    - View current exchange rates for 160+ currencies
    - Search functionality to find specific currencies
    - Paginated results for easy browsing



5. **Dark/Light Mode**

    - Toggle between dark and light themes
    - Improved readability in different lighting conditions



6. **Responsive Design**

    - Works on all screen sizes (desktop, tablet, mobile)
    - Collapsible navigation menu on mobile devices
    - Optimized layout for different devices


## Technologies Used

### Frontend

- **React.js**: For building the user interface and component structure
- **Material UI**: For styled components and responsive design
- **React Router**: For navigation between pages
- **Axios**: For making API requests to fetch exchange rates


### State Management

- **React Context API**: For managing global state (theme, currency)
- **React Hooks**: For component-level state and side effects


### APIs

- **Exchange Rate API**: For fetching real-time currency conversion rates


### Styling

- **CSS**: For custom styling
- **Material UI Theming**: For consistent design and dark/light mode

## How It Works

### EMI Calculation

The application uses the standard EMI formula:

```plaintext
EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
```

Where:

- P = Principal loan amount
- R = Monthly interest rate (annual rate / 12 / 100)
- N = Loan duration in months


### Currency Conversion

1. The app fetches current exchange rates when it loads
2. When a user selects a different currency, the app converts all monetary values
3. The conversion happens in real-time without needing to recalculate



## How to Set Up and Run Locally

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)


### Installation Steps

1. **Clone the repository**

```shellscript
git clone https://github.com/yourusername/loan-calculator.git
cd loan-calculator
```


2. **Install dependencies**

```shellscript
npm install
```


3. **Start the development server**

```shellscript
npm start
```


4. **Open in browser**

1. The application will open automatically in your default browser
2. If it doesn't, visit: [http://localhost:3000](http://localhost:3000)


## How to Use the Application

1. **Calculate a Loan EMI**

    - Enter the loan amount (ex: 250000)
    - Enter the interest rate (ex: 8.5)
    - Enter the loan term in years (ex: 5)
    - Click the "CALCULATE" button
    - View your monthly EMI and detailed amortization schedule



2. **Convert to Different Currencies**

    - After calculating, select a different currency from the dropdown
    - All values will automatically convert to the selected currency



3. **View Exchange Rates**

    - Click on "Exchange Rates" in the navigation bar
    - View current exchange rates for different currencies
    - Use the search box to find specific currencies
    - Use pagination to browse through all available rates



4. **Switch Between Light and Dark Mode**

    - Click the theme toggle switch in the navigation bar
    - The application will immediately switch themes
