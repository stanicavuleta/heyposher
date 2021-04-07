<template>
  <b-card no-body class="mb-2">
    <!--
      <b-card-body v-if="!subscribers.length" class="d-flex justify-content-center" style="margin-top: 80px; margin-bottom: 120px">
          <div>
              <b-img src="https://cdn.iconscout.com/icon/free/png-512/data-not-found-1965034-1662569.png" style="width: 400px" fluid></b-img>
              <h3 style="text-align: center" class="text-danger"><b-badge variant="danger">Registered subscriber not found</b-badge></h3>      
          </div>
      </b-card-body>
    -->
    <b-card-body v-if="loading" class="d-flex justify-content-center">
      <b-spinner
        type="grow"
        style="
          width: 150px;
          height: 150px;
          margin-top: 125px;
          margin-bottom: 150px;
        "
      />
    </b-card-body>
    <template v-else>
      <b-card-body>
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex">
            <span class="mt-1 mr-1">Show</span>
            <!-- sorting  -->
            <b-form-group
              label-cols="6"
              label-size="sm"
              label-for="sortBySelect"
              class="text-nowrap mb-md-0 mr-1"
            >
              <b-form-select
                id="perPageSelect"
                v-model="perPage"
                size="sm"
                inline
                :options="pageOptions"
              />
            </b-form-group>
            <span class="mt-1 mr-1">entries</span>
          </div>

          <!-- filter -->
          <b-form-group
            label-cols-sm="10"
            label-align-sm="left"
            label-size="sm"
            label-for="filterInput"
            class="mb-0"
          >
            <b-input-group size="sm">
              <b-form-input
                id="filterInput"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
                style="width: 250px"
              />
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">
                  Clear
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </div>
      </b-card-body>

      <b-table
        striped
        hover
        responsive
        class="position-relative"
        :per-page="perPage"
        :current-page="currentPage"
        :items="subscribers"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        :filter="filter"
        :filter-included-fields="filterOn"
        @filtered="onFiltered"
      >
        <template #cell(user)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="42"
                src="https://e7.pngegg.com/pngimages/352/66/png-clipart-computer-icons-login-adityaram-properties-business-business-blue-people.png"
                text="Enes Okutan"
                variant="`light-primary`"
              />
            </template>
            <b-link class="font-weight-bold d-block text-nowrap">
              {{ data.item.user }}
            </b-link>
            <small class="text-muted">@{{ data.item.user }}</small>
          </b-media>
        </template>
        <template #cell(email)="data">
          <div class="text-nowrap">
            <span class="align-text-top text-secondary">{{
              data.item.email
            }}</span>
          </div>
        </template>
        <template #cell(role)="data">
          <div class="text-nowrap">
            <feather-icon
              icon="UserIcon"
              size="18"
              class="mr-50 text-primary"
            />
            <span class="align-text-top text-capitalize text-secondary">{{
              data.item.role
            }}</span>
          </div>
        </template>
        <template #cell(status)="data">
          <b-badge variant="light-success">
            {{ data.item.status }}
          </b-badge>
        </template>
        <template #cell(plan)="data">
          <span class="align-text-top text-capitalize text-secondary">{{
            data.item.plan
          }}</span>
        </template>
      </b-table>

      <b-card-body class="d-flex justify-content-center flex-wrap pt-0 mt-2">
        <!-- page length -->

        <!-- pagination -->
        <div>
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            first-number
            last-number
            prev-class="prev-item"
            next-class="next-item"
            class="mb-0"
          >
            <template #prev-text>
              <feather-icon icon="ChevronLeftIcon" size="18" />
            </template>
            <template #next-text>
              <feather-icon icon="ChevronRightIcon" size="18" />
            </template>
          </b-pagination>
        </div>
      </b-card-body>
    </template>
  </b-card>
</template>

<script>
import BCardCode from "@core/components/b-card-code/BCardCode.vue";
import {
  BTable,
  BAvatar,
  BBadge,
  BFormGroup,
  BFormSelect,
  BPagination,
  BInputGroup,
  BFormInput,
  BInputGroupAppend,
  BButton,
  BCardBody,
  BMedia,
  BLink,
  BCardHeader,
  BCard,
  BImg,
  BSpinner,
} from "bootstrap-vue";

