import { toast } from 'react-toastify'
interface Login {
  login: string,
  password: string
}

const BASE_URL = 'http://localhost:3000';

export async function login(login: Login, onSuccess: any) {
  console.log("api started", login)
  let res: any;
  try {
    res = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(login)
    })
    res = await res.json()



    if (res.statusCode >= 300) {
      throw Error(res.message)
    }

    window.localStorage.setItem('login', JSON.stringify(res))


    toast.success('Login successful')
    onSuccess()
  }
  catch (err) {
    console.log(err)
    toast.error(err.message)

  }

  return res;
}

interface Signup {
  login: string,
  password: string
}



export async function signup(signup: Signup, onSuccess: any) {
  console.log("api started", login)
  let res: any;
  try {
    res = await fetch(`${BASE_URL}/users/sign-up`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(signup)
    })
    res = await res.json()



    if (res.statusCode >= 300) {
      console.log(typeof res.message)
      throw Error(res.message)
    }

    toast.success('Singup successful')
    onSuccess()
  }
  catch (err) {
    console.log(err)
    toast.error(err.message)

  }

  return res;
}

export async function dataleaderboard(token: string) {
  console.log("api started", login)
  let res: any;
  try {
    res = await fetch(`${BASE_URL}/users/leaderboard`, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
    res = await res.json()



    if (res.statusCode >= 300) {
      console.log(typeof res.message)
      throw Error(res.message)
    }
  }
  catch (err) {
    console.log(err)
    toast.error(err.message)

  }

  return res;
}