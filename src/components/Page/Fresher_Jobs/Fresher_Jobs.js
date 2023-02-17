import React, { useEffect, useState } from 'react';
import Fresher_contint from './Fresher_contint';

const Fresher_Jobs = () => {
    const [fresher , setFresher] = useState([])

    useEffect(()=>{
        fetch('fresherJob.json').then(res => res.json())
        .then(data => setFresher(data))
    }, [])

    return (
        <div>
            <div className='grid  grid-cols-1 xl:grid-cols-3 md:grid-cols-2 justify-center'>
                {fresher.map((jobs , i) => <Fresher_contint job= {jobs} key={i+1}></Fresher_contint>)}
                </div> 

                <div className='mx-auto  w-44 mb-8 mt-3'>
                    <button className="btn btn-accent text-center">Fresher All Jobs</button>
                </div>
        </div>
    );
};

export default Fresher_Jobs;