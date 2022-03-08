import React, {useReducer} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppContext from "../contexts/AppContext"
import reducer from '../reducers'

const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}
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
