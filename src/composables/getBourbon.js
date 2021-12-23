import url from '@/service'
import { ref } from 'vue'

const getBourbon = () => {
    const bourbon = ref([])
    const error = ref(null)

    const load = async () => {
        try{
            let data = await fetch(url)
            if (!data.ok){
                throw Error ('No data available...')
            }
            bourbon.value = await data.json()
        } catch(error) {
            error.value = error.message
        }
    }
    return { bourbon, error, load }
}



export default getBourbon