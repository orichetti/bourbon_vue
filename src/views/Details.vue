<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="bottle" class="bottle">
    <h2>details page</h2>
    <Details
            v-if="showDetails" 
            :hide="showDetails"
            :header="detailsHeader" 
            :bourbon="bourbon" 
            :bottle="bottle"
            />
  </div>
</template>

<script>
import getBottle from '@/composables/getBottle'
export default {
  props: ['id'],
  setup(props) {
    const { bottle, error, load } = getBottle(props.id)
    load()
    return { bottle, error, load }
  }
}
</script>

<style>

</style>