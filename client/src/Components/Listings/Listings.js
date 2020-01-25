import React from 'react'


function Listings(props){
    console.log(props)
    const listings = props.listings.map((listings)=>{
       
        return(
            <li key = {listings.id}> 
    <h1>{listings.description}</h1>
            </li>
        )
    })
    return(
        <div> 
            <ul>
            {listings}
            </ul>
        </div>
    )
}
export default Listings