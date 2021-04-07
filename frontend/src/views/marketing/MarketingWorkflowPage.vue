<template>
  <b-card no-body>
    <b-card-header>
      <div class="d-flex align-items-center">
        <feather-icon
          size="24"
          class="mr-1"
          icon="ListIcon"
        />
        <b-card-title class="ml-25">
          Marketing Workflows
        </b-card-title>
      </div>
      <feather-icon
        icon="MoreVerticalIcon"
        size="18"
      />
    </b-card-header>

    <!-- timeline -->
    <b-card-body>
      <app-timeline>
        <app-timeline-item variant="primary">
          <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
            <h6>Buyer buys</h6>
            <small class="timeline-item-time text-nowrap text-muted ml-1">12 min ago</small>
          </div>
          <p>Invoices have been paid to the company.</p>
          <b-media no-body>
            <b-media-aside class="mr-1">
              <b-img
                :src="require('@/assets/images/icons/json.png')"
                height="23"
                alt="data.json"
              />
            </b-media-aside>
            <b-media-body class="my-auto">
              <h6 class="media-body mb-0">
                data.json
              </h6>
            </b-media-body>
          </b-media>
        </app-timeline-item>

        <app-timeline-item variant="warning">
          <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
            <h6>Thanks Mail</h6>
            <small class="timeline-item-time text-nowrap text-muted ml-1">2 days later</small>
          </div>
          <p>Send Thank you email</p>
        </app-timeline-item>

        <app-timeline-item variant="info">
          <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
            <h6>Sending a Leave Note</h6>
            <small class="timeline-item-time text-nowrap text-muted ml-1">1 week later</small>
          </div>
          <p>Send a reminder for sending a love note</p>
        </app-timeline-item>

        <app-timeline-item
          title="Create a new project for client"
          subtitle="Add files to new design folder"
          time="5 day ago"
          variant="danger"
        />
      </app-timeline>
      <!--/ timeline -->
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardBody, BCardHeader, BCardTitle, BImg, BMedia, BMediaBody, BMediaAside, BAvatar, BAvatarGroup, VBTooltip,
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
/* eslint-disable global-require */
export default {
  components: {
    BCard,
    BImg,
    BCardBody,
    BCardHeader,
    BCardTitle,
    AppTimeline,
    AppTimelineItem,
    BMedia,
    BAvatar,
    BMediaBody,
    BMediaAside,
    BAvatarGroup,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  data() {
    return {
    }
  },
}
</script>
