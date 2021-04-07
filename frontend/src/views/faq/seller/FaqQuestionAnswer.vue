<template>
  <div v-if="options">
    <div class="d-flex align-items-center">
      <b-avatar
        rounded
        size="42"
        variant="light-primary"
        class="mr-1"
      >
        <feather-icon
          :icon="options.icon"
          size="20"
        />

      </b-avatar>
      <div>
        <h4 class="mb-0">
          {{ options.title }}
        </h4>
        <span>{{ options.subtitle }}</span>
      </div>
    </div>
    <!-- collapse -->
    <app-collapse
      id="faq-payment-qna"
      accordion
      type="margin"
      class="mt-2"
    >
    <template v-for="(data, index) in options.qandA">
        <b-button
        :key="index + '_btn'" style="position: absolute; left: 0; top: 25; z-index: 1000"
      variant="gradient-danger"
      class="btn-icon rounded-circle"
      size="sm"
      @click="deleteQuestion(index)"
      :disabled="deletingQuestion"
    >
      <b-spinner v-if="deletingQuestion" small />
      <feather-icon v-else icon="XIcon" />
    </b-button>
      <app-collapse-item
        :key="index"
        :title="data.question"
      >
        
        {{ data.ans }}
      </app-collapse-item>
    </template>

    </app-collapse>

    <!--/ collapse -->
  </div>
</template>

<script>
import { BAvatar, BButton, BSpinner } from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default {
  components: {
    BAvatar,
    BButton,
    AppCollapseItem,
    AppCollapse,
    ToastificationContent,
    BSpinner
  },
  data() {
    return {
      deletingQuestion: false
    }
  },
  props: {
    options: {
      type: Object,
      default: () => {},
    },
    category: {
      type: String
    },
    username: {
      type: String
    }
  },
  methods: {
      deleteQuestion(index) {

        this.deletingQuestion = true

          let data = {
            username: this.username,
            question: this.options.qandA[index],
            category: this.category
          }

          this.$http.post("/api/delete_user_question", data).then(response => {
            if (response.status == 200) {
            this.$toast({
                component: ToastificationContent,
                props: {
                  title: "Deleting Successfully",
                  icon: "BellIcon",
                  text: "Question has been deleted successfully",
                  variant: "success",
                },
              });
              this.options.qandA.splice(index, 1)
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
            this.deletingQuestion = false
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
              this.deletingQuestion = false
          })
      }
  }
}
</script>
