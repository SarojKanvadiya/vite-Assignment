import { useEffect, useState } from "react";

export default function Restaurants() {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/restaurants`)
        .then((res)=>res.json())
        .then((res)=>setRestaurants(res))

        console.log(restaurants)
    },[])

    return (
        <div className="card-container">
            {
                restaurants.map((el)=>{
                    return(
                        <div>
                           <div>
                            <img src={el.image} alt={el.name} />
                        </div>
                           
                       <div>
                        <h3>{el.name}</h3>
                            <p>Rating: {el.rating}</p>
                            <p>Distance in KM: {el.distance}</p>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}