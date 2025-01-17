import { useEffect, useState } from "react";

export default function DisplayPost(){
    const [data, setData] = useState([]);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then((response) => response.json())
			.then((res) => setData(res));
	}, []);

    return (
        <div className="card-container">
            {!data && <h1>Loading.....</h1>}
            {data &&
            data.map((el,i)=>{
                return(
                    <div className="card" key={i}>
                        <h2>{el.title}</h2>
                        <p>{el.body}</p>
                    </div>
                )
            })}
        </div>
    )
   
}