import { GlobalToast } from '@components/GlobalToast'
import pt from '@utils/i18n/pt.json'
import { addLocale, PrimeReactProvider } from 'primereact/api'
import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from 'routes/PublicRoutes'

import { queryClient } from './services/queryClient'
import { GlobalLoaldingComponent } from '@components/GlobalLoading'
import { InterceptorComponent } from '@services/components/Interceptor'

const App = () => {
  //@ts-ignore
  addLocale('pt', pt)

  return (
    <>
      <PrimeReactProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalLoaldingComponent />
          <InterceptorComponent>
            <RouterProvider router={router} />
          </InterceptorComponent>
        </QueryClientProvider>
      </PrimeReactProvider>
      <GlobalToast />
    </>
  )
}

export default App
