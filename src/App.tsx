import { RouterProvider } from 'react-router-dom'
import { mainRouter } from './router/mainRouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

let client = new QueryClient()
const App = () => {
  return (
    <div>
      <QueryClientProvider client={client}>
      <RouterProvider  router={mainRouter} />
      </QueryClientProvider>
    </div>
  )
}

export default App