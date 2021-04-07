<template>
  <div>
    <!-- search input -->
    <section id="knowledge-base-search">
      <b-card
        no-body
        class="knowledge-base-bg text-center"
        :style="{
          backgroundImage: `url(${require('@/assets/images/banner/banner.png')})`,
        }"
      >
        <b-card-body class="card-body">
          <h2 class="text-primary">Check Out the Services We Offer You with Heyposher</h2>
          <b-card-text class="mb-2">
            <span>Popular services: </span>
            <span class="font-weight-bolder"
              >Newsletter, Marketing Workflows, FAQ</span
            >
          </b-card-text>
        </b-card-body>
      </b-card>
    </section>
    <!--/ search input -->

    <section id="knowledge-base-content">
      <!-- content -->
      <b-row class="kb-search-content-info match-height">
        <b-col
          v-for="item in kb"
          :key="item.id"
          md="4"
          sm="6"
          class="kb-search-content"
        >
          <b-card
            class="text-center cursor-pointer"
            :img-src="item.img"
            :img-alt="item.img.slice(5)"
            img-top
            @click="
              $router.push({
                path: item.to
              })
            "
          >
            <h4>{{ item.title }}</h4>
            <b-card-text class="mt-1">
              {{ item.desc }}
            </b-card-text>
            <b-button variant="outline-primary">Go to {{ item.name }}<feather-icon style="margin-left: 5px" icon="ArrowRightIcon" /></b-button>
          </b-card>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BCardBody,
  BForm,
  BInputGroup,
  BFormInput,
  BCardText,
  BInputGroupPrepend,
  BButton
} from "bootstrap-vue";
import FeatherIcon from '../@core/components/feather-icon/FeatherIcon.vue';

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BCardText,
    BForm,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput,
    BButton,
    FeatherIcon
  },
  data() {
    return {
      kb: [
        {
          id: 1,
          category: "newsletter",
          img: require("@/assets/images/illustration/demand.svg"),
          title: "Newsletter",
          desc: "Competent means we will never take anything for granted.",
          to: "/seller/yomra/subscribers",
          name: "Newsletter"
        },
        {
          id: 2,
          category: "marketing-workflows",
          img: require("@/assets/images/illustration/marketing.svg"),
          title: "Marketing Workflows",
          desc: "Look again at that dot. That’s here. That’s home. That’s us. On it everyone you love.",
          to: "/seller/yomra/workflows",
          name: "Workflows"
        },
        {
          id: 3,
          category: "api-questions",
          img: require("@/assets/images/illustration/api.svg"),
          title: "FAQ Questions",
          desc: "every hero and coward, every creator and destroyer of civilization.",
          to: "/seller/yomra/faqs",
          name: "Questions"
        },
    
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-knowledge-base.scss";
</style>
