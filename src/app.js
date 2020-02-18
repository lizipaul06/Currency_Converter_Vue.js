import Vue from "vue";

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
    amount: 0,
     exchanges: [],
     selectedRate: 0,
     convertAmount:0
    },
    mounted(){
      this.fetchRate();

    },
    computed: {

  },
    methods:{
      fetchRate: function () {
        fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(data => this.exchanges=data.rates)
    },


    selectedRates: function() {
      return this.exchanges.filter((rate) => {
        rate == this.selectedRate;

      })
      },

    convert: function(){
     return  this.convertAmount = this.amount *this.selectedRate;
    }

}
});
});
