import React, { useEffect, useState } from 'react';

const SearchBar = () => {
    const [recipes, setRecipes] = useState([]);
    const [searched, setSearched] = useState([]);
    const [recipeDetail, setRecipeDetail] = useState({});
    const [error, setError] = useState('');
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    const getSearch = e => {
        const searchInput = e.target.value.toLowerCase();
        const searchResult = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchInput));
        if (searchResult.length > 0) {
            setError('');
            setSearched(searchResult);
        } else {
            setError('Result not found');
            setSearched([]);
        }
    };

    console.log(error);


    // show details in modal
    const getSingleRecipe = id => {
        const singleRecipe = recipes.find(oneRecipe => oneRecipe._id === id);
        setRecipeDetail(singleRecipe);
        console.log(singleRecipe);
    }


    return (
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
            <div className='flex justify-center mt-5'>
                <div>
                    <div>
                        <h2 className='text-lg lg:text-3xl text-center'>The Twelve Cafe Bar Recipe</h2>
                    </div>
                    <div className="form-control mx-auto mt-5 relative">
                        <svg className='h-4 w-4 absolute top-4 left-4' aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input onChange={(e) => getSearch(e)} type="text" placeholder="Search by name…" className="input input-bordered pl-11" />
                        {error && <p className='text-red-600 mt-1'><small>{error}</small></p>}
                    </div>
                </div>
            </div>

            {/* recipe cards */}
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    searched.map(recipeData =>
                        <label onClick={() => getSingleRecipe(recipeData._id)} htmlFor="my-modal-3" key={recipeData._id} className='p-4 lg:p-6 border rounded-md text-center cursor-pointer hover:shadow-lg hover:border-none duration-200'>
                            <p><small>{recipeData.category}</small></p>
                            <h2 className='text-2xl mt-2'>{recipeData.name}</h2>
                        </label>)
                }
            </div>

            {/* recipe modal */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal px-2">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl">{recipeDetail?.name} <span className='ml-1 text-sm'><small>({recipeDetail?.category})</small></span></h3>
                    {recipeDetail?.recipe?.hot && <p className='mt-4'><span className='font-semibold text-red-600'>Hot - </span>{recipeDetail.recipe.hot}</p>}
                    {recipeDetail?.recipe?.cold && <p className='mt-4'><span className='font-semibold text-blue-600'>Cold - </span>{recipeDetail.recipe.cold}</p>}
                    {recipeDetail?.recipe?.note && <p className='mt-4'><span className='font-semibold text-orange-600'>Note - </span>{recipeDetail.recipe.note}</p>}
                </div>
            </div>

        </div>

    );
};

export default SearchBar;