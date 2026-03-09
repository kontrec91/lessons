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