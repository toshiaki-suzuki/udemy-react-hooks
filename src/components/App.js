import React, {useReducer, useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppContext from "../contexts/AppContext"
import reducer from '../reducers'

const App = () => {
  const appState = localStorage.getItem("appState")
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}
  
  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(state))
  }, [state])
  return (
    <AppContext.Provider value={value}>
      <div className="container-fluid">
        <EventForm/>
        <Events/>
        <OperationLogs/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
