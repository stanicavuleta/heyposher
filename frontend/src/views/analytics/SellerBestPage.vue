<template>
<div>
    <!-- faq search section -->
    <section id="faq-search-filter">
      <b-card
        no-body
        class="faq-search"
        :style="{backgroundImage:`url(${require('@/assets/images/banner/banner.png')})`}"
      >
        <b-card-body class="text-center">
          <h2 class="text-primary">
            Top Seller
          </h2>
          <b-card-text>
            You can see the highest scoring floods here
          </b-card-text>
        </b-card-body>
      </b-card>
    </section>
    <!--/ faq search section -->

    <!-- frequently asked questions tabs pills -->
    <section id="faq-tabs">
    <b-row class="seller-container">
      <b-col sm="12" md="6" lg="4" cols="12" v-for="(seller, index) in bestSellers" :key="index">
        <b-card class="box">
        <b-media vertical-align="center">
          <template #aside>
            <b-avatar
              size="65"
              :src="seller.cover_shot_url_thumb"
              variant="`light-primary`"
              :badge="String(index + 1)"
              badge-variant="primary"
              badge-left
              badge-top
              badge-offset="-0.4em"
            />
          </template>
          <b-link class="font-weight-bold d-block text-nowrap" :href="seller.seller_url">
            {{ seller.full_name }}
          </b-link>
          <small class="text-muted">@{{ seller.username }}</small>
          <br>
          <small class="text-muted">{{ seller.sales_total }}</small>
        </b-media>
        </b-card>
      </b-col>
      
    </b-row>
    </section>
    <!--/ frequently asked questions tabs pills -->
  </div>
</template>

