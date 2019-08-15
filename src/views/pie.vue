<!-- pie.vue -->
<template>
  <div class="EchartsCoponent">
    <div>
      <div v-for="(chardata, index) in rightData" :key="index">
        <EchartsCoponent :chartData="chardata" autoresize />
      </div>
    </div>
  </div>
</template>

<script>
import EchartsCoponent from '@/components/EchartsComponent';
export default {
  name: 'echarts',
  data() {
    return {
      rightData: [],
    };
  },
  mounted() {
    this.getData();
  },
  created() {
    this.getData();
  },
  methods: {
    // setInterval(bindData(),1000);
    getData() {
      this.$axios
        .get('static/data/piedata.json')
        .then(res => {
          let pro = res.data;
          let text = pro.text;
          this.$store.dispatch('axiostest', pro);
          this.rightData = this.$store.state.MsgRight;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  timer() {
    return setTimeout(() => {
      this.getData();
    }, 100);
  },
  watch: {
    shuaxin() {
      timer();
    }
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  components: {
    EchartsCoponent
  }
};
</script>

<style scoped></style>
