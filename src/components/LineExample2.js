import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#FC2525',
          data: [29554, 31102, 28116, 40, 39, 80, 40]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
}