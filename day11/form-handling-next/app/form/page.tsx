
'use client'

import createFeedback from "../actions/actions";
import { useForm } from "react-hook-form"
import "./../globals.css";
import { useActionState } from "react";
import { FeedbackState, initState, Inputs, resultType } from "../types/types";


// const FeedbackForm = ()=> {

//     const [error, setError] = useState<null | string>(null);
//     const [isSuccess, setIsSuccess] = useState(false);

//      const { register, handleSubmit, reset,  } = useForm<Inputs>({
//         defaultValues: initState
//      });

      
//     const onSubmit = async (data: Inputs)=> {
//         setError(null)
//         setIsSuccess(false)

//         const formData = new FormData();
//         formData.append('name', data.name)
//         formData.append('email', data.email)
//         formData.append('comment', data.comment)

//         try {
//             const result = await createFeedback(formData) as resultType;
//                 if (result.success) {
//                     setIsSuccess(true)
//                     reset();
//                 } else {
//                     setError(result.error || 'Uknown error')
//                     reset();
//                 }
//             } 
//             catch(err){
//                 setError('Произошла ошибка сети');
//             }
       
//     }

//     return <>
//             <form className="feedbackForm" onSubmit={handleSubmit(onSubmit)}>
//                 <h3>Leave a feeback</h3>
//                 <input 
//                     className="formInput" 
//                     placeholder='Enter name'
//                     {...register("name", {
//                         required: true
//                     })} 
//                 />
//                 <input 
//                     type="email" 
//                     className="formInput" 
//                     placeholder='Enter email'
//                     {...register("email", {
//                         required: true
//                     })} 
//                 />
//                 <textarea             
//                     className="formInput" 
//                     placeholder="Your message"
//                     rows={5}
//                     {...register("comment", {
//                         required: true
//                     })} 
//                 />
//                 <button type="submit" className="submitFeedback">Send</button>
//             </form>   
//             {isSuccess && <p>Successful</p>}
//             {error && <p>{error}</p>}
//         </>
// }

// export default FeedbackForm;



 ///////////////////////////// useActionState//////////////////////////////
const FeedbackForm = ()=> {
    const initialState: FeedbackState = { 
        success: false, 
        error: null, 
    };
    const [state, formAction] = useActionState(
    async (prevState: FeedbackState, formData:FormData): Promise<FeedbackState> => {
            try {
                return await createFeedback(formData)
            } 
            catch(error){
                return {success: false, error: 'Network error'}
            }
} , initialState )

    return <>
            <form className="feedbackForm" action={formAction}>
                <h3>Leave a feeback</h3>
                <label htmlFor="name"></label>
                <input 
                    className="formInput" 
                    placeholder='Enter name'
                    name='name'
                    required             
                />
                <label htmlFor="email"></label>
                <input 
                    type="email" 
                                    name='email'
                                    className="formInput" 
                                    placeholder='Enter email'
                                    required
                />
                <label htmlFor="comment"></label>
                <textarea
                    name='comment'             
                    className="formInput" 
                    placeholder="Your message"
                    rows={5}
                />
                <button type="submit" className="submitFeedback">Send</button>
                {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
                {state.success && <p style={{ color: 'green' }}>✅ Успешно!</p>}
            </form>   
        </>
}


 export default FeedbackForm;

 //////////////////////////////////


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