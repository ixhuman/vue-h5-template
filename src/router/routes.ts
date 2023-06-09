export const routes = [
  // {
  //   path: '/',
  //   redirect: '/home',
  //   component: () => import('/@/layout/basic/index.vue'),
  //   children: [
  //     {
  //       path: 'home',
  //       component: () => import('/@/views/home/index.vue'),
  //       meta: {
  //         title: 'tabbar.home',
  //         keepAlive: true,
  //       },
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('/@/views/list/index.vue'),
  //       meta: {
  //         title: 'tabbar.list',
  //         keepAlive: true,
  //       },
  //     },
  //     {
  //       path: 'member',
  //       component: () => import('/@/views/member/index.vue'),
  //       meta: {
  //         title: 'tabbar.member',
  //         keepAlive: true,
  //       },
  //     },
  //     {
  //       path: 'demo',
  //       component: () => import('/@/views/demo/index.vue'),
  //       meta: {
  //         title: 'tabbar.demo',
  //         keepAlive: true,
  //       },
  //     },
  //     {
  //       name: 'listDetails',
  //       path: '/details',
  //       component: () => import('/@/views/list/details/index.vue'),
  //       meta: {
  //         title: 'list.details',
  //         border: false,
  //       },
  //     },
  //   ],
  // },
  {
    path: '/',
    redirect: '/index',
  },
  {
    name: 'index',
    path: '/index',
    component: () => import('/@/views/index/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'makeQuestion',
    path: '/make-question',
    component: () => import('/@/views/make-question/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'questionBank',
    path: '/question-bank',
    component: () => import('/@/views/question-bank/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  // {
  //   name: 'questionLib',
  //   path: '/question-lib',
  //   component: () => import('/@/views/make-question/libs.vue'),
  //   meta: {
  //     title: '',
  //     keepAlive: true,
  //   },
  // },
  {
    name: 'editQuestion',
    path: '/edit-question',
    component: () => import('/@/views/make-question/edit.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'setReward',
    path: '/set-reward',
    component: () => import('/@/views/make-question/reward.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'share',
    path: '/share',
    component: () => import('/@/views/share/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'myQuestion',
    path: '/my-question-record',
    component: () => import('/@/views/my-question/record.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'answerDetail',
    path: '/answer-detail',
    component: () => import('/@/views/my-question/detail.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'checkQuestion',
    path: '/check-question',
    component: () => import('/@/views/my-question/check.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'answerRecord',
    path: '/answer-record',
    component: () => import('/@/views/answer-record/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'answer',
    path: '/answer',
    component: () => import('/@/views/answer-question/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'answering',
    path: '/answering',
    component: () => import('/@/views/answer-question/doing.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'answerResult',
    path: '/answer-result',
    component: () => import('/@/views/answer-question/result.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('/@/views/login/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  // 匹配不到重定向会主页
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: '/Home',
  },
];

export default routes;
