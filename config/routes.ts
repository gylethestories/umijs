export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages/Index/index' },
      {
        path: '/user',
        wrappers: ['@/wrappers/auth'],
        routes: [
          {
            path: '/user/one',
            component: '@/pages/user1',
            title: '用户页面一',
          },
          {
            path: '/user/two',
            component: '@/pages/user2',
            title: '用户页面二',
          },
          { component: '@/pages/404' },
        ],
      },
      {
        path: '/dva',
        component: '@/pages/dva',
      },
    ],
  },
  { path: '/login', component: '@/pages/login' },
  { component: '@/pages/404' },
];
