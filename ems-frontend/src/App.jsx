
import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route}from 'react-router-dom'
function App() {
  

  return (
  
    <>
    <BrowserRouter>
    <Routes>
      {/* // http://localhost:3000 */}
      <Route path='/' element={<ListEmployeeComponent />}></Route>
      {/* // http://localhost:3000/employees */}
      <Route path='/employees' element={<ListEmployeeComponent />}></Route>
      {/* // http://localhost:3000/add-employee */}
      <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
