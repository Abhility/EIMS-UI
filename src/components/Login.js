const Login = () => {
  return (
    <div className='row valign-wrapper'>
      <div className='col s6 teal login-left-block valign-wrapper'>
      <div className='col s2'/>
        <img
          src='https://www.eimsousse.com/uploads/1/2/4/6/12464130/logo-eims_1_orig.png'
          className='brand-logo center-align col s8'
          alt='logo'
        />
         <div className='col s2'/>
      </div>
      <div className='col s4 offset-s1'>
        <div className='row'>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>account_circle</i>
            <input id='icon_prefix' type='email' className='validate' />
            <label className='form-field' for='icon_prefix'>
              Email
            </label>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>lock</i>
            <input id='icon_telephone' type='password' className='validate' />
            <label className='form-field' for='icon_telephone'>
              Password
            </label>
          </div>
          <div className='input-field col s12'>
            <button
              class='btn waves-effect waves-light'
              type='submit'
              name='action'
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className='col s1'/>
    </div>
  );
};

export default Login;
