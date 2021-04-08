import React from 'react';

function User({ user }) {
  return (
    <div className='col l8 m8 offset-l4 offset-m4 striped page-height right-pane valign-wrapper'>
      {/* <h4 className='center-align'>User Details</h4> */}
      <div className='col s6'>
        <div className='image-container'>
          <img src={user.photoUrl} alt='user' className='user-image' />
        </div>
      </div>
      <div  className='col s6'>
        <div className='user-details-container'>
          <ul className='collection'>
            <li className='collection-item row'>
              <label className='active col s6'>
                Name
              </label>
              <span className='col s6'>{user.name}</span>
            </li>

            <li className='collection-item row'>
            <label className='active col s6'>
                Designation
              </label>
              <span className='col s6'>{user.title}</span>
            </li>
            <li className='collection-item row'>
            <label className='active col s6'>
              Email  
              </label>
              <span className='col s6'>{user.email}</span>
            </li>
            <li className='collection-item row'>
            <label className='active col s6'>
                Phone
              </label>
              <span className='col s6'>{user.phone}</span>
            </li>
            <li className='collection-item row'>
            <label className='active col s6'>
                Team
              </label>
              <span className='col s6'>{user.team}</span>
            </li>
            <li className='collection-item row'>
            <label className='active col s6'>
                Salary
              </label>
              <span className='col s6'>{user.salary}</span>
            </li>
            <li className='collection-item row'>
            <label className='active col s6'>
                Leave Quota
              </label>
              <span className='col s6'>{user.leaveQuota}</span>
            </li>
            <li className='collection-item row'>
            <label className='active col s6'>
                Date of Joining
              </label>
              <span className='col s6'>{user.createdAt}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default User;
