import React from 'react';

const Recipes = () => {
    return (
        <div className='mt-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='p-4 lg:p-6 border rounded-md text-center'>
                <p><small>Category</small></p>
                <h2 className='text-2xl mt-2'>Item Name</h2>
            </div>
        </div>
    );
};

export default Recipes;