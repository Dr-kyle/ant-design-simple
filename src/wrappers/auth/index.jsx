import React from 'react';
import { Redirect } from 'umi';

export default (props) => {
  // const { isLogin } = useAuth();
  console.log('isLogin', 'true');
  const isLogin = true;
  if (isLogin) {
    return <div>{props.children}</div>;
  }
  return <Redirect to="/login" />;
}
