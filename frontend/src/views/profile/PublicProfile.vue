<template>
    <div
      v-if="loading"
      class="d-flex justify-content-center"
      style="padding-top: 250px"
    >
      <b-spinner type="grow" style="width: 150px; height: 150px" />
    </div>
    <div v-else>
      <b-row>
        <b-col class="d-flex justify-content-center" style="padding-top: 40px">
          <b-avatar size="100px" :src="user.picture_url" badge="1" badge-variant="danger" class="avatar-badge" badge-offset="0.2em" />
          
        </b-col>
      </b-row>
      <b-row>
        <b-col class="d-flex justify-content-center">
        <div>
          <b-img
            v-for="star in user.best_seller"
            :key="star"
            src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/badge.0fa134b5.svg"
            alt="Medal Pic"
            style="width: 15px;"
          />
          </div>
        </b-col>
      </b-row>
      <template v-if="editMode">
        <b-button
          @click="saveProfile"
          variant="success"
          class="save-btn setting-btn"
          :disabled="savingProfile"
          ><feather-icon v-if="!savingProfile" icon="CheckIcon" />
          <b-spinner v-else small />
        </b-button>
        <b-button
          @click="editMode = false"
          variant="danger"
          class="back-btn setting-btn"
          ><feather-icon icon="XIcon"
        /></b-button>
      </template>
      <b-button
        v-else
        @click="editMode = true"
        variant="outline-light"
        class="edit-btn setting-btn"
        ><feather-icon icon="EditIcon"
      /></b-button>
      <a
        id="popover-setting-background"
        v-if="editMode"
        style="
          position: fixed;
          left: 20px;
          top: 20px;
          color: #fff;
          cursor: pointer;
        "
        class="setting-btn"
        ><feather-icon icon="SettingsIcon" />
        <b-popover
          target="popover-setting-background"
          triggers="hover"
          placement="right"
        >
          <template v-slot:title>Background Color</template>
          <color-picker
            :width="150"
            :height="150"
            v-model="backgroundColor"
          ></color-picker>
        </b-popover>
      </a>
      <b-row>
        <b-col class="d-flex justify-content-center mt-1">
          <h5 style="color: #fff">
            {{ user.full_name ? user.full_name : username }}
          </h5>
        </b-col>
      </b-row>
      <br />
      <div class="d-flex justify-content-center">
        <a
          :href="social.url"
          v-for="social in socials"
          :key="social.name"
          v-show="social.url != null && social.url != ''"
          ><feather-icon
            :icon="socialIcon(social.name)"
            class="pl-1 pr-1 social-icon"
            :style="'color: ' + iconColor"
        /></a>
      </div>
      <div class="d-flex justify-content-center">
        <a
          id="popover-setting-icon"
          style="color: #fff; cursor: pointer"
          v-if="editMode"
          class="setting-btn"
          ><feather-icon icon="SettingsIcon" />
          <b-popover
            target="popover-setting-icon"
            triggers="hover"
            placement="bottom"
          >
            <template v-slot:title>Social Icon Settings</template>
            <b-form-group>
              <div class="d-flex justify-content-center">
                <color-picker
                  class="mt-1"
                  :width="175"
                  :height="175"
                  v-model="iconColor"
                ></color-picker>
              </div>
            </b-form-group>
            <hr />
            <b-row style="height: 150px; overflow: auto">
              <b-col md="6" sm="12" v-for="social in socials" :key="social.name" class="social-row">
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <feather-icon :icon="socialIcon(social.name)" />
                  </b-input-group-prepend>
                  <b-form-input
                    :placeholder="socialTitle(social.name)"
                    v-model="social.url"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button @click="social.url = ''" variant="outline-primary"
                      >Clear</b-button
                    >
                  </b-input-group-append>
                </b-input-group>
              </b-col>
            </b-row>
          </b-popover>
        </a>
      </div>
      <br />
      <br />
      <b-row class="d-flex justify-content-center mt-1 card-content">
        <div style="width: 800px" class="mx-1">
          <a
            id="popover-setting-card"
            style="position: relative; top: -5px; color: #fff; cursor: pointer"
            v-if="editMode"
            class="setting-btn"
            ><feather-icon icon="SettingsIcon" />
            <b-popover
              target="popover-setting-card"
              triggers="hover"
              placement="left"
            >
              <template v-slot:title>Card Sections</template>
              <b-form-group label="Card Color" label-for="text-input">
                <color-picker
                  class="mt-1"
                  :width="175"
                  :height="175"
                  v-model="cardColor"
                ></color-picker>
              </b-form-group>
              <hr />
              <b-form-group label="Text Color" label-for="text-input">
                <color-picker
                  class="mt-1"
                  :width="175"
                  :height="175"
                  v-model="cardTextColor"
                ></color-picker>
              </b-form-group>
            </b-popover>
          </a>
        </div>
      </b-row>
      <b-row
        class="d-flex justify-content-center card-content"
        style="margin-bottom: 0"
      >
        <b-card
          v-click-outside="deactivateForm"
          @click="activateForm"
          style="width: 800px; height: 75px; border-radius: 0"
          :style="backgroundStyle"
          no-body
          class="card-employee-task mb-1 card-section mx-1"
          :class="{ 'card-active': isActive }"
        >
          <!-- body -->
          <b-card-body class="my-auto">
            <div class="d-flex" v-if="isActive">
              <validation-observer ref="newsletterRules" style="width: 100%">
                <b-form>
                  <b-form-group>
                    <validation-provider name="Email" rules="required|email">
                      <input
                        v-model="emailValue"
                        ref="newsletter"
                        class="newsletter-input"
                        :style="
                          'width: 100%; height: 100%; border: none; padding-left: 5px; padding-right: 5px; color: #fff; margin-top: 5px;background-color:' +
                          backgroundColor
                        "
                        @input="checkNewsletter"
                        placeholder="Please enter your email"
                      />
                    </validation-provider>
                  </b-form-group>
                </b-form>
              </validation-observer>
              <div>
                <b-button
                  @click="sendForm"
                  variant="outline-light"
                  class="d-flex"
                  :disabled="
                    newsletterLoading ||
                    emailValue == '' ||
                    !newsletterValidation
                  "
                >
                  <b-spinner v-if="newsletterLoading" small />
                  <template v-else>
                    Submit<em
                      style="margin-left: 5px"
                      class="fa fa-paper-plane"
                    ></em>
                  </template>
                </b-button>
              </div>
            </div>
            <div class="employee-task d-flex justify-content-center mt-1">
              <b-media no-body>
                <b-media-aside class="mr-75"> </b-media-aside>
                <b-media-body>
                  <h5 v-show="!isActive" :style="'color: ' + cardTextColor">
                    Sign up for my newsletter
                  </h5>
                </b-media-body>
              </b-media>
            </div>
          </b-card-body>
        </b-card>
      </b-row>
      <b-row
        class="d-flex justify-content-center card-content"
        style="margin-bottom: 0"
      >
        <b-card
          @click="$router.push({
            path: '/seller/' + username + '/faqs'
          })"
          style="width: 800px; height: 75px; border-radius: 0"
          :style="backgroundStyle"
          no-body
          class="card-employee-task mb-1 card-section mx-1"
        >
          <!-- body -->
          <b-card-body class="my-auto">
            <div class="employee-task d-flex justify-content-center mt-1">
              <b-media no-body>
                <b-media-aside class="mr-75"> </b-media-aside>
                <b-media-body>
                  <h5 :style="'color: ' + cardTextColor">
                    Go to Frequently Asked Questions
                  </h5>
                </b-media-body>
              </b-media>
            </div>
          </b-card-body>
        </b-card>
      </b-row>
      <b-row
        class="d-flex justify-content-center card-content"
      >
        <a target="blank" style="width: 800px" class="mx-1">
          <b-card
            style="border-radius: 0;"
            :style="backgroundStyle"
            no-body
            class="card-employee-task mb-1 card-section"
          >
            <!-- body -->
            <b-card-body>
              <div
                class="employee-task d-flex justify-content-between align-items-center"
              >
                <b-media no-body>
                  <b-media-aside class="mr-75">
                    <b-avatar
                      size="70"
                      :src="user.picture_url"
                    />
                  </b-media-aside>
                  <b-media-body>
                    <h6 class="mb-0" :style="'color: ' + cardTextColor">
                      Salvatore Ferragamo &nbsp;<b-badge class="best-badge" :style="backgroundStyle">Best product</b-badge>
                    </h6>
                    <small :style="'color: ' + cardTextColor">
                      Salvatore Ferragamo Narny Leather Grommet Trim 9M
                    </small>
                  </b-media-body>
                </b-media>
                <div class="d-flex align-items-center">
                <b-avatar
                      size="70"
                      src="https://di2ponv0v5otw.cloudfront.net/posts/2018/06/30/5b37b1f8f8637d8242a81795/s_5b37b1fcaa57195479a711ce.jpeg"
                    />
              </div>
              </div>
            </b-card-body>
          </b-card>
        </a>
      </b-row>
      <b-row
        class="d-flex justify-content-center card-content"
        v-for="link in links"
        :key="link.username"
      >
        <a v-if="editMode" target="blank" style="width: 800px" class="mx-1">
          <b-card
            style="border-radius: 0;"
            :style="backgroundStyle"
            no-body
            class="card-employee-task mb-1 card-section"
          >
            <feather-icon
              @click="deleteCard(link)"
              icon="XCircleIcon"
              style="color: red; position: absolute; right: 5; top: 5"
              size="20"
            />
            <!-- body -->
            <b-card-body>
              <div
                class="employee-task d-flex justify-content-between align-items-center"
              >
                <b-media no-body>
                  <b-media-aside class="mr-75">
                    <b-avatar
                      size="70"
                      :src="
                        link.username
                          ? require('@/assets/images/icons/poshmark.png')
                          : require('@/assets/images/icons/normal-link.png')
                      "
                    />
                  </b-media-aside>
                  <b-media-body>
                    <h6 class="mb-0" :style="'color: ' + cardTextColor">
                      {{ link.username ? "Poshmark link" : "Normal link" }}
                    </h6>
                    <small :style="'color: ' + cardTextColor" v-if="link.username"
                      >{{ capitalize(link.username) }}'s Closet (@{{
                        link.username
                      }}) | Poshmark</small
                    >
                    <small :style="'color: ' + cardTextColor" v-else>
                      {{ link.url }}
                    </small>
                  </b-media-body>
                </b-media>
              </div>
            </b-card-body>
          </b-card>
        </a>
        <a
          v-else
          :href="link.url"
          target="blank"
          style="width: 800px"
          class="mx-1"
        >
          <b-card
            style="border-radius: 0;"
            :style="backgroundStyle"
            no-body
            class="card-employee-task mb-1 card-section"
          >
            <!-- body -->
            <b-card-body>
              <div
                class="employee-task d-flex justify-content-between align-items-center"
              >
                <b-media no-body>
                  <b-media-aside class="mr-75">
                    <b-avatar
                      size="70"
                      :src="
                        link.username
                          ? require('@/assets/images/icons/poshmark.png')
                          : require('@/assets/images/icons/normal-link.png')
                      "
                    />
                  </b-media-aside>
                  <b-media-body>
                    <h6 class="mb-0" :style="'color: ' + cardTextColor">
                      {{ link.username ? "Poshmark link" : "Normal link" }}
                    </h6>
                    <small :style="'color: ' + cardTextColor" v-if="link.username"
                      >{{ capitalize(link.username) }}'s Closet (@{{
                        link.username
                      }}) | Poshmark</small
                    >
                    <small :style="'color: ' + cardTextColor" v-else>{{ link.url }}</small>
                  </b-media-body>
                </b-media>
              </div>
            </b-card-body>
          </b-card>
        </a>
      </b-row>
      <b-row
        class="d-flex justify-content-center card-content"
        style="margin-bottom: 0"
        v-if="editMode"
      >
        <b-card
          v-click-outside="deactivateLinkForm"
          @click="activateLinkForm"
          style="width: 800px; height: 75px; border-radius: 0"
          :style="backgroundStyle"
          no-body
          class="card-employee-task mb-1 card-section mx-1"
          :class="{ 'card-active': isLinkActive }"
        >
          <!-- body -->
          <b-card-body class="my-auto">
            <div class="d-flex" v-if="isLinkActive">
              <div :style="link == '' ? 'width: 100%' : ''" class="d-flex">
                <div class="d-flex justify-content-center" style="width: 50%">
                  <b-button
                    v-show="link == ''"
                    @click="activateLink('poshmark')"
                    variant="outline-light"
                    style="width: 80%"
                    >Poshmark Link</b-button
                  >
                </div>
                <div class="d-flex justify-content-center" style="width: 50%">
                  <b-button
                    v-show="link == ''"
                    @click="link = 'normal'"
                    variant="outline-light"
                    style="width: 80%"
                    >Normal Link</b-button
                  >
                </div>
              </div>
              <template v-if="link == 'poshmark'">
                <input
                  ref="linkform"
                  class="newsletter-input"
                  :style="
                    'width: 100%; height: 100%; border: none; padding-left: 5px; padding-right: 5px; color: #fff; margin-top: 5px;background-color:' +
                    backgroundColor
                  "
                  v-model="poshmarkUsername"
                  placeholder="Poshmark Username"
                />
                <div>
                  <b-button
                    @click="addPoshmarkLink"
                    variant="outline-light"
                    class="d-flex"
                    :disabled="poshmarkUsername == ''"
                    >Add<em
                      style="margin-left: 5px"
                      class="fa fa-lg fa-plus-circle"
                    ></em
                  ></b-button>
                </div>
              </template>
              <template v-else-if="link == 'normal'">
                <validation-observer ref="urlRules" style="width: 100%">
                  <b-form>
                    <b-form-group>
                      <validation-provider name="Email" rules="required|url">
                        <input
                          ref="linkform"
                          class="newsletter-input"
                          :style="
                            'width: 100%; height: 100%; border: none; padding-left: 5px; padding-right: 5px; color: #fff; margin-top: 5px;background-color:' +
                            backgroundColor
                          "
                          v-model="URL"
                          placeholder="URL Link"
                          @input="checkURL"
                        />
                      </validation-provider>
                    </b-form-group>
                  </b-form>
                </validation-observer>
                <div>
                  <b-button
                    @click="addUrlLink"
                    variant="outline-light"
                    class="d-flex"
                    :disabled="URL == '' || !urlValidation"
                    >Add<em
                      style="margin-left: 5px"
                      class="fa fa-lg fa-plus-circle"
                    ></em
                  ></b-button>
                </div>
              </template>
            </div>
            <div class="employee-task d-flex justify-content-center">
              <b-media no-body>
                <b-media-aside class="mr-75"> </b-media-aside>
                <b-media-body>
                  <h5 v-show="!isLinkActive" :style="'color: ' + cardTextColor">
                    <feather-icon icon="PlusCircleIcon" size="45" />
                  </h5>
                </b-media-body>
              </b-media>
            </div>
          </b-card-body>
        </b-card>
      </b-row>
    </div>
