import { createSlice } from "@reduxjs/toolkit"

const defaultState = {
    
        address:'Lviv, kopernyka street №2',
        phone1:+380956278541,
        phone2:+380669931734,
        email1:'videopholio@gmail.com',
        email2:'olehvideo@gmail.com',
        instagram:'@oleg',
        telegram:'@oleg_life'
    
}    


const contactReducer = createSlice({
    name:'contacts',
    initialState:{value:defaultState}
})

export default contactReducer.reducer