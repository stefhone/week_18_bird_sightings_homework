import {useState} from "react";
import { postSighting } from "./SightingService";

const SightingsForm = ({addSighting}) => {
    
    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postSighting(formData).then(()=>{
            addSighting(formData);
        })
    }

    return (
        <form onSubmit={onSubmit} id="sightings-form" >
            <h2>Add a Sighting</h2>
            {/* changed class to className - throwing error in console when using class - invalid jsx */}
            <div className="formWrap">
                {/* changed for to htmlFor - throwing error in console when using for - invalid jsx */}
                <label htmlFor="species">Species:</label>
                <input onChange={onChange} type="text" id="species"  />
            </div>
            {/* changed class to className - throwing error in console when using class - invalid jsx */}
            <div className="formWrap">
                {/* changed for to htmlFor - throwing error in console when using for - invalid jsx */}
                <label htmlFor="location">Location:</label>
                <input onChange={onChange} type="text" id="location"  />
            </div>
            {/* changed class to className - throwing error in console when using class - invalid jsx */}
            <div className="formWrap">
                {/* changed for to htmlFor - throwing error in console when using for - invalid jsx */}
                <label htmlFor="date">Date:</label>
                <input onChange={onChange} type="date" id="date"  />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default SightingsForm;