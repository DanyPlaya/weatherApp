import ReactDOM from 'react-dom/client'


import {ChakraProvider} from '@chakra-ui/react'
import { App } from './app/App'
import { Provider } from 'react-redux'
import { createStore } from './app/providers/storeProvider/store'


const store = createStore()


ReactDOM.createRoot(document.getElementById('root')!).render(

<ChakraProvider>
  <Provider store={store}>
    <App/>
  </Provider>
</ChakraProvider>
)
