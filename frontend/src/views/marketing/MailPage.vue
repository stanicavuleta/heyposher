<template>
<div>
    <section id="faq-search-filter" class="mail-title">
      <b-card
        no-body
        class="faq-search"
        :style="{backgroundImage:`url(${require('@/assets/images/banner/banner.png')})`}"
      >
        <b-card-body class="text-center">
          <h2 class="text-primary">
            Let's answer some questions
          </h2>
          <b-card-text>
            or choose a category to quickly find the help you need
          </b-card-text>
        </b-card-body>
      </b-card>
    </section>
    <section id="faq-tabs">
<b-row>
    <b-col cols="12" class="px-3">
  <div>
    <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      finish-button-text="Save"
      back-button-text="Previous"
      class="steps-transparent mb-3"
      @on-complete="saveMailSettings"
    >
      <!-- account detail tab -->
      <tab-content
        title="Personal Info"
        icon="feather icon-user"
        :before-change="validationForm"
      >
      <validation-observer
          ref="personelRules"
          tag="form"
        >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Account Details
            </h5>
            <small class="text-muted">
              Enter Your Account Details.
            </small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="First Name"
              label-for="i-username"
            >
            <validation-provider
                  #default="{ errors }"
                  name="first_name"
                  rules="required"
                >
              <b-form-input
                id="i-username"
                placeholder="John"
                v-model="first_name"
                :state="errors.length > 0 ? false:null"
              />
              <small v-if="errors.length > 0" class="text-danger">First name is required</small>
                </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Last Name"
              label-for="i-email"
            >
            <validation-provider
                  #default="{ errors }"
                  name="last_name"
                  rules="required"
                >
              <b-form-input
                id="i-email"
                placeholder="Doe"
                v-model="last_name"
                :state="errors.length > 0 ? false:null"
              />
              <small v-if="errors.length > 0" class="text-danger">Last name is required</small>
                </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
      </validation-observer>
      </tab-content>

      <!-- personal details -->

      <tab-content
        title="Contact Info"
        icon="feather icon-phone"
        :before-change="validationContactForm"
      >
      <validation-observer
          ref="contactRules"
          tag="form"
        >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Contact Details
            </h5>
            <small class="text-muted">
              Enter Your Contact Details.
            </small>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Poshmark store"
              label-for="i-password"
            >
            <validation-provider
                  #default="{ errors }"
                  name="poshmark_store"
                  rules="required|url"
                >
              <b-form-input
                id="i-password"
                placeholder="https://poshmark.com/closet/yomra"
                v-model="poshmark_store"
                :state="errors.length > 0 ? false:null"
              />
              <small v-if="errors.length > 0" class="text-danger">Poshmark store is required and must be url</small>
                </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Web Site"
              label-for="i-c-password"
            >
              <b-form-input
                id="i-c-password"
                placeholder="www.yomra.com"
                v-model="web_site"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="E-Mail"
              label-for="i-c-password"
            >
              <b-form-input
                id="i-c-password"
                placeholder="yomra@hotmail.com"
                v-model="mail"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </validation-observer>
      </tab-content>

      <!-- social link -->
      <tab-content
        title="Social Links"
        icon="feather icon-link"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Social Links
            </h5>
            <small class="text-muted">Enter Your Social Links</small>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Twitter"
              label-for="i-twitter"
            >
              <b-form-input
                id="i-twitter"
                placeholder="https://twitter.com/abc"
                v-model="twitter_url"
              />
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Facebook"
              label-for="i-facebook"
            >
              <b-form-input
                id="i-facebook"
                placeholder="https://facebook.com/abc"
                v-model="facebook_url"
              />
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group
              label="Instagram"
              label-for="i-google-plus"
            >
              <b-form-input
                id="i-google-plus"
                placeholder="https://instagram.com/abc"
                v-model="instagram_url"
              />
            </b-form-group>
          </b-col>

        </b-row>
      </tab-content>

      <tab-content
        title="Mail Template"
        icon="feather icon-file-text"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Mail Template
            </h5>
            <small class="text-muted">Enter Your Personal Info.</small>
          </b-col>
          <b-col md="3">
          </b-col>
          <b-col md="6">
              <body style="margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased; --bg-opacity: 1; background-color: #eceff1; background-color: rgba(236, 239, 241, var(--bg-opacity));">
                    <div style="display: none;">Your account on PixInvent is deactivated.</div>
                    <div role="article" aria-roledescription="email" aria-label="Account Deactivated 😔" lang="en">
                    <table style="font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; width: 100%;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                        <td align="center" style="--bg-opacity: 1; background-color: #eceff1; background-color: rgba(236, 239, 241, var(--bg-opacity)); font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;" bgcolor="rgba(236, 239, 241, var(--bg-opacity))">
                            <table class="sm-w-full" style="font-family: 'Montserrat',Arial,sans-serif; width: 600px;" width="600" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                                <td class="sm-py-32 sm-px-24" style="font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; padding: 48px; text-align: center;" align="center">
                                <a href="https://1.envato.market/vuexy_admin">
                                    <img src="https://d2gjrq7hs8he14.cloudfront.net/webpack4/logo@2x-8d56700bf4acf5930388f3bea97c0260.png" width="155" alt="Vuexy Admin" style="border: 0; max-width: 100%; line-height: 100%; vertical-align: middle;">
                                </a>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" class="sm-px-24" style="font-family: 'Montserrat',Arial,sans-serif;">
                                <table style="font-family: 'Montserrat',Arial,sans-serif; width: 100%;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                    <td class="sm-px-24" style="--bg-opacity: 1; background-color: #ffffff; background-color: rgba(255, 255, 255, var(--bg-opacity)); border-radius: 4px; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; font-size: 14px; line-height: 24px; padding: 48px; text-align: left; --text-opacity: 1; color: #626262; color: rgba(98, 98, 98, var(--text-opacity));" bgcolor="rgba(255, 255, 255, var(--bg-opacity))" align="left">
                                        <p style="font-weight: 600; font-size: 18px; margin-bottom: 0;">Hey</p>
                                        <p style="font-weight: 700; font-size: 20px; margin-top: 0; --text-opacity: 1; color: #ff5850; color: rgba(255, 88, 80, var(--text-opacity));">John Doe!</p>
                                        <p class="sm-leading-32" style="font-weight: 600; font-size: 20px; margin: 0 0 16px; --text-opacity: 1; color: #263238; color: rgba(38, 50, 56, var(--text-opacity));">
                                        Your account is deactivated! 😔
                                        </p>
                                        <p>Your account is deactivated due to one of the following reason:</p>
                                        <ul :style="(mail != null && mail != '') ? 'margin-bottom: 24px;' : ''">
                                        <li>You have deactivated your account yourself.</li>
                                        <li>PixInvent staff deactivated your account due to policy violation.</li>
                                        </ul>
                                        <p v-if="mail != null && mail != ''" style="margin: 0;">
                                        If you did not intend to deactivate your account or need our help keeping the account, please
                                        contact us at
                                        <a :href="'mailto:' + mail" class="hover-underline" style="--text-opacity: 1; color: #7367f0; color: rgba(115, 103, 240, var(--text-opacity)); text-decoration: none;">{{ mail }}</a>
                                        </p>
                                        <table style="font-family: 'Montserrat',Arial,sans-serif; width: 100%;" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                            <td style="font-family: 'Montserrat',Arial,sans-serif; padding-top: 32px; padding-bottom: 32px;">
                                            <div style="--bg-opacity: 1; background-color: #eceff1; background-color: rgba(236, 239, 241, var(--bg-opacity)); height: 1px; line-height: 1px;">&zwnj;</div>
                                            </td>
                                        </tr>
                                        </table>
                                        <p style="margin: 0 0 16px;">
                                        Please visit my poshmark 
                                        <a :href="poshmark_store" class="hover-underline" style="--text-opacity: 1; color: #7367f0; color: rgba(115, 103, 240, var(--text-opacity)); text-decoration: none;">here</a>.
                                        </p>
                                        <p style="margin: 0 0 16px;">Thanks, <br>{{ first_name + ' ' + last_name }}</p>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td style="font-family: 'Montserrat',Arial,sans-serif; height: 20px;" height="20"></td>
                                    </tr>
                                    <tr>
                                    <td style="font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; font-size: 12px; padding-left: 48px; padding-right: 48px; --text-opacity: 1; color: #eceff1; color: rgba(236, 239, 241, var(--text-opacity));">
                                        <p align="center" style="cursor: default; margin-bottom: 16px;">
                                        <a :href="facebook_url" style="--text-opacity: 1; color: #263238; color: rgba(38, 50, 56, var(--text-opacity)); text-decoration: none;"><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png" width="17" alt="Facebook" style="border: 0; max-width: 100%; line-height: 100%; vertical-align: middle; margin-right: 12px;"></a>
                                        &bull;
                                        <a :href="twitter_url" style="--text-opacity: 1; color: #263238; color: rgba(38, 50, 56, var(--text-opacity)); text-decoration: none;"><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png" width="17" alt="Twitter" style="border: 0; max-width: 100%; line-height: 100%; vertical-align: middle; margin-right: 12px;"></a>
                                        &bull;
                                        <a :href="instagram_url" style="--text-opacity: 1; color: #263238; color: rgba(38, 50, 56, var(--text-opacity)); text-decoration: none;"><img src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-04-512.png" width="17" alt="Instagram" style="border: 0; max-width: 100%; line-height: 100%; vertical-align: middle; margin-right: 12px;"></a>
                                        </p>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td style="font-family: 'Montserrat',Arial,sans-serif; height: 16px;" height="16"></td>
                                    </tr>
                                </table>
                                </td>
                            </tr>
                            </table>
                        </td>
                        </tr>
                    </table>
                    </div>
                </body>
          </b-col>
          <b-col md="3">
          </b-col>
        </b-row>
      </tab-content>
    </form-wizard>

  </div>
    </b-col>
