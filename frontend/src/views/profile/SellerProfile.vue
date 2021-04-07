<template>
<b-row>
    <b-col cols="3">
  <b-card
    img-src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/banner-12.3bf1dcd0.jpg"
    img-alt="Profile Cover Photo"
    img-top
    class="card-profile"
    style="height: 85vh"
  >
    <div class="profile-image-wrapper">
      <div class="profile-image p-0">
        <b-avatar
          size="114"
          variant="light"
          src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/avatar-s-9.e2785e7a.jpg"
        />
      </div>
    </div>
    <h3>{{user.first_name + ' ' + user.last_name}}</h3>
    <h6 class="text-muted">
      {{ user.username }}
    </h6>
    <b-badge
      class="profile-badge"
      variant="light-primary"
    >
      Seller
    </b-badge>
    <br>
    <hr>
    <b-media
        no-body
      >
        <b-media-aside class="mr-1">
          <b-avatar
            rounded
            variant="light-primary"
            size="34"
          >
            <feather-icon
              icon="EmailIcon"
              size="18"
            />
          </b-avatar>
        </b-media-aside>
        <b-media-aside>
          <h6 class="mt-1">
             {{ user.email }}
          </h6>
        </b-media-aside>
      </b-media>
       <b-media
        no-body
      >
        <b-media-aside class="mr-1">
          <b-avatar
            rounded
            variant="light-primary"
            size="34"
          >
            <feather-icon
              icon="PhoneIcon"
              size="18"
            />
          </b-avatar>
        </b-media-aside>
        <b-media-aside>
          <h6 class="mt-1">
             {{ user.phone }}
          </h6>
        </b-media-aside>
      </b-media>
    <hr class="mb-2">

    <!-- follower projects rank -->
    <div class="justify-content-between align-items-center">
      <div>
        <h6 class="text-muted font-weight-bolder">
          Total Price
        </h6>
        <h3 class="mb-0">
          10.3k
        </h3>
      </div>
      <hr>
      <div>
        <h6 class="text-muted font-weight-bolder">
          Total number of products
        </h6>
        <h3 class="mb-0">
          156
        </h3>
      </div>
      <hr>
      <div>
        <h6 class="text-muted font-weight-bolder">
          Poshmark score
        </h6>
        <h3 class="mb-0">
          23
        </h3>
      </div>
      <hr>
    </div>
    <!--/ follower projects rank -->
  </b-card>
    </b-col>
    <b-col cols="6">
        <b-card
    class="card-transaction"
    no-body
    style="height: 85vh; overflow: auto"
  >
    <b-card-header>
      <b-card-title>Products</b-card-title>
      <feather-icon
        icon="MoreVerticalIcon"
        size="18"
        class="cursor-pointer"
      />
    </b-card-header>

    <b-card-body>
      <div
        v-for="(transaction, index) in transactionData"
        :key="index"
        class="transaction-item"
      >
        <b-media no-body>
          <b-media-aside>
            <b-avatar
              rounded
              size="42"
              :variant="transaction.avatarVariant"
            >
              <feather-icon
                size="18"
                :icon="transaction.avatar"
              />
            </b-avatar>
          </b-media-aside>
          <b-media-body>
            <h6 class="transaction-title">
              {{ transaction.mode }}
            </h6>
            <small>{{ transaction.types }}</small>
          </b-media-body>
        </b-media>
        <div
          class="font-weight-bolder"
          :class="transaction.deduction ? 'text-danger':'text-success'"
        >
          {{ transaction.payment }}
        </div>
      </div>
    </b-card-body>
  </b-card>
    </b-col>
    <b-col cols="3">
        <b-card
    class="card-employee-task"
    no-body
    style="height: 85vh; overflow: auto"
  >
    <b-card-header>
      <b-card-title>Buyers</b-card-title>
      <feather-icon
        icon="MoreVerticalIcon"
        size="18"
        class="cursor-pointer"
      />
    </b-card-header>

    <b-card-body>
      <div
        v-for="(employee,index) in employeeData"
        :key="employee.userFullName"
        class="employee-task d-flex justify-content-between align-items-center"
      >
        <b-media no-body>
          <b-media-aside class="mr-75">
            <b-avatar
              rounded
              size="42"
              :src="employee.avatar"
            />
          </b-media-aside>
          <b-media-body class="my-auto">
            <h6 class="mb-0">
              {{ employee.userFullName }}
            </h6>
            <small>{{ employee.designation }}</small>
          </b-media-body>
        </b-media>
        <div class="d-flex align-items-center">
          <small class="text-muted mr-75">{{ employee.duration }}</small>

          <!-- chart -->
          <vue-apex-charts
            type="radialBar"
            height="30"
            width="30"
            :options="chartData[index].options"
            :series="chartData[index].series"
          />
        </div>
      </div>
    </b-card-body>
  </b-card>
    </b-col>
</b-row>
</template>

<script>
import {
  BCard, BAvatar, BBadge, BRow, BCol, BCardHeader, BCardTitle, BCardBody, BMediaBody, BMedia, BMediaAside,
} from 'bootstrap-vue'
import axios from 'axios'

import store from '@/store'

import { $themeColors } from '@themeConfig'
import VueApexCharts from 'vue-apexcharts'

