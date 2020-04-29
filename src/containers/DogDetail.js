import React from 'react';
import dogs from "../dogsdata";

const DogDetail = (props) => {
    const ID = props.match.params.kopekid;
    const DogDetail = dogs.filter((dog) => dog.id == ID);
    return (
        <div>
            <ul>
                <ul>
                    {
                        DogDetail.map((dog) => {
                            return (
                                <>
                                <li key={dog.id}>Köpek adı:{dog.name}</li>
                                <li key={dog.id}>Hakkında:{dog.description}</li>
                                <li key={dog.id}>Olgunluk:{dog.age}</li>
                                <li key={dog.id}><img src={dog.image} alt=""/></li>
                                </>
                            )
                        })
                    }
                </ul>
            </ul>
        </div>
    );
};

export default DogDetail;