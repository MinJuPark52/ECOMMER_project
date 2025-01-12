import React from "react";

const KakaoLogin = () => {
  const redirect_uri = "https://ecommer.vercel.app/";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <>
      <button
        onClick={handleLogin}
        style={{ border: "none", backgroundColor: "transparent" }}
      >
        <img src="/kakao_login_medium_narrow.png" />
      </button>
    </>
  );
};
export default KakaoLogin;