const $trackBgColor = '#e9ecef'

export default {
  props: ['username'],
  components: {
    BCard,
    BBadge,
    BAvatar,
    BRow,
    BCol,
    BCardHeader,
    BCardTitle,
    BCardBody,
    BMediaBody,
    BMedia,
    BMediaAside,
    VueApexCharts
  },
  data() {
    return {
        chartColor: [$themeColors.primary, $themeColors.danger, $themeColors.success, $themeColors.secondary, $themeColors.warning, $themeColors.primary],
      chartSeries: [45, 65, 60, 35, 65, 80],
        chart: {
        series: [65],
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: [$themeColors.primary],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%',
              },
              track: {
                background: $trackBgColor,
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: 'round',
          },
        },
      },
        chartData: [],
        employeeData: [
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
          userFullName: 'Ryan Harrington',
          designation: 'iOS Developer',
          duration: '9hr 20m',
        },
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-20.jpg'),
          userFullName: 'Louisa Norton',
          designation: 'UI Designer',
          duration: '4hr 17m',
        },
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-1.jpg'),
          userFullName: 'Jayden Duncan',
          designation: 'Java Developer',
          duration: '12hr 8m',
        },
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-20.jpg'),
          userFullName: 'Cynthia Howell',
          designation: 'Anguler Developer',
          duration: '3hr 19m',
        },
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-16.jpg'),
          userFullName: 'Helena Payne',
          designation: 'Marketing',
          duration: '9hr 50m',
        },
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-13.jpg'),
          userFullName: 'Troy Jensen',
          designation: 'iOS Developer',
          duration: '4hr 48m',
        },
      ],
      user: {},
      transactionData: [
        {
          mode: 'Wallet',
          types: 'Starbucks',
          avatar: 'PocketIcon',
          avatarVariant: 'light-primary',
          payment: '-$74',
          deduction: true,
        },
        {
          mode: 'Bank Transfer',
          types: 'Add Money',
          avatar: 'CheckIcon',
          avatarVariant: 'light-success',
          payment: '+$480',
          deduction: false,
        },
        {
          mode: 'Paypal',
          types: 'Add Money',
          avatar: 'DollarSignIcon',
          avatarVariant: 'light-danger',
          payment: '+$480',
          deduction: false,
        },
        {
          mode: 'Mastercard',
          types: 'Ordered Food',
          avatar: 'CreditCardIcon',
          avatarVariant: 'light-warning',
          payment: '-$23',
          deduction: true,
        },
        {
          mode: 'Transfer',
          types: 'Refund',
          avatar: 'TrendingUpIcon',
          avatarVariant: 'light-info',
          payment: '+$98',
          deduction: false,
        },
        {
          mode: 'Wallet',
          types: 'Starbucks',
          avatar: 'PocketIcon',
          avatarVariant: 'light-primary',
          payment: '-$74',
          deduction: true,
        },
        {
          mode: 'Bank Transfer',
          types: 'Add Money',
          avatar: 'CheckIcon',
          avatarVariant: 'light-success',
          payment: '+$480',
          deduction: false,
        },
        {
          mode: 'Paypal',
          types: 'Add Money',
          avatar: 'DollarSignIcon',
          avatarVariant: 'light-danger',
          payment: '+$480',
          deduction: false,
        },
        {
          mode: 'Mastercard',
          types: 'Ordered Food',
          avatar: 'CreditCardIcon',
          avatarVariant: 'light-warning',
          payment: '-$23',
          deduction: true,
        },
        {
          mode: 'Transfer',
          types: 'Refund',
          avatar: 'TrendingUpIcon',
          avatarVariant: 'light-info',
          payment: '+$98',
          deduction: false,
        },
        {
          mode: 'Wallet',
          types: 'Starbucks',
          avatar: 'PocketIcon',
          avatarVariant: 'light-primary',
          payment: '-$74',
          deduction: true,
        },
        {
          mode: 'Bank Transfer',
          types: 'Add Money',
          avatar: 'CheckIcon',
          avatarVariant: 'light-success',
          payment: '+$480',
          deduction: false,
        },
        {
          mode: 'Paypal',
          types: 'Add Money',
          avatar: 'DollarSignIcon',
          avatarVariant: 'light-danger',
          payment: '+$480',
          deduction: false,
        },
        {
          mode: 'Mastercard',
          types: 'Ordered Food',
          avatar: 'CreditCardIcon',
          avatarVariant: 'light-warning',
          payment: '-$23',
          deduction: true,
        },
        {
          mode: 'Transfer',
          types: 'Refund',
          avatar: 'TrendingUpIcon',
          avatarVariant: 'light-info',
          payment: '+$98',
          deduction: false,
        },
      ],
    }
  },
  created() {
    axios.get(`${this.$store.state.app.apiURL}/api/seller/${this.username}`).then(response => {
      this.user = response.data
      store.commit('app/UPDATE_USER', this.user)
    }).catch(error => {
      console.log(error)
    })
    
    for (let i = 0; i < this.employeeData.length; i += 1) {
      const chartClone = JSON.parse(JSON.stringify(this.chart))
      chartClone.options.colors[0] = this.chartColor[i]
      chartClone.series[0] = this.chartSeries[i]
      this.chartData.push(chartClone)
    }
  },
}
</script>
