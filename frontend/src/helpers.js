import Cookies from 'universal-cookie';
const cookies = new Cookies();


const getAuthToken = () => {
    cookies.getAll()
    const token = cookies.cookies['my-app-auth']
    return  `Bearer ${token}`
  }

  export default getAuthToken