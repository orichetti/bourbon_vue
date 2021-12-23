<template>
    <div class="collect">
        <h1>{{ spiritHeader }}</h1>
        <Details
            v-if="showDetails" 
            :hide="showDetails"
            :header="detailsHeader" 
            :bourbon="bourbon" 
            :bottle="bottle"
            :addedConfirm="addedConfirm"
            :deleteConfirm="deleteConfirm"
            />
    </div>
    <div @dblclick="selectBottle(spirit)" v-for="spirit in bourbon" :key="spirit.rowid">
        <fieldset id="fset">
            <legend id="legend"><i><strong>~{{ spirit.rowid }} bottles of bourbon on the wall...</strong></i></legend><br>
                <input v-if="showId" id="inId" type="text" :value="spirit.rowid">   
                <div id="div">
                    <i><strong id="label">Name:</strong></i><strong id="inName">{{ spirit.name }}</strong>
                    <i><strong id="label">Brand:</strong></i><strong id="inName">{{ spirit.brand }}</strong>
                    <i><strong id="label">Distillery:</strong></i><strong id="inName">{{ spirit.distiller }}</strong>
                    <i><strong id="label">Age/Years:</strong></i><strong id="inName">{{ spirit.age }}</strong>
                
                    <i><strong id="label">Proof:</strong></i><strong id="inName">{{ spirit.proof }}</strong>
                    <i><strong id="label">Alc/Vol%:</strong></i><strong id="inName">{{ spirit.alcVol }}</strong>
                    <i><strong id="label">Type:</strong></i><strong id="inName">{{ spirit.type }}</strong>
                    <i><strong id="label">Size/ml:</strong></i><strong id="inName">{{ spirit.size }}</strong>
                    <i><strong id="label">Website:</strong></i><strong id="inName">{{ spirit.distWebsite }}</strong>
                </div>
        </fieldset>
    </div>
</template>

<script>
import Details from '@/components/Details.vue'
import getBourbon from '@/composables/getBourbon'
// import deleteBourbon from '@/composables/deleteBourbon'
import { ref } from 'vue'
export default {
    name: 'Collection',
    components: { Details },
    setup() {
        const spiritHeader = ref('Bourbon Inventory')
        const detailsHeader = ref('Here is more information on this delicous Bourbon...')
        const addedConfirm = ref('Thanks for making this right, accurate information is important...')
        const deleteConfirm = ref('So sorry to see this bottle go, perhaps our paths will cross again someday...')
        const showId = ref(false)
        const showDetails = ref(false)
        const inputRef = ref(null)
        const { bourbon, error, load } = getBourbon()
        load()
        const bottle = ref()
        const selectBottle = (spirit) => {
            showDetails.value = true
            bottle.value = spirit
        }
        const closeDetails = () => {
            showDetails = False
        }

        return { 
            spiritHeader, 
            bourbon, 
            error, 
            load, 
            showId, 
            Details, 
            detailsHeader,
            addedConfirm,
            deleteConfirm,
            showDetails,
            selectBottle,
            bottle,
            inputRef,
            closeDetails,
            }
    }
}
</script>

<style>

</style>