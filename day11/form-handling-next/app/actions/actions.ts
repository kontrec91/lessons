'use server'

 const createFeedback = async (formData: FormData) => {

  console.log(formData)

  const name = formData.get('name')
  const email = formData.get('email')

  if(!name || !email){
    return {success:false, error: 'Name and email are required'}
  }

  return { success: true, error: null };
}

export  default createFeedback;