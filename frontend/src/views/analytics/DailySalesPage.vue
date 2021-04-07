<template>
  <b-card no-body>
    <b-card-header>
      <!-- title -->
      <b-card-title>Daily Sales States</b-card-title>

      <!-- dropdown -->
      <b-dropdown variant="link" toggle-class="p-0" no-caret>
        <template #button-content>
          <feather-icon class="text-body" icon="MoreVerticalIcon" />
        </template>
        <b-dropdown-item> Last 28 Days </b-dropdown-item>
        <b-dropdown-item> Last Month </b-dropdown-item>
        <b-dropdown-item> Last Year </b-dropdown-item>
      </b-dropdown>
      <!--/ dropdown -->
    </b-card-header>

    <b-card-body>
      <vue-apex-charts
        type="heatmap"
        height="600"
        :options="chartOptions"
        :series="series"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardBody,
  BCardTitle,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const generateDataHeatMap = function (count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = `${months[i]}`;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x,
      y,
    });
    i++;
  }
  return series;
};

export default {
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    VueApexCharts,
    BCardTitle,
    BDropdown,
    BDropdownItem,
  },
  data() {
    return {
      series: [
        {
          name: "SUN",
          data: generateDataHeatMap(12, {
            min: 0,
            max: 60,
          }),
        },
        {
          name: "MON",
          data: generateDataHeatMap(12, {
            min: 0,
            max: 60,
          }),
        },
        {
          name: "TUE",
          data: generateDataHeatMap(12, {
            min: 0,
            max: 60,
          }),
        },
        {
          name: "WED",
          data: generateDataHeatMap(12, {
            min: 0,
            max: 60,
          }),
        },
        {
          name: "THU",
          data: generateDataHeatMap(12, {
            min: 0,
            max: 60,
          }),
        },
        {
          name: "FRI",
          data: generateDataHeatMap(12, {
            min: 0,
            max: 60,
          }),
        },
        {
          name: "SAT",
          data: generateDataHeatMap(12, {
            min: 0,
            max: 60,
          }),
        },
      ],
      chartOptions: {
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
          position: "bottom",
        },
        colors: ["#7367F0"],
        plotOptions: {
          heatmap: {
            enableShades: false,

            colorScale: {
              ranges: [
                {
                  from: 0,
                  to: 10,
                  name: "0-10",
                  color: "#b9b3f8",
                },
                {
                  from: 11,
                  to: 20,
                  name: "10-20",
                  color: "#aba4f6",
                },
                {
                  from: 21,
                  to: 30,
                  name: "20-30",
                  color: "#9d95f5",
                },
                {
                  from: 31,
                  to: 40,
                  name: "30-40",
                  color: "#8f85f3",
                },
                {
                  from: 41,
                  to: 50,
                  name: "40-50",
                  color: "#8176f2",
                },
                {
                  from: 51,
                  to: 60,
                  name: "50-60",
                  color: "#7367f0",
                },
              ],
            },
          },
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        chart: {
          height: 350,
          type: "heatmap",
          toolbar: {
            show: false,
          },
        },
      },
    };
  },
};
</script>
