<template>
  <div v-if="loading" class="d-flex justify-content-center" style="margin-top: 250px">
      <img :src="require('@/assets/gif/loading.gif')" height="300">
  </div>
  <div v-else class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo">
        <vuexy-logo />

        <h2 class="brand-text text-primary ml-1">
          Heyposher
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Register V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Register-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            title-tag="h2"
            class="font-weight-bold mb-1"
          >
            Create account
          </b-card-title>
          <b-card-text class="mb-2">
            Make your app management easy and fun!
          </b-card-text>
          <validation-observer ref="registerForm">
            <b-form class="auth-register-form mt-2">
              <!-- username -->
              <b-form-group>
                <validation-provider
                  name="Username"
                  rules="required"
                >
                  <b-form-input
                    id="register-username"
                    v-model="username"
                    name="register-username"
                    placeholder="Username"
                    readonly
                  />
                </validation-provider>
                </b-form-group>

                <b-row>
                    <b-col cols="6">
                        <b-form-group>
                <validation-provider
                  name="FirstName"
                  rules="required"
                >
                  <b-form-input
                    id="register-first-name"
                    v-model="firstName"
                    name="register-first-name"
                    placeholder="First name"
                  />
                </validation-provider>
                </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group>
                <validation-provider
                  name="LastName"
                  rules="required"
                >
                  <b-form-input
                    id="register-last-name"
                    v-model="lastName"
                    name="register-last-name"
                    placeholder="Last name"
                  />
                </validation-provider>
                </b-form-group>

                    </b-col>
                </b-row>

              <!-- email -->
              <b-form-group>
                <validation-provider
                  name="Email"
                  rules="required|email"
                >
                  <b-form-input
                    id="register-email"
                    v-model="userEmail"
                    name="register-email"
                    placeholder="E-mail"
                  />
                </validation-provider>
              </b-form-group>

              <!-- password -->
              <b-form-group>
                <validation-provider
                  name="Phone"
                  rules="required"
                >
                  <b-form-input
                    id="register-phone"
                    v-model="phone"
                    name="Phone"
                    type="number"
                    placeholder="Phone"
                  />
                </validation-provider>
              </b-form-group>

              <b-form-group>
                <b-form-checkbox
                  id="register-privacy-policy"
                  v-model="status"
                  name="checkbox-1"
                >
                  I agree to
                  <b-link>privacy policy & terms</b-link>
                </b-form-checkbox>
              </b-form-group>

              <b-button
                variant="primary"
                block
                type="submit"
                @click.prevent="validationForm"
              >
                Sign up
              </b-button>
            </b-form>
          </validation-observer>

          <p class="text-center mt-2">
            <span>Already have an account?</span>
            <b-link :to="{name:'auth-login-v2'}">
              <span>&nbsp;Sign in instead</span>
            </b-link>
          </p>

          <!-- divider -->
          <div class="divider my-2">
            <div class="divider-text">
              or
            </div>
          </div>

          <div class="auth-footer-btn d-flex justify-content-center">
            <b-button
              variant="facebook"
              href="javascript:void(0)"
            >
              <feather-icon icon="FacebookIcon" />
            </b-button>
            <b-button
              variant="twitter"
              href="javascript:void(0)"
            >
              <feather-icon icon="TwitterIcon" />
            </b-button>
            <b-button
              variant="google"
              href="javascript:void(0)"
            >
              <feather-icon icon="MailIcon" />
            </b-button>
            <b-button
              variant="github"
              href="javascript:void(0)"
            >
              <feather-icon icon="GithubIcon" />
            </b-button>
          </div>
        </b-col>
      </b-col>
    <!-- /Register-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow, BCol, BLink, BButton, BForm, BFormCheckbox, BFormGroup, BFormInput, BImg, BCardTitle, BCardText,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from 'axios'

export default {
  props: ['seller_id', 'buyer_id'],
  components: {
    VuexyLogo,
    BRow,
    BImg,
    BCol,
    BLink,
    BButton,
    BForm,
    BCardText,
    BCardTitle,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    // validations
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
      username: '',
      userEmail: '',
      phone: '',
      firstName: '',
      lastName: '',
      sideImg: require('@/assets/images/pages/register-v2.svg'),
      loading: true,
      // validation
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/register-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    validationForm() {
      this.$refs.registerForm.validate().then(success => {
        if (success && this.status) {
          const data = new FormData()
          data.append('username', this.username)
          data.append('email', this.userEmail)
          data.append('phone', this.phone)
          data.append('first_name', this.firstName)
          data.append('last_name', this.lastName)
          axios.post(`${this.$store.state.app.apiURL}/api/buyer`, data).then(() => {
            const formData = new FormData()
            formData.append('seller_id', this.seller_id)
            formData.append('buyer_id', this.buyer_id)
            axios.post(`${this.$store.state.app.apiURL}/api/register`, formData).then(() => {
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: 'Registration Successful',
                  icon: 'EditIcon',
                  variant: 'success',
                },
              })
              this.$router.push(`/buyer/${this.buyer_id}/profile`)
            }).catch(error => {
              console.log(error)
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: 'Registration Failed',
                  icon: 'AlertTriangleIcon',
                  variant: 'danger',
                },
              })
            })
          }).catch(error => {
            console.log(error)
            this.$toast({
              component: ToastificationContent,
              props: {
                title: 'Registration Failed',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            })
          })
        }
      })
    },
  },
  created() {
    this.username = this.buyer_id
    axios.get(`${this.$store.state.app.apiURL}/api/buyer/${this.buyer_id}`).then(response => {
      if (response.status === 200) {
        const data = new FormData()
        data.append('seller_id', this.seller_id)
        data.append('buyer_id', this.buyer_id)
        axios.post(`${this.$store.state.app.apiURL}/api/register`, data).then(responseRegister => {
          if (responseRegister.status === 200) {
            this.$toast({
              component: ToastificationContent,
              props: {
                title: 'Registration Successful',
                icon: 'EditIcon',
                variant: 'success',
              },
            })
            this.$router.push(`/buyer/${this.buyer_id}/profile`)
          } else if (responseRegister.status === 204) {
            this.$toast({
              component: ToastificationContent,
              props: {
                title: 'There are no sellers or buyers to register',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            })
          } else {
            this.$toast({
              component: ToastificationContent,
              props: {
                title: 'Registration Failed',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            })
          }
        }).catch(error => {
          console.log(error)
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Registration Failed',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
            },
          })
        })
      } else if (response.status === 204) {
        this.loading = false
      }
    }).catch(error => {
      console.log(error)
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Registration Failed',
          icon: 'AlertTriangleIcon',
          variant: 'danger',
        },
      })
    })
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
