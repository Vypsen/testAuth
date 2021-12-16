import axios from 'axios'
const addUser = async (name, second_name, patronymic, age, sex, diagnostic, email, password) =>{
    try {
         const response = await axios.post('http://localhost:5000/api/auth/registration',
         {name, second_name, patronymic, age, sex, diagnostic, email, password})
         alert(response.data.message)

    } catch (error) {
        alert(error)
    }
}

export default addUser