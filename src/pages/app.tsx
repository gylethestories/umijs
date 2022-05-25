import { history } from 'umi';

let extraRoutes;

// 动态添加路由
export function patchRoutes({ routes }) {
  console.log('添加前', routes);
  routes.unshift({
    path: '/foo',
    component: require('@/pages/user1').default,
  });

  console.log('添加后', routes);

  // 合并服务端返回的路由
  extraRoutes.map((item) => {
    routes.unshift({
      path: item.path,
      component: require(`@/pages${item.component}`).default,
    });
  });
}

// 覆写 render,会在patchRoutes之前执行
export function render(oldRender) {
  // 模拟从服务端请求获取的 数据

  //   fetch('/api/routes').then(res=>res.json()).then((res) => {

  //   })
  extraRoutes = [{ path: '/server', component: '/user2' }];

  // 渲染之前,做一些权限管理
  const isLogin = false;
  if (!isLogin) {
    history.push('/login');
  }

  oldRender();
}


export function onRouteChange({ matchedRoutes }) {
    if (matchedRoutes.length) {
      document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
    }
  }