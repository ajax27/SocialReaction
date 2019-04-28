import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';
import 'mdbreact';

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: '#FCF047' }
  else return { color: '#ffffff' }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav fixed-top nav-tabs bg-info darken-2" role="tablist">
      <li className="nav-item">
        <Link style={{ padding: '18px', color: '#FCF047', fontSize: '1.2rem', fontWeight: '600' }} className="navbar-brand" to="/">
          Ajax-React
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, '/')} to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, '/users')} to="/users">
          Users
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, `/post/create`)} to={`/post/create`}>
          Create Post
        </Link>
      </li>
      {!isAuthenticated() && (
        <>
          <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">Sign In</Link>
          </li>
        </>
      )}
      {isAuthenticated() && (
        <>
          <li className="nav-item"><span href={'/signup'} className="nav-link"
            style={(isActive(history, '/signup'), { curser: 'pointer', color: '#fff' })}
            onClick={() => signout(() => history.push('/'))} >
            Sign Out
              </span>
          </li>

          {isAuthenticated() && isAuthenticated().user.role === "admin" && (
            <li className="nav-item">
              <Link to={`/admin`} style={isActive(history, `/admin`)} className="nav-link">
                Admin
              </Link>
            </li>
          )}

          <li className="nav-item">
            <Link to={`/findpeople`} className="nav-link" style={isActive(history, `/findpeople`)}>
              Find People
            </Link>
          </li>

          <li className="nav-item">
            <Link to={`/user/${isAuthenticated().user._id}`} className="nav-link" style={isActive(history, `/user/${isAuthenticated().user._id}`)}>
              {`${isAuthenticated().user.name}'s profile`}
            </Link>
          </li>
        </>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
