import React from "react"
import { Provider as PaperProvider } from "react-native-paper"
import { Provider } from "react-redux"
import Router from "./src/configs/router"
import store from "./src/configs/store"

const App = () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </PaperProvider>
  )
}

export default App