import Vue from 'vue'
import VueRouter from 'vue-router'

//Seller Pages
const SellerProfilePage = () => import('@/views/profile/SellerProfile.vue')
const SubscriberListPage = () => import('@/views/newsletter/SubscriberListPage.vue')
const MarketingWorkflowPage = () => import('@/views/marketing/MarketingWorkflowPage.vue')
const FaqPage = () => import('@/views/faq/seller/FaqPage.vue')
const DailySalesPage = () => import('@/views/analytics/DailySalesPage.vue')
const GenerateQrPage = () => import('@/views/qr/GenerateQrPage.vue')
const SellerBestPage = () => import('@/views/analytics/SellerBestPage.vue')
const SellerMailPage = () => import('@/views/marketing/MailPage.vue')
const SellerFavoritePage = () => import('@/views/favorite/SellerFavoritePage.vue')

//Buyer Pages
const BuyerProfilePage = () => import('@/views/profile/BuyerProfile.vue')
const RegisterPage = () => import('@/views/qr/Register.vue')

//User Pages
const PublicProfilePage = () => import('@/views/profile/PublicProfile.vue')
const UserFaqPage = () => import('@/views/faq/user/FaqPage.vue')

//Error pages
const Error404Page = () => import('@/views/error/Error404.vue')

//Routers
const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/seller',
      name: 'Seller',
      component: {
        render(c) { return c('router-view') }
      },
      props: true,
      children: [
        {
          path: ':username/profile',
          name: 'Profile',
          component: SellerProfilePage,
          props: true,
        },
        {
          path: ':username/subscribers',
          name: 'Subscribers',
          component: SubscriberListPage,
          props: true,
        },
        {
          path: ':username/workflows',
          name: 'Marketing Workflows',
          component: MarketingWorkflowPage,
          props: true,
        },
        {
          path: ':username/faqs',
          name: 'FAQ Questions',
          component: FaqPage,
          props: true,
          meta: {
            layout: 'full',
          },
        },
        {
          path: ':username/sales',
          name: 'Daily Sales',
          component: DailySalesPage,
          props: true,
          meta: {
            layout: 'full',
          },
        },
        {
          path: 'qrcode',
          name: 'QR Code',
          component: GenerateQrPage,
          props: true,
          meta: {
            layout: 'full',
          },
        },
        {
          path: 'best',
          name: 'Best Seller',
          component: SellerBestPage,
          props: true,
          meta: {
            layout: 'full',
          },
        },
        {
          path: ':username/mail',
          name: 'Seller Mail',
          component: SellerMailPage,
          props: true,
          meta: {
            layout: 'full',
          },
        },
        {
          path: ':username/favorites',
          name: 'Seller Favorites',
          component: SellerFavoritePage,
          props: true,
          meta: {
            layout: 'full',
          },
        },
      ]
    },
    {
      path: '/buyer',
      name: 'Buyer',
      component: {
        render(c) { return c('router-view') }
      },
      props: true,
      children: [
        {
          path: ':username/profile',
          name: 'Profile',
          component: BuyerProfilePage,
          props: true,
        },
        {
          path: 'register/:seller_id/:buyer_id',
          name: 'Register',
          component: RegisterPage,
          props: true,
          meta: {
            layout: 'full',
          },
        },
      ]
    },
    {
      path: '/user',
      name: 'User',
      component: {
        render(c) { return c('router-view') }
      },
      props: true,
      children: [
        {
          path: ':username/profile',
          name: 'Profile',
          component: PublicProfilePage,
          props: true,
          meta: {
            layout: 'full',
          },
        },
        {
          path: ':username/faqs',
          name: 'FAQ Questions',
          component: UserFaqPage,
          props: true,
          meta: {
            layout: 'full',
          },
        }
      ]
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: Error404Page,
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

Vue.use(VueRouter)

export default router
