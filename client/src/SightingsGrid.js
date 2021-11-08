import SightingCard from "./SightingCard";
const SightingsGrid = ({sightings, removeSighting}) => {
    // added 2nd parameter 'index' throwing error in console without it 
    const sightingsList = sightings.map((sighting, index) =>{
        // added key={index} property to SightingCard component
        return <SightingCard key={index} sighting={sighting} removeSighting={removeSighting} />
    });
    
    return (
        <div className="constraint">
            <h1 className="sightings-list-title">Sightings List</h1>
            <div className="container-sightings-list">
                {sightingsList}
            </div>
        </div>
    );

}

export default SightingsGrid;