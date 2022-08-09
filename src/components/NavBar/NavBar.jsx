import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'


export default function NavBar({user, setUser}){

    function handleLogOut() {
        //delegate to the users-service
        userService.logOut()
        setUser(null)
    }

    return (
    <nav>
        welcome, {user.name} 
        &nbsp; | &nbsp;
        <Link to="/subplan/index">View All Sub Plans</Link>
        &nbsp; | &nbsp;
        <Link to="/subplan/new">create new subplan</Link>
        &nbsp; | &nbsp;
        <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
    )
}