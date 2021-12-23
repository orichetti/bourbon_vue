<template>
  <div class="formHeader" >
    <h1>{{ header }}</h1> 
    <div v-if="updating" id="jset">
      <h2>ID:{{ bottle.rowid }} = {{ bottle.name }}</h2>
      <div id="div1">  
          <i><strong id="label">Name:</strong></i><input id="inName" type="text" ref="templateRef" v-model="bottle.name">
          <i><strong id="label">Brand:</strong></i><input id="inName" type="text" v-model="bottle.brand">
          <i><strong id="label">Distillery:</strong></i><input id="inForm" type="text" v-model="bottle.distiller">
          <i><strong id="label">Age/Years:</strong></i><input id="inId" type="text" v-model="bottle.age">
      </div>
      <br>
      <div id="div1">
          <i><strong id="label">Proof:</strong></i><input id="inId" type="text" v-model="bottle.proof">
          <i><strong id="label">Alc/Vol%:</strong></i><input id="inId" type="text" v-model="bottle.alcVol">
          <i><strong id="label">Type:</strong></i><input id="inType" type="text" v-model="bottle.type">
          <i><strong id="label">Size/ml:</strong></i><input id="inId" type="text" v-model="bottle.size">
          <i><strong id="label">Website:</strong></i><input id="inForm" type="text" v-model="bottle.distWebsite">
      </div> 
      <br>
      <div id="div1">
          <a href="/" id="caution">Cancel</a>
          <button @click="update" type="submit" id="bColor">Update Bourbon</button>
          <button @click="remove(bottle.rowid)" type="submit" id="bColor">Delete Bourbon</button>
          <a href="/collection" id="caution">Close</a>
      </div>
    </div>   
    <div v-if="updated" id="jset">
    <h2>{{ addedConfirm }}</h2>
    <h2>Updated Bottle Id:{{ formData.id }} named {{ formData.name }}, by {{ formData.brand }}, from {{ formData.distiller }}...</h2>
    <a href="/collection" id="caution">Close</a>
    </div>
    <div v-if="deleted" id="jset">
    <h2>{{ deleteConfirm }}</h2>
    <h2>Bottle Id:{{ formData.id }} named {{ formData.name }}, by {{ formData.brand }}, from {{ formData.distiller }} is no longer in this collection...</h2>
    <a href="/collection" id="caution">Close</a>
    </div>
  </div>
</template>

<script>
import updateBourbon from '../composables/updateBourbon'
import deleteBourbon from '@/composables/deleteBourbon'
import { ref } from 'vue'
export default {
  name: 'Spirits',
  props: ['header', 'bottle', 'addedConfirm', 'deleteConfirm'], // props registered here come from Collection.vue inside <Details /> tag.
  components: 'Collection',
  data() {
    const formData = ref({
      id: this.bottle.rowid,
      name: this.bottle.name,
      brand: this.bottle.brand,
      distiller: this.bottle.distiller,
      age: this.bottle.age,
      proof: this.bottle.proof,
      alcVol: this.bottle.alcVol,
      type: this.bottle.type,
      size: this.bottle.size,
      distWebsite: this.bottle.distWebsite,
    })
    const updating = true
    const updated = false
    const deleted = false
    return { formData, updating, updated, deleted }
  },
  mounted() {
    this.$refs.templateRef.focus()
  },
  methods: {
    update() {
      this.formData = ref({
        id: this.bottle.rowid,
        name: this.bottle.name,
        brand: this.bottle.brand,
        distiller: this.bottle.distiller,
        age: this.bottle.age,
        proof: this.bottle.proof,
        alcVol: this.bottle.alcVol,
        type: this.bottle.type,
        size: this.bottle.size,
        distWebsite: this.bottle.distWebsite,
        })
      updateBourbon(this.formData)
      this.updating = false
      this.updated = true
    },
    remove(id) {
      const url = `http://localhost:5000/collection/`
      console.log(id)
      console.log(`${url}${id}`)
      deleteBourbon(id)
      this.updating = false
      this.deleted = true
    },
    close() {
      console.log(this.hide)
      this.$refs.hide = false
      console.log(this.hide)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  font-weight: bold;
  color: darkcyan;
}
</style>
