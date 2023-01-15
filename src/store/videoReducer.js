import { createSlice } from "@reduxjs/toolkit"

const defaultState = [
    {
        id:1,
        title:'Strange Moon',
        likes:400,
        views:125097,
        preview:'Moon.png',
        desc:'Hi.It is my new video in my portfolio.This video is the best of all which I did.In this video.I use and edit voice in Adobe Audition.Also I put many elements of motion design which I made in Adobe After Effects. Also I tried made intro in glitch style.So, I am happy with the result.',
        url:'https://youtu.be/UikEaGmlRRg'
        


    },
    {
        id:2,
        title:'C# Programming',
        likes:400,
        views:125097,
        preview:'coding.png',
        desc:'C# is an object-oriented, component-oriented programming language. C# provides language constructs to directly support these concepts, making C# a natural language in which to create and use software components. Since its origin, C# has added features to support new workloads and emerging software design practices.',
        url:'https://www.youtube.com/watch?v=BfEjDD8mWYg'

    },
    {
        id:3,
        title:'My trash story',
        likes:400,
        views:125097,
        preview:'story.png',
        desc:'In this video I am going to tell you about my childhood story.It is story placed in my school.School was my second home.Sometimes there are placed strange and stupid events ',
        url:'https://www.youtube.com/watch?v=9GorqroigqM'

    },
    {
        id:4,
        title:'Modern NYC',
        likes:400,
        views:125097,
        preview:'NYC.png',
        desc:'Hi.It is my new video.I created video about New York.I understand what i can`t shoot video on the camera.It is difficult for me.So I decided to download the stock videos from different sources.It was correct decision.I downloaded the stock video about New Your.I created this video from these stock videos.So I  Happy with our result',
        url:'https://youtu.be/iv84hBwooe4'

    },
    {
        id:5,
        title:'My Street',
        likes:400,
        views:125097,
        preview:'Street.png',
        desc:'This is my firs video which was made using phone camera.Also I using color editing',
        url:'https://youtu.be/ZSm7X_1TY4U'

    },
    {
        id:6,
        title:'My Hobby',
        likes:400,
        views:125097,
        preview:'Hoby.png',
        desc:'My favourite hobby is watching TV. Whenever I have free time, I love watching Television. It never obstructs my studies. Hobbies help us to expand our knowledge, and it teaches us several things. First, I like to finish all my school homework and then start watching TV. This lightens my mood and sparks up the excitement inside me, as it increases my curiosity about the world. Watching different useful stuff on TV enhances my knowledge horizons and gives me lots of joy. ',
        url:'https://www.youtube.com/watch?v=RwJoTlrk7B4'

    }
]

const videoReducer = createSlice({
    name:'video',
    initialState:{value:defaultState}
    
})

export default videoReducer.reducer
