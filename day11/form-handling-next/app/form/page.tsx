
'use client'

import createFeedback from "../actions/actions";
import { Control, useForm, useFormState } from "react-hook-form"
import "./../globals.css";
import { useState } from "react";


export type resultType = { success: boolean, error: null | string }

export type Inputs = {
    name: string,
    email: string,
    comment: string
  }

  export const initState: Inputs= {
    name: '',
    email: '',
    comment: ''
  }



// const ErrorNotification = ({ control }: {control: Control<Inputs, any, Inputs>}) => {
//     const {dirtyFields} = useFormState({control});
//     console.log('dirtyFields', dirtyFields)
//     return dirtyFields.name?  <p style= {{color: 'red'}}>Name or email isn`t correct</p> : null
// }



const FeedbackForm = ()=> {

    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

     const { register, handleSubmit, formState: { errors }, reset, control } = useForm<Inputs>({
        defaultValues: initState
     });


    const onSubmit = async (data: Inputs)=> {

        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('comment', data.comment)

        try {
            const result = await createFeedback(formData) as resultType;
                if (result.success){
                    setIsSuccess(true);
                }
            } catch(error){
                console.log(error)
                    // setError(error!.message)
            }

            setError(null)
            setIsSuccess(false)
       
    }

    return <form className="feedbackForm" action={handleSubmit(onSubmit)}>
            <h3>Leave a feeback</h3>
            {/* <input name="email" type="email" className="formInput" required/> */}
            <input 
                className="formInput" 
                placeholder='Enter name'
                {...register("name", {
                    required: true
                })} 
            />
            {/* {errors.name && <p>{'Name or email isn`t correct'}</p>} */}
            {/* <ErrorNotification control={control} />  */}
            <input 
                type="email" 
                className="formInput" 
                placeholder='Enter email'
                {...register("email", {
                    required: true
                })} 
            />
            {/* {errors.email && <p>{'Name or email isn`t correct'}</p>} */}
            <textarea             
                className="formInput" 
                placeholder="Your message"
                rows={5}
                {...register("comment", {
                    required: true
                })} 
            />
{/* 
            // <textarea 
            // name="message" 
            // className="formInput" 
            // placeholder="Your message"
            // rows={5}
            // required
            // ></textarea> */}

            <button type="submit" className="submitFeedback">Send</button>
        </form>   
}

export default FeedbackForm;



// import { useActionState, startTransition } from 'react';
// import { addToCart, removeFromCart } from './api';
// import Total from './Total';



// export default function Checkout() {
  
//  async function actionReducer(prevCount, actionType){
//    console.log('actionReducer',prevCount, actionType)
//   switch (actionType){
//       case 'add':
//       return await addToCart(prevCount)
//       break;

//       case 'remove':
//       return await removeFromCart(prevCount)
//       break;
      
//       default: 
//       console.log('no new value')
//       return prevCount;
//   }

// }
//   const [count, dispatchAction, isPending] = useActionState(actionReducer, 0);

//   function handleClick(action) {
//      console.log('action',action)
//     startTransition(()=> {
//       dispatchAction(action)
//     })
//   }

//   return (
//     <div className="checkout">
//       <h2>Checkout</h2>
//       <div className="row">
//         <span>Eras Tour Tickets</span>
//         <span>Qty: {count}</span>
//       </div>
//       <div className="row">
//         <button onClick={()=> handleClick('add')}>Add Ticket{isPending ? ' 🌀' : '  '}</button>
//         <button onClick={()=> handleClick('remove')}>Remove Ticket{isPending ? ' 🌀' : '  '}</button>
//       </div>
//       <hr />
//       <Total quantity={count} />
//     </div>
//   );
// }