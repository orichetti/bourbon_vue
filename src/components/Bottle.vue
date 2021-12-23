<template>
    <div class="fset">
        <router-link :to="{ name:'Details', params: { id: bottle.rowid }}">
            <h3>{{ bottle.name }}</h3>
        </router-link>
    </div>
</template>

<script>
import Collection from '@/views/Collection.vue'
export default {
    props: ['bottle'],

}
</script>

<style>

</style>