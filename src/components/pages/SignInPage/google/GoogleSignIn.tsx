// import axios from 'axios';
import React from 'react';
import GoogleLogin from 'react-google-login';
// import server from '../../../../api/index';
import { GoogleLogout } from 'react-google-login';

function GoogleSignIn() {
  const googleKey = process.env.REACT_APP_GOOGLE_LOGIN_KEY as string;
  // 요청 성공 시

  // 1. 기존 유저
  // 1-1. [엑세스토큰]을 담아서 서버에 로그인 요청을 보낸다.[axios / signin]  DB에 존재하는 유저인지 확인한다.
  // 필요할 때, DB에서 프로필 정보와 토큰을 꺼내서 클라이언트가 받는다. [axios / get]

  // 2. 회원가입 해야하는 유저
  // 2-1. [엑세스토큰]을 담아서 서버에 로그인 요청을 보낸다.[axios / signin]  DB에 존재하는 유저인지 확인한다.
  // 2-2. 404 받았으면 없는 유저! 회원가입 시킨다. - 로그인 후 닉네임 입력 모달로 보냄 - [엑세스토큰 + 닉네임]을 서버로 보낸다 [axios / signup]
  // 서버는 accessToken으로 구글에 api 요청을해서 사용자의 프로필을 얻어와 DB에 저장
  // 필요할 때, DB에서 프로필 정보와 토큰을 꺼내서 클라이언트가 받는다. [axios / get]

  const responseGoogle = (response: any) => {
    console.log('GoogleLogin response: ', response);
    console.log('accessToken: ', response.accessToken);
    console.log('email: ', response.profileObj.email);
    console.log('profile image: ', response.profileObj.imageUrl);

    // 1-1. 토큰으로 서버에 로그인 요청

    // const config = { headers: { authorization: `Bearer ${response.accessToken}` } };
    // server.post('/users/google/signin', config);

    // // 2-2. if(없는 유저면) 닉네임 모달 켜준다 -> 닉네임과 함께 회원가입 요청
    // const config = { headers: { nickname: 'nickname', authorization: `Bearer ${response.accessToken}` } };
    // server.post('/users/google/signup', config);
  };

  const logout = () => {
    console.log('logout success');
  };

  return (
    <div>
      <GoogleLogin
        clientId={googleKey}
        render={(renderProps: any) => (
          <button
            type="button"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            style={{ backgroundColor: '#DB4437', color: 'white', border: 'none' }}
          >
            Google Login
          </button>
        )}
        buttonText="Login"
        onSuccess={(result) => responseGoogle(result)}
        onFailure={(result) => console.log('failure', result)}
        cookiePolicy="single_host_origin"
      />
      <GoogleLogout clientId={googleKey} buttonText="Logout" onLogoutSuccess={logout}>
        Logout
      </GoogleLogout>
    </div>
  );
}

export default GoogleSignIn;
