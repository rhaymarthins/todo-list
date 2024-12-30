
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { AppContextProvider } from './contexts';


function App() {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>


  )
}

export { App };

// // Arrow function
// const App = () => {

//   return (
//     <h1>Hello world!</h1>
//   )
// }
// export { App };