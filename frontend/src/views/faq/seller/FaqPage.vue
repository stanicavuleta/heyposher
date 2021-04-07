<template>
  <div>
    <!-- faq title section -->
    <section id="faq-search-filter">
      <b-card
        no-body
        class="faq-search"
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
            :disabled="savingQuestion"
            >
            <b-spinner v-if="savingQuestion" small />
            <span v-else>Add Question</span>
            </b-button
          >
        </b-card-body>
      </b-card>
    </section>
    <!--/ faq title section -->

    <b-modal
      id="modal-question"
      cancel-variant="outline-secondary"
      ok-title="Add"
      :ok-disabled="!question || !answer || !selectedCategory"
      cancel-title="Close"
      centered
      title="Add Question"
      @show="resetModal"
      @hidden="resetModal"
      @ok="addQuestion"
    >
      <b-form>
        <b-form-group label="Category:" label-for="category-select">
          <v-select
            id="vue-select"
            v-model="selectedCategory"
            :options="categories"
            label="name"
          />
        </b-form-group>
        <b-form-group>
          <label for="email">Question:</label>
          <b-form-input
            v-model="question"
            type="text"
            placeholder="Please write your question"
          />
        </b-form-group>
        <b-form-group>
          <label for="password">Answer:</label>
          <b-form-input
            v-model="answer"
            type="text"
            placeholder="Please write your answer"
          />
        </b-form-group>
      </b-form>
    </b-modal>

    <b-modal
      id="modal-category-question"
      cancel-variant="outline-secondary"
      ok-title="Add"
      :ok-disabled="!question || !answer"
      cancel-title="Close"
      centered
      :title="'Add ' + faqData[category].title + ' Question'"
      @show="resetModal"
      @hidden="resetModal"
      @ok="addCategoryQuestion"
    >
      <b-form>
        <b-form-group>
          <label for="email">Question:</label>
          <b-form-input
            v-model="question"
            type="text"
            placeholder="Please write your question"
          />
        </b-form-group>
        <b-form-group>
          <label for="password">Answer:</label>
          <b-form-input
            v-model="answer"
            type="text"
            placeholder="Please write your answer"
          />
        </b-form-group>
      </b-form>
    </b-modal>

    <!-- frequently asked questions tabs pills -->
    <section v-if="loading" class="d-flex justify-content-center">
      <b-spinner type="grow" style="width: 150px; height: 150px; margin-top: 125px; margin-bottom: 150px" />
    </section>
    <section v-else id="faq-tabs">
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
          v-model="activeTab"
        >
          <!-- title -->
          <template #title>
            <feather-icon :icon="categoryObj.icon" size="18" class="mr-1" />
            <span class="font-weight-bold">{{ categoryObj.title }}</span>
          </template>
          <faq-question-answer :options="categoryObj" :username="username" :category="categoryName" />
          <div class="d-flex justify-content-center mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="btn-icon rounded-circle"
              @click="category = categoryName"
              v-b-modal.modal-category-question
            >
              <feather-icon icon="PlusIcon" />
            </b-button>
          </div>
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
  BSpinner
} from "bootstrap-vue";
import FaqQuestionAnswer from "./FaqQuestionAnswer.vue";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

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
    BButton,
    BModal,
    BFormGroup,
    BFormSelect,
    vSelect,
    ToastificationContent,
    BSpinner
  },
  data() {
    return {
      loading: true,
        savingQuestion: false,
      selectedCategory: {
          name: "",
          value: ""
      },
      categories: [],
      category: "payment",
      activeTab: "",
      question: "",
      answer: "",
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
    };
  },
  directives: {
    "b-modal": VBModal,
    Ripple,
  },
  methods: {
    resetModal() {
      this.question = "";
      this.answer = "";
    },
    addQuestion() {
        this.category = this.selectedCategory.value
        this.addCategoryQuestion()
    },
    addCategoryQuestion() {
        this.savingQuestion = true

      if (!this.question.endsWith("?")) {
        this.question += "?";
      }

      let question = {
          question: this.question,
          ans: this.answer
      }

      let data = {
          question: question,
          category: this.category,
          username: this.username
      }

      this.$http.post("/api/save_user_question", data).then(response => {
          if (response.status == 200) {
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: "Saving Successful",
                  icon: "BellIcon",
                  text:
                    "Question has been successfully saved",
                  variant: "success",
                },
              });
               this.faqData[this.category].qandA.push(question);
          } else {
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: "Saving Faied",
                  icon: "BellIcon",
                  text:
                    "Something went wrong",
                  variant: "danger",
                },
              });
          }
          this.savingQuestion = false
      }).catch(error => {
          console.log(error)
          this.$toast({
                component: ToastificationContent,
                props: {
                  title: "Saving Faied",
                  icon: "BellIcon",
                  text:
                    "Something went wrong",
                  variant: "danger",
                },
              });
              this.savingQuestion = false
      })

      this.question = "";
      this.answer = "";
    },
  },
  watch: {
      faqData() {
          console.log("changed")
      }
  },
  created() {

    let data = {
        username: this.username,
        question_schema: this.faqData
    }

    this.$http.post("/api/user_questions", data).then(response => {
        this.faqData = response.data
        this.loading = false
    }).catch(error => {
        console.log(error)
        this.loading = false
    })

    for (const [key, value] of Object.entries(this.faqData)) {
      this.categories.push({
          name: value.title,
          value: key
      })
    }
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-faq.scss";
@import "@core/scss/vue/libs/vue-select.scss";
</style>
