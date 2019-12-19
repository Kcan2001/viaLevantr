<template>
  <div>
    <!-- <ul>
      <li v-for="(number, index) in numbers" :key="number.date" :class="index % 2 === 0 ? 'even': 'odd'">
        {{number.date | moment("MM/DD/YYYY")}} - {{number.num_1}} {{number.num_2}} {{number.num_3}} {{number.num_4}} {{number.num_5}} {{number.num_6}} {{number.num_7}}
      </li>
    </ul> -->
  </div>
</template>

<script>
import mock from "../assets/mock.json";

  export default {
    data() {
      return {
        numbers: mock
      }
    },
    mounted() {
      const first = this.numbers.map(number => parseInt(number.num_1))
      const second = this.numbers.map(number => parseInt(number.num_2))
      const third = this.numbers.map(number => parseInt(number.num_3))
      const fourth = this.numbers.map(number => parseInt(number.num_4))
      const fifth = this.numbers.map(number => parseInt(number.num_5))
      const sixth = this.numbers.map(number => parseInt(number.num_6))
      const seventh = this.numbers.map(number => parseInt(number.num_7))
      this.average(first)
      this.average(second)
      this.average(third)
      this.average(fourth)
      this.average(fifth)
      this.average(sixth)
      this.average(seventh)
    },
    methods: {
      add() {
        this.number+=1
      },
      minus() {
        this.number-=1
      },
      average(values) {
        let sum = values.reduce((previous, current) => current += previous);
        let avg = sum / values.length;
        console.log(avg)
      }
    }
  }
</script>

<style scoped>
li {
  list-style: none;
}
</style>