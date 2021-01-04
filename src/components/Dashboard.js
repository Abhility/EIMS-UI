import'../index.css';
import {Link} from 'react-router-dom';

const Dashboard = () => {
    return (  
        <div className="col l4 m4 teal white-text page-height z-depth-3 left-pane">
            <div className="nav-wrapper teal center-align">
                <img src="https://www.eimsousse.com/uploads/1/2/4/6/12464130/logo-eims_1_orig.png" width="100px" height="100px" className="brand-logo" alt="logo" />
            </div>
            <div className="container center-align">
               <img  className="avatar" src="https://randomuser.me/api/portraits/men/22.jpg" alt="avatar"/>
               <h4>John Doe</h4>
               <h6 className="black-text">Software Engineer</h6>
            </div>
            <div className="navigation">
            <ul className="collection">
                <li className="collection-item teal"> <Link to="/">Profile</Link></li>
                <li className="collection-item teal"><Link to="leaves">Leaves</Link></li>
                <li className="collection-item teal"><Link to="finances">Finances</Link></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Dashboard;