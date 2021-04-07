<template>
  <!-- Coming soon page-->
  <div class="misc-wrapper">
    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          Generate QR Code to reach your Buyers
        </h2>
        <p class="mb-3">
          Communicate immediately by creating a special QRCode for your customers!
        </p>

        <!-- form -->
        <b-form
          inline
          class="row justify-content-center m-0 mb-2"
          @submit.prevent
        >
          <b-form-input
            id="notify-email"
            v-model="username"
            class="col-12 col-md-5 mb-1 mr-md-2"
            type="text"
            placeholder="Poshmark Username"
          />

          <b-button
            variant="primary"
            class="mb-1 btn-sm-block"
            type="submit"
            @click="generateQRCode"
            :disabled="username == ''"
          >
            Generate QR Code
          </b-button>
        </b-form>
        <b-img
          fluid
          :src="imgUrl || downImg"
          alt="QR Code"
        />
        <br>
        <b-button v-if="imgUrl" variant="primary" class="mt-2" @click="downloadQRCode" :disabled="downloadStatus"><feather-icon class="mr-1" icon="DownloadIcon" />Download PDF</b-button>
        <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="QR Code"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="800px"
        ref="html2Pdf"
        @hasDownloaded="hasDownloaded"
    >
        <section slot="pdf-content">
          <b-row>
            <b-col class="d-flex justify-content-center">
            <b-img
              fluid
              :src="imgUrl || downImg"
              alt="QR Code"
            />
            </b-col>
          </b-row>
        </section>
    </vue-html2pdf>
      </div>
    </div>
  </div>
<!-- / Coming soon page-->
</template>

<script>
/* eslint-disable global-require */
import {
  BForm, BFormInput, BButton, BImg,
} from 'bootstrap-vue'
import axios from 'axios'
import VueHtml2pdf from 'vue-html2pdf'

export default {
  components: {
    BForm,
    BButton,
    BFormInput,
    BImg,
    VueHtml2pdf,
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/coming-soon.svg'),
      username: '',
      imgUrl: '',
      downloadStatus: false,
    }
  },
  methods: {
    generateQRCode() {
      axios.get(`${this.$store.state.app.apiURL}/api/qrcode/${1}/${this.username}`).then(response => {
        this.imgUrl = 'data:image/jpeg;base64, '.concat(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    downloadQRCode() {
      this.downloadStatus = true
      this.$refs.html2Pdf.generatePdf()
    },
    hasDownloaded() {
      this.downloadStatus = false
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