</template>
<script>
import {
  BPopover,
  BButton,
  BCard,
  BCardTitle,
  BCardHeader,
  BCardBody,
  BMedia,
  BMediaAside,
  BAvatar,
  BMediaBody,
  BForm,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BInputGroupPrepend,
  BInputGroupAppend,
  BRow,
  BCol,
  VBTooltip,
  BSpinner,
  BImg,
  BBadge
} from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";
import { $themeColors } from "@themeConfig";
import FeatherIcon from "@/@core/components/feather-icon/FeatherIcon.vue";
import ClickOutside from "vue-click-outside";
import ColorPicker from "vue-color-picker-wheel";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { required, email, url } from "@validations";
/* eslint-disable global-require */
const $trackBgColor = "#e9ecef";
export default {
  props: ["username"],
  components: {
    ValidationProvider,
    ValidationObserver,
    BPopover,
    BButton,
    BCard,
    BCardTitle,
    BCardHeader,
    BCardBody,
    BMedia,
    BMediaAside,
    BMediaBody,
    BAvatar,
    BForm,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BInputGroupAppend,
    BRow,
    BCol,
    BSpinner,
    ColorPicker,
    VueApexCharts,
    FeatherIcon,
    ToastificationContent,
    BImg,
    BBadge
  },
  watch: {
    backgroundColor(value) {
      document.body.style.backgroundColor = value;
    },
  },
  methods: {
    checkNewsletter() {
      this.$refs.newsletterRules.validate().then((success) => {
        this.newsletterValidation = success;
      });
    },
    checkURL() {
      this.$refs.urlRules.validate().then((success) => {
        this.urlValidation = success;
      });
    },
    activateLink(value) {
      this.link = value;
    },
    capitalize(value) {
      return value.length < 1
        ? ""
        : value.replace(/^./, value[0].toUpperCase());
    },
    notEmptyObject(someObject) {
      return Object.keys(someObject).length;
    },
    activateForm() {
      this.isActive = true;
      setTimeout((x) => {
        this.$refs.newsletter.focus();
      }, 200);
    },
    activateLinkForm() {
      this.isLinkActive = true;
      setTimeout((x) => {
        this.$refs.linkform.focus();
      }, 200);
    },
    deactivateLinkForm() {
      this.isLinkActive = false;
      this.link = "";
    },
    deactivateForm: function () {
      this.isActive = false;
    },
    sendForm() {
      this.newsletterLoading = true;

      let data = {
        username: this.username,
        subscribe_email: this.emailValue,
      };

      this.$http
        .post("/api/save_user_newsletter", data)
        .then((response) => {
          switch (response.data.status) {
            case 200:
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: "Subscribing Successful",
                  icon: "BellIcon",
                  text:
                    "Your registration to the newsletter has been successfully completed",
                  variant: "success",
                },
              });
              break;
            case 409:
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: "Already Subscribed",
                  icon: "BellIcon",
                  text:
                    "You already have a newsletter subscription",
                  variant: "info",
                },
              });
              break;

            default:
              break;
          }

          this.newsletterLoading = false;
        })
        .catch((error) => {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Subscribing Failed",
              icon: "BellIcon",
              text:
                "Your registration to the newsletter could not be completed",
              variant: "danger",
            },
          });
          this.newsletterLoading = false;
        });
    },
    addPoshmarkLink() {
      let link = {
        username: this.poshmarkUsername,
        url: "https://poshmark/closet/" + this.poshmarkUsername,
      };
      this.links.push(link);
      this.poshmarkUsername = "";
    },
    addUrlLink() {
      let link = {
        url: this.URL,
      };
      this.links.push(link);
      this.URL = "";
    },
    deleteCard(link) {
      const index = this.links.indexOf(link);
      if (index > -1) {
        this.links.splice(index, 1);
      }
    },
    saveProfile() {
      this.savingProfile = true;

      this.user.background_color = this.backgroundColor;
      this.user.card_color = this.cardColor;
      this.user.card_text_color = this.cardTextColor;
      this.user.icon_color = this.iconColor;
      this.user.links = this.links;
      this.user.username = this.username;
      this.user.social_media.forEach((social) => {
        this.socials.forEach((element) => {
          if (element.name == social.name) {
            social.url = element.url;
          }
        });
      });

      this.$http
        .post("/api/save_user_profile", this.user)
        .then((response) => {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Registration Successful",
              icon: "BellIcon",
              text: "Your profile has been successfully saved",
              variant: "success",
            },
          });
          this.editMode = false;
          this.savingProfile = false;
        })
        .catch((error) => {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Registration Fail",
              icon: "BellIcon",
              text: "Your profile could not be saved",
              variant: "danger",
            },
          });
          this.savingProfile = false;
        });
    },
    getSocials() {
      let filteredSocial = [];
      this.user.social_media.forEach((social) => {
        if (social.url != null && social.url != "") {
          filteredSocial.push(social);
        }
      });

      return filteredSocial;
    },
    showToast(variant) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: "Notification",
          icon: "BellIcon",
          text:
            "👋 Chocolate oat cake jelly oat cake candy jelly beans pastry.",
          variant,
        },
      });
    },
  },
  computed: {
    backgroundStyle() {
      return {
        "--background-color": this.backgroundColor,
        "--card-color": this.cardColor,
      };
    },
    socialIcon() {
      return (name) => {
        let icon = "";
        switch (name) {
          case "fb":
            icon = "FacebookIcon";
            break;
          case "tw":
            icon = "TwitterIcon";
            break;
          case "yt":
            icon = "YoutubeIcon";
            break;
          case "ig":
            icon = "InstagramIcon";
            break;
          default:
            break;
        }

        return icon;
      };
    },
    socialTitle() {
      return (name) => {
        let title = "";
        switch (name) {
          case "fb":
            title = "Facebook account";
            break;
          case "tw":
            title = "Twitter account";
            break;
          case "yt":
            title = "Youtube account";
            break;
          case "ig":
            title = "Instagram account";
            break;
          default:
            break;
        }

        return title;
      };
    },
  },
  data() {
    return {
      urlValidation: false,
      newsletterValidation: false,
      newsletterLoading: false,
      required,
      email,
      url,
      emailValue: "",
      URL: "",
      link: "",
      savingProfile: false,
      loading: true,
      user: {
        social_media: [],
        links: [],
      },
      links: [],
      socials: [],
      includedServices: ["tw", "fb", "yt", "ig"],
      backgroundColor: "#3d3b3c",
      cardColor: "#fff",
      cardTextColor: "#3d3b3c",
      iconColor: "#fff",
      editMode: false,
      isActive: false,
      isLinkActive: false,
      chartData: [],
      chartColor: [
        $themeColors.primary,
        $themeColors.danger,
        $themeColors.success,
        $themeColors.secondary,
        $themeColors.warning,
        $themeColors.primary,
      ],
      chartSeries: [45, 65, 60, 35, 65, 80],
      employeeData: [
        {
          avatar: require("@/assets/images/portrait/small/avatar-s-9.jpg"),
          userFullName: "Ryan Harrington",
          designation: "iOS Developer",
          duration: "9hr 20m",
        },
        {
          avatar: require("@/assets/images/portrait/small/avatar-s-20.jpg"),
          userFullName: "Louisa Norton",
          designation: "UI Designer",
          duration: "4hr 17m",
        },
        {
          avatar: require("@/assets/images/portrait/small/avatar-s-1.jpg"),
          userFullName: "Jayden Duncan",
          designation: "Java Developer",
          duration: "12hr 8m",
        },
        {
          avatar: require("@/assets/images/portrait/small/avatar-s-20.jpg"),
          userFullName: "Cynthia Howell",
          designation: "Anguler Developer",
          duration: "3hr 19m",
        },
        {
          avatar: require("@/assets/images/portrait/small/avatar-s-16.jpg"),
          userFullName: "Helena Payne",
          designation: "Marketing",
          duration: "9hr 50m",
        },
        {
          avatar: require("@/assets/images/portrait/small/avatar-s-13.jpg"),
          userFullName: "Troy Jensen",
          designation: "iOS Developer",
          duration: "4hr 48m",
        },
      ],
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
                size: "22%",
              },
              track: {
                background: $trackBgColor,
              },
              dataLabels: {
                showOn: "always",
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
            lineCap: "round",
          },
        },
      },
    };
  },
  created() {
    document.body.style.backgroundColor = this.backgroundColor;

    for (let i = 0; i < this.employeeData.length; i += 1) {
      const chartClone = JSON.parse(JSON.stringify(this.chart));
      chartClone.options.colors[0] = this.chartColor[i];
      chartClone.series[0] = this.chartSeries[i];
      this.chartData.push(chartClone);
    }

    let data = { username: this.username };
    this.$http
      .post("https://n376smrwjb.execute-api.us-east-2.amazonaws.com/api/user_profile", data)
      .then((response) => {
        if (this.notEmptyObject(response.data)) {
          this.user = response.data;

          this.backgroundColor = this.user.background_color
            ? this.user.background_color
            : "#3d3b3c";
          this.cardColor = this.user.card_color ? this.user.card_color : "#fff";
          this.cardTextColor = this.user.card_text_color
            ? this.user.card_text_color
            : "#3d3b3c";
          this.iconColor = this.user.icon_color ? this.user.icon_color : "#fff";
          this.links = this.user.links ? this.user.links : [];

          this.user.social_media.forEach((social) => {
            if (this.includedServices.includes(social.name)) {
              if (social.url == null && social.username != null) {
                switch (social.name) {
                  case "fb":
                    social.url = "https://www.facebook.com/" + social.username;
                    break;
                  case "tw":
                    social.url = "https://www.twitter.com/" + social.username;
                    break;
                  case "yt":
                    social.url = "https://www.youtube.com/" + social.username;
                    break;
                  case "in":
                    social.url = "https://www.linkedin.com/" + social.username;
                    break;
                  default:
                    break;
                }
              }
              this.socials.push({
                name: social.name,
                url: social.url,
              });
            }
          });
        }
        this.loading = false;
      })
      .catch((error) => {
        console.log("Get User Profile Error", error);
        this.loading = false;
      });
  },
  destroyed() {
    document.body.style.backgroundColor = ""
  },
  directives: {
    ClickOutside,
    "b-tooltip": VBTooltip,
  },
};
/* eslint-disable global-require */
</script>
<style>
.card-body {
  padding: 1rem !important;
}

