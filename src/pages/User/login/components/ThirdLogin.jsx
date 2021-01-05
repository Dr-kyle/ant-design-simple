import React, { useEffect } from 'react';
import { connect } from 'umi';
import { getPageQuery } from '@/utils/utils';

const AuthRedirect = (props) => {

  const getUserData = (params) => {
    const {dispatch} = props;
    dispatch({
      type: 'login/thirdLogin',
      payload: { ...params },
    });
  }

  useEffect(() => {
    // componentDidMount
    const params = getPageQuery();
    // getUserData(params);
    console.log('AuthRedirect', params);
    getUserData(params);
  }, []);
  return (
    <div>loading</div>
  );
};

// const mapDispatchToProps = (state) => {
//   return {
//     login: state.login
//     // getUserData: (params) => {
//     //   dispatch({
//     //     type: 'login/thirdLogin',
//     //     payload: { params },
//     //   });
//     // }
//   }
// }

// 绑定数据到组件
// export default connect(mapDispatchToProps)(AuthRedirect);
export default connect(({ login}) => ({
  login
}))(AuthRedirect);