</b-row>
</section>
</div>
</template>

<script>
import { FormWizard, TabContent, } from 'vue-form-wizard'
import vSelect from 'vue-select'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BCardBody,
  BCardText,
  BCard,
  BFormInvalidFeedback
} from 'bootstrap-vue'
import { codeIconInfo } from './code'
import { required, url } from '@validations'

export default {
  props: ["username"],
  components: {
    FormWizard,
    TabContent,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    vSelect,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
    BCardBody,
    BCardText,
    BCard,
    ValidationProvider,
    ValidationObserver,
    BFormInvalidFeedback
  },
  data() {
    return {
        mail: "",
        required,
        url,
        first_name: "",
        last_name: "",
        poshmark_store: "",
        web_site: "",
        twitter_url: "",
        facebook_url: "",
        instagram_url: "",
      selectedContry: 'select_value',
      selectedLanguage: 'nothing_selected',
      codeIconInfo,
      countryName: [
        { value: 'select_value', text: 'Select Value' },
        { value: 'Russia', text: 'Russia' },
        { value: 'Canada', text: 'Canada' },
        { value: 'China', text: 'China' },
        { value: 'United States', text: 'United States' },
        { value: 'Brazil', text: 'Brazil' },
        { value: 'Australia', text: 'Australia' },
        { value: 'India', text: 'India' },
      ],
      languageName: [
        { value: 'nothing_selected', text: 'Nothing Selected' },
        { value: 'English', text: 'English' },
        { value: 'Chinese', text: 'Mandarin Chinese' },
        { value: 'Hindi', text: 'Hindi' },
        { value: 'Spanish', text: 'Spanish' },
        { value: 'Arabic', text: 'Arabic' },
        { value: 'Malay', text: 'Malay' },
        { value: 'Russian', text: 'Russian' },
      ],
    }
  },
  methods: {
    saveMailSettings() {

      let data = {
        username: this.username,
        template: {
        first_name: this.first_name,
        last_name: this.last_name,
        poshmark_store: this.poshmark_store,
        mail: this.mail,
        web_site: this.web_site,
        twitter_url: this.twitter_url,
        facebook_url: this.facebook_url,
        instagram_url: this.instagram_url
      }
      }

      this.$http.post("/api/save_user_email_template", data).then(response => {
        if (response.status === 200) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Save Success',
              icon: 'EditIcon',
              variant: 'success',
            },
          })
        }
      }).catch(error => {
        console.log(error)
        this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Save Failed',
          icon: 'EditIcon',
          variant: 'danger',
        },
      })
      })

      
    },
    validationForm() {
      return new Promise((resolve, reject) => {
        this.$refs.personelRules.validate().then(success => {
          if (success) {
            resolve(true)
          } else {
            reject()
          }
        })
      })
    },
    validationContactForm() {
      return new Promise((resolve, reject) => {
        this.$refs.contactRules.validate().then(success => {
          if (success) {
            resolve(true)
          } else {
            reject()
          }
        })
      })
    }
  },
  created() {
    let data = {
      username: this.username
    }

    this.$http.post("/api/user_email_template", data).then(response => {
        let data = response.data
        if (response.status === 200 && data != null) {
          this.first_name = data.first_name
          this.last_name = data.last_name
          this.poshmark_store = data.poshmark_store
          this.mail = data.mail
          this.web_site = data.web_site
          this.twitter_url = data.twitter_url
          this.facebook_url = data.facebook_url
          this.instagram_url = data.instagram_url
        }
      }).catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss">
  @import '@core/scss/vue/libs/vue-wizard.scss';
  @import '@core/scss/vue/libs/vue-select.scss';
</style>

<style lang="scss">
@import '@core/scss/vue/pages/page-faq.scss';

@media only screen and (min-width: 992px) {
  .mail-title .card-body{
    padding: 5rem !important;
    }
}

</style>

<style scoped>
.hover-underline:hover {
        text-decoration: underline !important;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes ping {

        75%,
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }

      @keyframes pulse {
        50% {
          opacity: .5;
        }
      }

      @keyframes bounce {

        0%,
        100% {
          transform: translateY(-25%);
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }

        50% {
          transform: none;
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      }

      @media (max-width: 600px) {
        .sm-leading-32 {
          line-height: 32px !important;
        }

        .sm-px-24 {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }

        .sm-py-32 {
          padding-top: 32px !important;
          padding-bottom: 32px !important;
        }

        .sm-w-full {
          width: 100% !important;
        }
      }
</style>
