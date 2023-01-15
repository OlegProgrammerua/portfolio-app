import { createSlice } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";

const defaultstate = [
    {
        id:1,
        img:'camera.png',
        type:'camera',
        name:'NIKON EOS 200D'
    },
    {
        id:2,
        img:'tripod.png',
        type:'tripod',
        name:'DK-3888'
    },
    {
        id:3,
        img:'stabilizer.png',
        type:'Stabilizer',
        name:'FeiyuTech AK4500 DSLR'
    },
    {
        id:4,
        img:'video_editor.png',
        type:'Video Editor',
        name:'Adobe Premire Pro'
    },
    {
        id:5,
        img:'audio_editor.png',
        type:'Audio Editor',
        name:'Adobe Audition'
    },
    {
        id:6,
        img:'effects_edtior.png',
        type:'Effects Editor',
        name:'Adobe After Effects'
    }
]
const GearReducer = createSlice({
    name:'gear',
    initialState:{value:defaultstate}
})

export default GearReducer.reducer