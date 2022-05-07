import React from 'react';
import agriProducts from '../agriData';
import AgriProduct from '../components/AgriProduct';

function HomeScreen() {
    return (
        <div>
            <div className='row'>

                {agriProducts.map(agriProduct =>{
                    return <div className='col-md-4'>
                        <div>
                            <AgriProduct agriProduct = {agriProduct}/>
                        </div>
                    </div>
                })}

            </div>
        </div>
    );
}

export default HomeScreen;