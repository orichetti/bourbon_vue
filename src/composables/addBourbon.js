import url from '@/service'
import axios from 'axios'

const addBourbon = (formData) => {
    console.log('addBourbon method called in addBourbon.js...')
    console.log(`${url}`)
    console.log(formData)
    try{
        axios.post(
                `${url}`,
                {formData: formData},
            ).then(response => {
            })
    }catch(error) {
        error.value = error.message
    }
}
export default addBourbon