.card-section {
  cursor: pointer;
  background-color: var(--card-color) !important;
}

.card-section:hover {
  color: #fff !important;
  border: solid white;
  background-color: var(--background-color) !important;
  
}

.best-badge {
  background-color: var(--background-color) !important;
}

.card-section:hover .best-badge {
  background-color: white !important;
  color: var(--background-color) !important;
}

.card-section:hover h6,
.card-section:hover h5,
.card-section:hover small {
  color: #fff !important;
}

.social-icon {
  width: 60px;
  height: 60px;
}

.social-icon:hover {
  width: 65px;
  height: 65px;
}

@media only screen and (max-width: 600px) {
  .social-icon {
    color: #fff;
    width: 55px;
    height: 55px;
  }

  .social-icon:hover {
    width: 60px;
    height: 60px;
  }
}

@media only screen and (max-width: 400px) {
  .social-icon {
    color: #fff;
    width: 50px;
    height: 50px;
  }

  .social-icon:hover {
    width: 55px;
    height: 55px;
  }
}

@media only screen and (max-width: 750px) {
  .social-row {
    margin-top: 1rem
  }
}

.newsletter-input {
  font-size: 20px;
}

.newsletter-input:hover {
  border: none !important;
  outline: none !important;
}

.newsletter-input:focus {
  border-top-color: none !important;
  outline: none !important;
}

.card-active {
  background-color: var(--background-color) !important;
  color: #fff !important;
  border: solid white !important;
}

.submit-button {
  background-color: transparent;
  border: none;
  color: #fff;
  border-left: 1px solid #fff;
  height: 50px;
  margin: 0 !important;
  padding-left: 10px;
}

.edit-btn {
  position: fixed;
  right: 20px;
  top: 20px;
}

.save-btn {
  position: fixed;
  right: 85px;
  top: 20px;
}

.back-btn {
  position: fixed;
  right: 20px;
  top: 20px;
}

.setting-btn {
  z-index: 1000;
}

.card-content {
  margin-left: 0;
  margin-right: 0;
}

.b-popover {
  max-width: 80%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.avatar-badge .b-avatar-badge {
  font-size: calc(15px) !important;
  box-shadow: 0 0 10px #ea5455
}

</style>