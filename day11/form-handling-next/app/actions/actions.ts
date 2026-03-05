'use server'

import { setFips } from "crypto"
import { Inputs } from "../form/page"



const createFeedback = async (formData: FormData) => {

  console.log(formData)

  const name = formData.get('name')
  const email = formData.get('email')
  const comment = formData.get('comment')

  if(true){
    return {message: 'Name or email isn`t correct'}
  }


  return new Promise((resolve, reject) => {
    setTimeout(()=>resolve({ success: true, error: null }), 100)
  }).then(response => response);
}

export  default createFeedback;