<script>
import { BRow, BCol, BCard, BMedia, BAvatar, BLink, BCardBody, BCardText } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BMedia,
    BAvatar,
    BLink,
    BCardBody,
    BCardText
  },
  data() {
    return {
      bestSellers: [
        {
          seller_url: "https://poshmark.com/closet/sabrinatreasure/about-me",
          username: "sabrinatreasure",
          full_name: "Sabrina Sampson",
          first_name: "Sabrina",
          city: "Santee",
          state: "CA",
          profile_zip: "92072",
          comment_five_star: "80",
          aggregates_total_comments: "2505",
          aggregates_user_score: "1500",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2018/09/03/5b8df7485098a024618cdac5/t_5b8df7495098a024618cdb08.jpg",
          website: "www.prelovedtreasures.com",
          sales_cnt: "39",
          sales_total: "59486",
        },
        {
          seller_url: "https://poshmark.com/closet/asllc/about-me",
          username: "asllc",
          full_name: "As jewelers Llc",
          first_name: "As jewelers",
          last_name: "Llc",
          city: "New York",
          state: "NY",
          comment_five_star: "3",
          aggregates_total_comments: "255",
          aggregates_user_score: "95",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2020/07/14/9/t_5f0dd7c00c0c96fcb105e563.jpg",
          sales_cnt: "22",
          sales_total: "49571",
        },
        {
          seller_url: "https://poshmark.com/closet/dejavuitton/about-me",
          username: "dejavuitton",
          full_name: "Ms. Anderson",
          first_name: "Ms.",
          last_name: "Anderson",
          city: "Ventura",
          state: "CA",
          comment_five_star: "166",
          aggregates_total_comments: "8680",
          aggregates_user_score: "7015",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2018/06/24/5b2d088e9f61545b6b3073d6/t_5b2fc1cd7ee9e264d9c6c463.jpg",
          website:
            "https://www.instagram.com/p/CF5ONgAgufN/?igshid=zvlj9gaq492t",
          sales_cnt: "87",
          sales_total: "36916",
        },
        {
          seller_url: "https://poshmark.com/closet/psycholeopard/about-me",
          username: "psycholeopard",
          full_name: "Lisa posh ambassador Johnson",
          first_name: "Lisa posh ambassador",
          last_name: "Johnson",
          city: "Greenwich",
          state: "CT",
          profile_zip: "6830",
          comment_five_star: "446",
          aggregates_total_comments: "3109",
          aggregates_user_score: "11455",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2018/10/31/5bda3b02f2987cdd192d2a31/t_5bda4316df19a53caa5f4586.jpeg",
          website: "PsychoticLeopard.com",
          tw_info_ext_username: "PsychoticLeopa1",
          pn_v2_info_ext_username: "psychoticleopar",
          sales_cnt: "69",
          sales_total: "30578",
        },
        {
          seller_url: "https://poshmark.com/closet/thebagfinder/about-me",
          username: "thebagfinder",
          full_name: "The bag finder",
          first_name: "The bag finder",
          city: "Fair Lawn",
          state: "NJ",
          profile_zip: "7410",
          comment_five_star: "29",
          aggregates_total_comments: "1389",
          aggregates_user_score: "1035",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2020/01/08/14/t_5e1659b71445656ad7cb0927.jpg",
          website: "www.thebagfinder.co",
          sales_cnt: "23",
          sales_total: "27143",
        },
        {
          seller_url: "https://poshmark.com/closet/clair80/about-me",
          username: "clair80",
          full_name: "Clair80 Nguyen",
          first_name: "Clair80",
          last_name: "Nguyen",
          profile_zip: "92649",
          comment_five_star: "337",
          aggregates_total_comments: "11718",
          aggregates_user_score: "9140",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2021/02/17/15/t_602da81efdea1b24ec74caed.jpg",
          website: "https://www.clair80.com/",
          sales_cnt: "28",
          sales_total: "25023",
        },
        {
          seller_url: "https://poshmark.com/closet/shop_280/about-me",
          username: "shop_280",
          full_name: "Shop 280",
          first_name: "Shop 280",
          city: "Cincinnati",
          state: "OH",
          profile_zip: "45209",
          comment_five_star: "107",
          aggregates_total_comments: "1713",
          aggregates_user_score: "4455",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2019/10/05/5a8904b28c536b3039f25b8a/t_5d989a7869d282a75a474d09.jpeg",
          sales_cnt: "67",
          sales_total: "24504",
        },
        {
          seller_url: "https://poshmark.com/closet/brandauthentic/about-me",
          username: "brandauthentic",
          full_name: "Elhusuba luxury !",
          first_name: "Elhusuba luxury",
          last_name: "!",
          city: "Los Angeles",
          state: "CA",
          profile_zip: "91342",
          comment_five_star: "188",
          aggregates_total_comments: "4712",
          aggregates_user_score: "9475",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2020/07/07/15/t_5f04f31fd4c4e89982eb108d.jpg",
          sales_cnt: "60",
          sales_total: "24488",
        },
        {
          seller_url: "https://poshmark.com/closet/hajrak/about-me",
          username: "hajrak",
          full_name: "Hajra Khurram",
          first_name: "Hajra",
          last_name: "Khurram",
          city: "Brooklyn",
          state: "NY",
          profile_zip: "7008",
          comment_five_star: "348",
          aggregates_total_comments: "6233",
          aggregates_user_score: "8875",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2019/02/21/592a665d625850f0f35ce7b7/t_5c6ec7cb7c979d0754a8d7e3.jpg",
          sales_cnt: "97",
          sales_total: "23919",
        },
        {
          seller_url: "https://poshmark.com/closet/luxcellent/about-me",
          username: "luxcellent",
          full_name: "Luxcellent Official",
          first_name: "Luxcellent",
          last_name: "Official",
          city: "New York",
          state: "NY",
          comment_five_star: "89",
          aggregates_total_comments: "1634",
          aggregates_user_score: "3760",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2019/04/01/57eeaf52fef31c295d0882ae/t_5ca2cf1a81611d1b3f6efebd.jpeg",
          website: "https://www.luxcellent.com",
          sales_cnt: "24",
          sales_total: "23881",
        },
        {
          seller_url: "https://poshmark.com/closet/melisa143/about-me",
          username: "melisa143",
          full_name: "100% authentic preloved lv *",
          first_name: "100% authentic preloved lv",
          last_name: "*",
          city: "Covington",
          state: "KY",
          comment_five_star: "178",
          aggregates_total_comments: "6842",
          aggregates_user_score: "5900",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2020/12/12/12/t_5fd5255fd498814ea5ac1351.jpg",
          website: "https://youtu.be/PFAp1QnibCc",
          sales_cnt: "24",
          sales_total: "23750",
        },
        {
          seller_url: "https://poshmark.com/closet/colleen7143/about-me",
          username: "colleen7143",
          full_name: "Colleen Nelson",
          first_name: "Colleen",
          last_name: "Nelson",
          city: "Glen Burnie",
          state: "MD",
          profile_zip: "21060",
          comment_five_star: "9",
          aggregates_total_comments: "1087",
          aggregates_user_score: "465",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2021/02/20/21/t_6031ed4763de85b5e5a23d80.jpg",
          pn_v2_info_ext_username: "cnelson0762",
          sales_cnt: "27",
          sales_total: "22768",
        },
        {
          seller_url: "https://poshmark.com/closet/hotstyles2love/about-me",
          username: "hotstyles2love",
          full_name: "Eryal Agee",
          first_name: "Eryal",
          last_name: "Agee",
          city: "Beverly Hills",
          state: "CA",
          profile_zip: "30127",
          comment_five_star: "7",
          aggregates_total_comments: "431",
          aggregates_user_score: "560",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2021/02/25/22/t_6038904ddb99b9030347fbdc.jpg",
          website: "https://www.fashionologyzone.com",
          tw_info_ext_username: "FashionologyZ",
          pn_v2_info_ext_username: "gagee2309",
          sales_cnt: "16",
          sales_total: "22550",
        },
        {
          seller_url: "https://poshmark.com/closet/christysvintage/about-me",
          username: "christysvintage",
          full_name: "Christina K",
          first_name: "Christina",
          last_name: "K",
          city: "Safety Harbor",
          state: "FL",
          profile_zip: "34695",
          comment_five_star: "700",
          aggregates_total_comments: "6315",
          aggregates_user_score: "14835",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2020/01/11/13/t_5e1a3ae4acb24b87d2e5d672.jpg",
          sales_cnt: "106",
          sales_total: "22436",
        },
        {
          seller_url: "https://poshmark.com/closet/mydesignerly/about-me",
          username: "mydesignerly",
          full_name: "Mydesignerly",
          first_name: "Mydesignerly",
          city: "Plymouth Meeting",
          state: "PA",
          profile_zip: "19462",
          comment_five_star: "98",
          aggregates_total_comments: "4197",
          aggregates_user_score: "5885",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2018/10/23/591294687e32360c53d2d8e8/t_5bcf868edf19a597045b50b4.jpeg",
          website: "www.mydesignerly.com",
          sales_cnt: "21",
          sales_total: "19456",
        },
        {
          seller_url: "https://poshmark.com/closet/ferryroadpups/about-me",
          username: "ferryroadpups",
          full_name: "Ferryroadpups Pups",
          first_name: "Ferryroadpups",
          last_name: "Pups",
          city: "Saco",
          state: "ME",
          profile_zip: "4072",
          comment_five_star: "282",
          aggregates_total_comments: "2946",
          aggregates_user_score: "7220",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2020/03/01/8/t_5e5be45162e9d557eaba0602.jpg",
          tw_info_ext_username: "FerryRoadPups",
          pn_v2_info_ext_username: "ferryroadpups",
          tm_info_ext_username: "ferryroadpups",
          sales_cnt: "86",
          sales_total: "19320",
        },
        {
          seller_url: "https://poshmark.com/closet/bestdeal0903/about-me",
          username: "bestdeal0903",
          full_name: "Luxury store A",
          first_name: "Luxury store",
          last_name: "A",
          city: "Temple City",
          state: "CA",
          profile_zip: "91780",
          comment_five_star: "117",
          aggregates_total_comments: "3528",
          aggregates_user_score: "5155",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2020/10/24/10/t_5f94630521dac7f4b3647242.jpg",
          website: "shipeng5566@gmail.com",
          sales_cnt: "39",
          sales_total: "18935",
        },
        {
          seller_url: "https://poshmark.com/closet/luigi_nyc/about-me",
          username: "luigi_nyc",
          full_name: "! ambassador luigi !",
          first_name: "! ambassador luigi",
          last_name: "!",
          city: "New York",
          state: "NY",
          comment_five_star: "36",
          aggregates_total_comments: "793",
          aggregates_user_score: "1495",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2019/07/03/50f78a7452ab066074010e5c/t_5d1d8a443f79eae9b69e4bb9.jpg",
          website: "https://positivoclothing.com/",
          sales_cnt: "99",
          sales_total: "16922",
        },
        {
          seller_url: "https://poshmark.com/closet/lvoe2shop/about-me",
          username: "lvoe2shop",
          full_name: "! ! ! !",
          first_name: "! !",
          last_name: "! !",
          city: "Amarillo",
          state: "TX",
          profile_zip: "79119",
          comment_five_star: "116",
          aggregates_total_comments: "5092",
          aggregates_user_score: "4025",
          cover_shot_url_thumb:
            "https://di2ponv0v5otw.cloudfront.net/users/2020/11/23/8/t_5fbbdffaef34d381f012a052.jpg",
          sales_cnt: "26",
          sales_total: "16038",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-faq.scss';
</style>

<style>

.seller-container {
    margin-left: 5px;
    margin-right: 5px;
}

.box {
  position: relative;
  display: inline-block;
  width: 100%;
  cursor: pointer;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.box::after {
  content: "";
  border-radius: 5px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.box:hover {
  -webkit-transform: scale(1.25, 1.25);
  transform: scale(1.1, 1.1);
  z-index: 1000;
}

.box:hover::after {
    opacity: 1;
}


</style>