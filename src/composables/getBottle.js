import { ref } from 'vue'
const url = 'http://localhost:5000/collection/'

const getBottle = () => {
    const bottle = ref([])
    const error = ref(null)

    const load = async () => {
        try{
            let data = await fetch(`${url}${id}`)
            if (!data.ok){
                throw Error ('Cannot seem to find this particular bottle at this time...')
            }
            bottle.value = await data.json()
        } catch(error) {
            error.value = error.message
        }
    }
    return { bottle, error, load }
}



export default getBottle