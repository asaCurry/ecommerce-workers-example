import React, {useState, useEffect} from 'react';


export default function Example(){
        const [title, setTitle] = useState('An Example Page for Testing');
        const [exampleData, setExampleData] = useState([]);

        // basic fetch query, returns data as json
        const getData = () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
              .then(data => data.json())
          }

        // useEffect hook example, [] means it will only run once. mounted adds an extra check that the component is readay before firing the call 
        useEffect(() => {
            let mounted = true;
            getData()
                .then(data => {
                if(mounted) {
                    let sortedData = data.sort((a,b) => {
                        return a.title < b.title ? -1 : 1;
                    })
                    setExampleData(sortedData)
                }
            })

            return () => mounted = false;
        }, []) 

        return (
            <div className="">
                <div className="inner-wrapper flex flex-col justify-start items-center py-8 min-h-screen text-black">    
                    <h1>{ title }</h1>
                    {exampleData &&
                        exampleData.map((datum, index) => {
                            return (
                                <div key={index} >
                                    <p>{index + 1}. {datum['title']}</p>
                                    <p>{datum.body}</p>
                                </div>  
                            )
  
                        })
                    }
                </div>
            </div>
        )
}