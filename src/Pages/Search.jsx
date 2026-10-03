import React, { useContext } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import RecipeCard from '../Components/RecipeCard'
import { MyStore } from '../MyContext/MyWebContext'

const Search = () => {
    let {recipes , recipeToSearch} = useContext(MyStore)
    
    recipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(recipeToSearch) || recipe.chef.toLowerCase().includes(recipeToSearch))
    
  return (
    <main className="min-h-screen bg-[#fffaf3] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Results Header */}
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Recipe Discovery
            </p>

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Search Results
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Explore recipes made by talented chefs.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
            <SearchIcon size={16} />
            {recipes.length} Recipes
          </div>
        </div>

        {/* Recipe Results */}
        {recipes.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          /* Empty Results UI */
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-orange-200 bg-white/70 px-5 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <SearchIcon size={28} />
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              No recipes found
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
              We couldn't find any recipes matching your search. Try searching
              with a different name or ingredient.
            </p>
          </div>
        )}

      </div>
    </main>
  )
}

export default Search