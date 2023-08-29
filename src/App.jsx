import BirthData from "./components/BirthData"
import Login from "./components/Login"
// import Statistics from "./components/StatisticsPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import StatPage from "./components/StatPage";


function App() {

  return (
    <>

    <Router>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route path="/StatPage" Component={StatPage}>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

