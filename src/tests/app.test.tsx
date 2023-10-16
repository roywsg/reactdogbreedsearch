import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {render, screen} from "@testing-library/react";
import App from "../App.tsx";
import {expect, test} from 'vitest';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
})

test('Render app', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App/>
    </QueryClientProvider>
  )
  const s = screen.getByText('Dog Breed Search')
  expect(s).toBeInTheDocument();
})