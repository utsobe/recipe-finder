import React, { useEffect, useState } from 'react';

const SearchBar = () => {
    const [recipes, setRecipes] = useState([]);
    // const [displayData, setDisplayData] = useState([]);
    const [searched, setSearched] = useState([]);
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    const getSearch = e => {
        const searchInput = e.target.value.toLowerCase();
        const searchResult = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchInput));
        setSearched(searchResult);
    };

    // console.log(searched);

    return (
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
            <div className='flex justify-center mt-5'>
                <div>
                    <div>
                        <h2 className='text-lg lg:text-3xl text-center'>The Twelve Cafe Bar Recipe</h2>
                    </div>
                    <div className="form-control mx-auto mt-5">
                        <div className="input-group w-5xl">
                            <input onChange={(e) => getSearch(e)} type="text" placeholder="Search…" className="input input-bordered max-w-5xl" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    searched.map(recipeData =>
                        <div className='p-4 lg:p-6 border rounded-md text-center'>
                            <p><small>{recipeData.category}</small></p>
                            <h2 className='text-2xl mt-2'>{recipeData.name}</h2>
                        </div>)
                }
            </div>
        </div>

    );
};

export default SearchBar;