import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import About from './About'
import Register from './Register'
import Login from './Login'

const Home = () => {
    return (
        <div>
            <table >
                <thead>
                    <tr>
                        <th>Home</th>
                        <th>Hello</th>
                        <th>Topic</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            
                <Router>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                    </div>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/about' component={About}></Route>
                    <Route exact path='/register' component={Register}></Route>
                    <Route exact path='/login' component={Login}></Route>

                </Router>
        </div>
    )
}

export default Home;