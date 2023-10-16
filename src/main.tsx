import {ThemeProvider} from "@/components/theme-provider.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme={"system"} storageKey={"vite-ui-theme"}>
      <QueryClientProvider client={queryClient}>
        <App/>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
