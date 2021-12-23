import url from '@/service'
import axios from 'axios'

const updateBourbon = (formData) => {
    try{
        axios.patch(
            `${url}${formData.id}`,
            {formData},
            ).then(response => {
            })
    }catch(error) {
        error.value = error.message
    }
}
export default updateBourbon