import React, {useReducer} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import AppContext from "../contexts/AppContext"
import reducer from '../reducers'

const App = () => {

  const [state, dispatch] = useReducer(reducer, [])
  const value = {state, dispatch}
  return (
    <AppContext.Provider value={value}>
      <div className="container-fluid">
        <EventForm/>
        <Events/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
