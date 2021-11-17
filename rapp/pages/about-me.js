import React, {useState} from 'react';


export default function AboutMe(){
        const [title, setTitle] = useState('About Me');

        return (
            <div className="">
                <div className="inner-wrapper flex flex-col justify-start items-center py-8 min-h-screen text-black">    
                    <h1>About Me</h1>
                </div>
            </div>
        )
}