import url from '@/service'
import axios from 'axios'
//const url = 'http://localhost:5000/collection/'

const deleteBourbon = (id) => {
    console.log(`${url}` + id)
    console.log(`the id passed has a value of: ` + id)
    console.log(id)
    try{
        axios.delete(
            `${url}` + id,
            ).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log('Whoops, theres an issue...' + error.response)
        })
    }catch(error) {
        error.value = error.message
    }
}

export default deleteBourbon