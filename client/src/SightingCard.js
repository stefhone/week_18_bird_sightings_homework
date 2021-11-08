import { deleteSighting } from "./SightingService"

const SightingCard = ({sighting, removeSighting}) => {

    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id).then(()=>{
            removeSighting(sighting._id);
        })
    }
    return (
        <div className="container-sighting">
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> 🗑 &nbsp; Delete</button>
        </div>
    )
}

export default SightingCard;