import { GlobalToast } from '@components/GlobalToast'
import pt from '@utils/i18n/pt.json'
import { PrimeReactProvider, addLocale } from 'primereact/api'
import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from 'routes/PublicRoutes'
import { GlobalLoalding } from './components/GlobalLoading'
import { Interceptor } from './services/interceptor'
import { queryClient } from './services/queryClient'

const App = () => {
  //@ts-ignore
  addLocale('pt', pt)

  return (
    <>
      <PrimeReactProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalLoalding />
          <Interceptor>
            <RouterProvider router={router} />
          </Interceptor>
        </QueryClientProvider>
      </PrimeReactProvider>
      <GlobalToast />
    </>
  )
}

export default App
