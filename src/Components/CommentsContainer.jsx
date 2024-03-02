import { useSelector } from "react-redux";


const commentData = [
    {
        name:"Piyush Mishra",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies:[
            {
                name:"Piyush Mishra",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
                replies:[
                    {
                        name:"Piyush Mishra",
                        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
                        replies:[
                            {
                                name:"Piyush Mishra",
                                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
                                replies:[
                                    
                        
                                ]
                            },
                            {
                                name:"Piyush Mishra",
                                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
                                replies:[
                                    {
                                        name:"Piyush Mishra",
                                        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
                                        replies:[
                                            {
                                                name:"Piyush Mishra",
                                                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
                                                replies:[
                                                    
                                        
                                                ]
                                            }
                                            
                                
                                        ]
                                    }
                                    
                        
                                ]
                            }
                
                        ]
                    }
        
                ]
            }

        ]
    },
    {
        name:"Piyush Mishra",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies:[

        ]
    },
    {
        name:"Piyush Mishra",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies:[
            {
                name:"Piyush Mishra",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
                replies:[
                    {
                        name:"Piyush Mishra",
                        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
                        replies:[
                            {
                                name:"Piyush Mishra",
                                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
                                replies:[
                        
                                ]
                            }
                
                        ]
                    }
                ]
            }

        ]
    },
    {
        name:"Piyush Mishra",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies:[

        ]
    },
    {
        name:"Piyush Mishra",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies:[
            {
                name:"Piyush Mishra",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
                replies:[
                    {
                        name:"Piyush Mishra",
                        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
                        replies:[
                            {
                                name:"Piyush Mishra",
                                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
                                replies:[
                                    {
                                        name:"Piyush Mishra",
                                        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
                                        replies:[
                                
                                        ]
                                    }
                        
                                ]
                            }
                
                        ]
                    }
        
                ]
            }

        ]
    },
    {
        name:"Piyush Mishra",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        replies:[

        ]
    },
]

const Comment = ({data})=>{

    const {name,text}= data;
     
    return <div className="flex shadow-lg bg-gray-200 rounded-lg m-4">
        <img className="rounded-full w-10 h-10  ml-8 mt-2" src="https://i.ibb.co/vcmKwkc/guest.png" alt="user profile"></img>
        <div className="px-3 mt-2">
            <p className="font-bold">{name}</p>
            <p >{text}</p>
        </div>
    </div>
}


const CommentsList = ({comments})=>{


    const IsDark = useSelector(store => store.app.IsDarkMode);


   
    return  comments.map((comment,ind)=>( 
    
        <div key={ind}>
                <Comment  data={comment}/>

                <div className={"ml-10  border "+(IsDark?"border-r-white border-t-[rgb(15,15,15)]":"border-l-black ")}>
                    <CommentsList comments={comment.replies}/>
                </div>
        </div>
    
    
    ))
  
}

export const CommentsContainer = () => {
  return (
    <div >
       <h1 className='m-4 p-2 text-2xl font-bold'> Comments:</h1> 
        
        <CommentsList comments={commentData}/>
    </div>

    
  )
}