export default {
  props: ["username"],
  components: {
    BCardCode,
    BTable,
    BAvatar,
    BBadge,
    BFormGroup,
    BFormSelect,
    BPagination,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
    BCardBody,
    BMedia,
    BLink,
    BCardHeader,
    BCard,
    BImg,
    BSpinner,
  },
  data() {
    return {
      loading: true,
      subscribers: [],
      perPage: 10,
      pageOptions: [3, 5, 10, 25],
      totalRows: 1,
      currentPage: 1,
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
      fields: [
        { key: "user", label: "User", sortable: true },
        { key: "email", label: "Email", sortable: true },
        { key: "role", label: "Role", sortable: true },
        { key: "plan", label: "Plan", sortable: true },
        { key: "status", label: "Status", sortable: true },
      ],
      /* eslint-disable global-require */
      items: [
        {
          id: 1,
          avatar: require("@/assets/images/avatars/10-small.png"),
          full_name: "Korrie O'Crevy",
          post: "Nuclear Power Engineer",
          email: "kocrevy0@thetimes.co.uk",
          city: "Krasnosilka",
          start_date: "09/23/2016",
          salary: "$23896.35",
          age: "61",
          experience: "1 Year",
          status: 2,
        },
        {
          id: 2,
          avatar: require("@/assets/images/avatars/1-small.png"),
          full_name: "Bailie Coulman",
          post: "VP Quality Control",
          email: "bcoulman1@yolasite.com",
          city: "Hinigaran",
          start_date: "05/20/2018",
          salary: "$13633.69",
          age: "63",
          experience: "3 Years",
          status: 2,
        },
        {
          id: 3,
          avatar: require("@/assets/images/avatars/9-small.png"),
          full_name: "Stella Ganderton",
          post: "Operator",
          email: "sganderton2@tuttocitta.it",
          city: "Golcowa",
          start_date: "03/24/2018",
          salary: "$13076.28",
          age: "66",
          experience: "6 Years",
          status: 5,
        },
        {
          id: 4,
          avatar: require("@/assets/images/avatars/3-small.png"),
          full_name: "Dorolice Crossman",
          post: "Cost Accountant",
          email: "dcrossman3@google.co.jp",
          city: "Paquera",
          start_date: "12/03/2017",
          salary: "$12336.17",
          age: "22",
          experience: "2 Years",
          status: 2,
        },
        {
          id: 5,
          avatar: require("@/assets/images/avatars/4-small.png"),
          full_name: "Harmonia Nisius",
          post: "Senior Cost Accountant",
          email: "hnisius4@gnu.org",
          city: "Lucan",
          start_date: "08/25/2017",
          salary: "$10909.52",
          age: "33",
          experience: "3 Years",
          status: 2,
        },
        {
          id: 6,
          avatar: require("@/assets/images/avatars/5-small.png"),
          full_name: "Genevra Honeywood",
          post: "Geologist",
          email: "ghoneywood5@narod.ru",
          city: "Maofan",
          start_date: "06/01/2017",
          salary: "$17803.80",
          age: "61",
          experience: "1 Year",
          status: 1,
        },
        {
          id: 7,
          avatar: require("@/assets/images/avatars/7-small.png"),
          full_name: "Eileen Diehn",
          post: "Environmental Specialist",
          email: "ediehn6@163.com",
          city: "Lampuyang",
          start_date: "10/15/2017",
          salary: "$18991.67",
          age: "59",
          experience: "9 Years",
          status: 3,
        },
        {
          id: 8,
          avatar: require("@/assets/images/avatars/9-small.png"),
          full_name: "Richardo Aldren",
          post: "Senior Sales Associate",
          email: "raldren7@mtv.com",
          city: "Skoghall",
          start_date: "11/05/2016",
          salary: "$19230.13",
          age: "55",
          experience: "5 Years",
          status: 3,
        },
        {
          id: 9,
          avatar: require("@/assets/images/avatars/2-small.png"),
          full_name: "Allyson Moakler",
          post: "Safety Technician",
          email: "amoakler8@shareasale.com",
          city: "Mogilany",
          start_date: "12/29/2018",
          salary: "$11677.32",
          age: "39",
          experience: "9 Years",
          status: 5,
        },
        {
          id: 10,
          avatar: require("@/assets/images/avatars/6-small.png"),
          full_name: "Merline Penhalewick",
          post: "Junior Executive",
          email: "mpenhalewick9@php.net",
          city: "Kanuma",
          start_date: "04/19/2019",
          salary: "$15939.52",
          age: "23",
          experience: "3 Years",
          status: 2,
        },
      ],
      /* eslint-disable global-require */
      status: [
        {
          1: "Current",
          2: "Professional",
          3: "Rejected",
          4: "Resigned",
          5: "Applied",
        },
        {
          1: "light-primary",
          2: "light-success",
          3: "light-danger",
          4: "light-warning",
          5: "light-info",
        },
      ],
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => ({ text: f.label, value: f.key }));
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
  created() {
    let data = {
      username: this.username,
    };

    this.$http
      .post("/api/user_newsletter", data)
      .then((response) => {
        response.data.forEach((email) => {
          this.subscribers.push({
            user: email.split("@")[0],
            email: email,
            role: "subscriber",
            plan: "basic",
            status: "active",
          });
        });
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
        this.loading = false;
      });
  },
};
</script>
