import Nav from './component/nav/Nav'
import Header from './component/header/Header'
import Content from './component/content/Content'
import './App.css'
import axios from 'axios'
 
axios.defaults.baseURL='https://api.themoviedb.org/3'
axios.defaults.params={
    api_key: 'f4eb0a967e232dd97e042c5fbe0ab926'
}
const App =()=>{
    return <div>
         <Nav />
         <Header/> 
         <Content/>
    </div>
}
export default App