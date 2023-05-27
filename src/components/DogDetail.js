import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

export default function DogDetails({getDog}) {
    const {dog} = useParams(); // get URL params
    // set to empty string to not have problems rending image
    const [dogDetails, setDogDetails] = useState('');
    // get dog details using URL params
    useEffect(() => {
        const dogInfo = getDog(dog);
        setDogDetails(dogInfo);
    }, [dog, getDog]);

    return (
        <>
            <h1>{dog} Details</h1>
            <img className='img' src={dogDetails.src} alt={dogDetails.name}/>
            <h2>Name: {dogDetails.name}</h2>
            <h2>Age: {dogDetails.age}</h2>
            <h4>{dogDetails.name} facts</h4>
            <hr></hr>
            <ul>
            {dogDetails.facts && dogDetails.facts.map( facts => <li>{facts}</li>)}
            </ul>
        </>
    )
}
//{dogDetails.facts.map( facts => <li>{facts}</li>)}