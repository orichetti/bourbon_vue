<template>
    <div class="addForm" >
        <form action="" >
        <fieldset id="jset">
                <legend id="legend"><strong><i>{{ header }}</i></strong></legend>
                <div class="container1">
                    <label for="name" id="label">Name:</label>
                    <input type="text" name="name" class="input" v-model="formData.name">
                </div>
                <div class="container1">
                    <label for="brand" id="label">Brand:</label>
                    <input type="text" name="brand" class="input" v-model="formData.brand">
                </div>
                <div class="container1">
                    <label for="distiller" id="label">Distillery:</label>
                    <input type="text" name="distiller" class="input" v-model="formData.distiller">
                </div>
                <div class="container1">
                    <label for="age" id="label">Age:</label>
                    <input type="text" name="age" class="input" v-model="formData.age">
                </div>
                <div class="container1">
                    <label for="proof" id="label">Proof:</label>
                    <input type="text" name="proof" class="input" v-model="formData.proof">
                </div>
                <div class="container1">
                    <label for="alcVol" id="label">AlclVol:</label>
                    <input type="text" name="alcVol" class="input" v-model="formData.alcVol">
                </div>
                <div class="container1">
                    <label for="type" id="label">Type:</label>
                    <input type="text" name="type" class="input" v-model="formData.type">
                </div>
                <div class="container1">
                    <label for="size" id="label">Size:</label>
                    <input type="text" name="size" class="input" v-model="formData.size">
                </div>
                <div class="container1">
                    <label for="distWebsite" id="label">Website:</label>
                    <input type="text" name="distWebsite" class="input" v-model="formData.distWebsite">
                </div>
                <div class="container1">
                    <a href="/" id="caution">Cancel</a>
                    <button @click.prevent="addBourbon" type="submit" id="bColor">Add New Bourbon</button>
                    <a href="/collection" >Close</a>
                </div>
        </fieldset>
        </form>
    </div>
    <div v-if="added" class="addForm">
        <h2>Excellent Choice!</h2>
        <h2>{{` Adding ${formData.name}, by ${formData.brand}, from ${formData.distiller},  to Collection...`}}</h2>
        <a href="/collection" >Close</a>
    </div>
    <div v-if="noName" class="addForm">
        <h2>Please Enter Name information...</h2>
        <a href="/collection" >Close</a>
    </div>
</template>

<script>
import addBourbon from '@/composables/addBourbon'
import { ref } from 'vue'
export default {
    name: 'Add Bourbon',
    props: ['header'], // props registered here come from Add.vue inside <AddSpirits /> tag.
    data() {
        const formData = ref({
            name: '',
            brand: '',
            distiller: '',
            age: '',
            proof: '',
            alcVol: '',
            type: '',
            size: '',
            distWebsite: '',
        })
        const added = ref(false)
        const noName = ref(false)
        return { formData, added, noName }
    },
    methods: {
        addBourbon(){
            if(this.formData.name !== ''){
                try {
                this.added = true
                this.noName = false
                addBourbon(this.formData)
            } catch(error) {
                error.value = error.message
            }
            } else {
                this.noName = true
            }
        }
    }
}
</script>

<style>

</style>