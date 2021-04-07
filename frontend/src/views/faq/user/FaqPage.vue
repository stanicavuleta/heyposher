<template>
  <div>
    <!-- faq search section -->
    <section id="faq-search-filter">
      <b-card
        no-body
        class="faq-search"
        :style="{backgroundImage:`url(${require('@/assets/images/banner/banner.png')})`}"
      >
        <b-card-body class="text-center">
          <h2 class="text-primary">
            Let's answer some questions
          </h2>
          <b-card-text class="mb-2">
            or choose a category to quickly find the help you need
          </b-card-text>
        </b-card-body>
      </b-card>
    </section>
    <!--/ faq search section -->

    <!-- frequently asked questions tabs pills -->
    <section id="faq-tabs">
      <b-tabs
        vertical
        content-class="col-12 col-md-8 col-lg-9"
        pills
        nav-wrapper-class="faq-navigation col-md-4 col-lg-3 col-12"
        nav-class="nav-left"
      >

        <!-- payment tab -->
        <b-tab
          v-for="(categoryObj, categoryName, index) in faqData"
          :key="categoryName"
          :active="!index"
        >

          <!-- title -->
          <template #title>
            <feather-icon
              :icon="categoryObj.icon"
              size="18"
              class="mr-1"
            />
            <span class="font-weight-bold">{{ categoryObj.title }}</span>
          </template>

          <faq-question-answer :options="categoryObj" />
        </b-tab>
        <!--/ payment tab -->

        <!-- sitting lady image -->
        <template #tabs-end>
          <b-img
            fluid
            :src="require('@/assets/images/illustration/faq-illustrations.svg')"
            class="d-none d-md-block mt-auto"
          />
        </template>
        <!--/ sitting lady image -->
      </b-tabs>
    </section>
    <!--/ frequently asked questions tabs pills -->
  </div>
</template>

<script>
import {
  BCard, BCardBody, BForm, BInputGroup, BFormInput, BCardText, BInputGroupPrepend, BTabs, BTab, BImg, BRow, BCol, BAvatar,
} from 'bootstrap-vue'
import FaqQuestionAnswer from './FaqQuestionAnswer'

export default {
  props: ["username"],
  components: {
    BForm,
    BCard,
    BRow,
    BCol,
    BAvatar,
    BCardBody,
    BInputGroup,
    BFormInput,
    BCardText,
    BInputGroupPrepend,
    BTabs,
    BTab,
    BImg,
    FaqQuestionAnswer,
  },
  data() {
    return {
      faqData: {
        // payment
        payment: {
          icon: "CreditCardIcon",
          title: "Payment",
          subtitle: "Which license do I need?",
          qandA: [],
        },
        // delivery
        delivery: {
          icon: "ShoppingBagIcon",
          title: "Delivery",
          subtitle: "Which license do I need?",
          qandA: [],
        },
        // cancellation and return
        cancellationReturn: {
          icon: "RefreshCwIcon",
          title: "Cancellation & Return",
          subtitle: "Which license do I need?",
          qandA: [],
        },
        // my orders
        myOrders: {
          icon: "PackageIcon",
          title: "My Orders",
          subtitle: "Which license do I need?",
          qandA: [],
        },
        // product and services
        productServices: {
          icon: "SettingsIcon",
          title: "Product & Services",
          subtitle: "Which license do I need?",
          qandA: [],
        },
      },
    }
  },
  created() {
    let data = {
        username: this.username,
        question_schema: this.faqData
    }

    this.$http.post("/api/user_questions", data).then(response => {
        this.faqData = response.data
        console.log(response.data)
    }).catch(error => {
        console.log(error)
    })
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-faq.scss';
</style>
