<template>
    <AddSpirits v-if="showAddForm" :header="addHeader" /> <!-- header is a prop registered in AddBourbon.vue under export default inside props array...example  props: ['header'] -->
</template>

<script>
import AddSpirits from '@/components/AddSpirits.vue'
import { ref } from 'vue'
export default {
    name: 'Add',
    components: { AddSpirits },
    setup() {
        const showAddForm = ref(true)
        const toggleAddForm= () => {
            showAddForm.value = !showAddForm.value
        }
        const addHeader =  ref('Oooo, A New Bottle Of Bourbon!!!')

        return { showAddForm, toggleAddForm, addHeader }
    }
}
</script>

<style>

</style>