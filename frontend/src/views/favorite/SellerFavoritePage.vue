<template>
  <div>
    <!-- faq title section -->
    <section id="faq-search-filter">
      <b-card
        no-body
        class="faq-search mb-0"
        :style="{
          backgroundImage: `url(${require('@/assets/images/banner/banner.png')})`,
        }"
      >
        <b-card-body class="text-center">
          <h2 class="text-primary">Let's answer some questions</h2>
          <b-card-text class="mb-2">
            or choose a category to quickly find the help you need
          </b-card-text>

          <b-button
            variant="primary"
            v-b-modal.modal-question
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            :disabled="savingFavorite"
          >
            <b-spinner v-if="savingFavorite" small />
            <span v-else>Add Favorite</span>
          </b-button>
        </b-card-body>
      </b-card>
    </section>
    <!--/ faq title section -->

    <b-modal
      id="modal-question"
      cancel-variant="outline-secondary"
      ok-title="Add"
      :ok-disabled="!title || !url"
      cancel-title="Close"
      centered
      title="Add Favorite"
      @show="resetModal"
      @hidden="resetModal"
      @ok="addFavorite"
    >
      <b-form>
        <b-form-group>
          <label for="email">Title:</label>
          <b-form-input
            v-model="title"
            type="text"
            placeholder="Please write your url title"
          />
        </b-form-group>
        <b-form-group>
          <label for="password">URL:</label>
          <b-form-input
            v-model="url"
            type="text"
            placeholder="Please write your url"
          />
        </b-form-group>
      </b-form>
    </b-modal>

    <!-- frequently asked questions tabs pills -->
    <section v-if="loading" class="d-flex justify-content-center">
      <b-spinner
        type="grow"
        style="
          width: 150px;
          height: 150px;
          margin-top: 125px;
          margin-bottom: 150px;
        "
      />
    </section>
    <section v-else id="faq-tabs">
      <!--
        <b-row class="px-3">
            <b-col cols="11" >
                <b-card>
                    link 1
                </b-card>
            </b-col>
            <b-col cols="1">
                    <b-button style="width: 100%; height: 70%" variant="primary">Go</b-button>
            </b-col>
        </b-row>
        -->
      <div>
        <!-- draggable -->
        <b-card v-if="list.length > 0">
          <draggable
            v-model="list"
            class="list-group list-group-flush cursor-move"
            tag="ul"
          >
            <transition-group type="transition" name="flip-list">
              <b-list-group-item v-for="listItem in list" :key="listItem.url">
                <b-row>
                  <b-col cols="10">
                    <b-card-text class="font-weight-bold mb-0">
                      {{ listItem.title }}
                    </b-card-text>
                    <small>{{ listItem.url }}</small>
                  </b-col>
                  <b-col cols="2" class="d-flex justify-content-end">
                    <a :href="listItem.url" target="blank"><b-button style="height: 100%" variant="primary" size="sm" class="mr-1">
                      <feather-icon icon="ExternalLinkIcon" />
                    </b-button></a>
                    <b-button
                      @click="deleteFavorite(listItem)"
                      variant="outline-danger"
                      size="sm"
                    >
                      <feather-icon icon="XIcon" />
                    </b-button>
                  </b-col>
                </b-row>
              </b-list-group-item>
            </transition-group>
          </draggable>
        </b-card>
      </div>
    </section>
    <!--/ frequently asked questions tabs pills -->
  </div>
</template>

<script>
import {
  BCard,
  BCardBody,
  BForm,
  BInputGroup,
  BFormInput,
  BCardText,
  BInputGroupPrepend,
  BTabs,
  BTab,
  BImg,
  BRow,
  BCol,
  BAvatar,
  BButton,
  BModal,
  VBModal,
  BFormGroup,
  BFormSelect,
  BSpinner,
  BListGroupItem,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import draggable from "vuedraggable";
import Prism from "vue-prism-component";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import FeatherIcon from "../../@core/components/feather-icon/FeatherIcon.vue";

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
    BButton,
    BModal,
    BFormGroup,
    BFormSelect,
    vSelect,
    ToastificationContent,
    BSpinner,
    draggable,
    BListGroupItem,
    Prism,
  },
  data() {
    return {
      locked: true,
      title: "",
      url: "",
      list: [],
      loading: true,
      savingFavorite: false,
    };
  },
  directives: {
    "b-modal": VBModal,
    Ripple,
  },
  watch: {
    list() {
      if (!this.locked) {
          let data = {
              username: this.username,
              favorites: this.list
          }
          this.$http.post("/api/refresh_user_favorite", data).then(response => {
              this.$toast({
            component: ToastificationContent,
            props: {
              title: "Refreshing Success",
              icon: "EditIcon",
              variant: "success",
            },
          });
          }).catch(error => {
              console.log(error)
              this.$toast({
            component: ToastificationContent,
            props: {
              title: "Refreshing Failed",
              icon: "EditIcon",
              variant: "danger",
            },
          });
          })
      }
    },
  },
  methods: {
    resetModal() {
      this.title = "";
      this.url = "";
    },
    deleteFavorite(item) {

        this.locked = true

      let data = {
        username: this.username,
        favorite: item,
      };

      this.$http
        .post("/api/delete_user_favorite", data)
        .then((response) => {
          let index = this.list.indexOf(item);
          this.list.splice(index, 1);
          var vm = this
          setTimeout(() => {
              vm.locked = false
          }, 1000);
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Delete Success",
              icon: "EditIcon",
              variant: "success",
            },
          });
        })
        .catch((error) => {
          console.log(error);
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Delete Failed",
              icon: "EditIcon",
              variant: "danger",
            },
          });
          this.locked = false
        });
    },
    addFavorite() {

      this.locked = true

      let item = {
        username: this.username,
        favorite: {
          title: this.title,
          url: this.url,
        },
      };

      this.$http
        .post("/api/save_user_favorite", item)
        .then((response) => {
          this.list.push(item.favorite);
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Add Success",
              icon: "EditIcon",
              variant: "success",
            },
          });

          var vm = this
          setTimeout(() => {
              vm.locked = false
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
          this.locked = false
        });

      this.title = "";
      this.url = "";
    },
  },
  created() {
    let data = {
      username: this.username,
    };

    this.$http
      .post("/api/user_favorite", data)
      .then((response) => {
        if (response.status === 200 && response.data != null) {
          this.list = response.data;
          var vm = this
          setTimeout(() => {
              vm.locked = false
          }, 1000);
        }
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
        this.loading = false;
      });

    this.loading = false;
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-faq.scss";
@import "@core/scss/vue/libs/vue-select.scss";
</style>

<style>
.list-group-item {
  transition: all 1s;
}
</style>