
import React, { useContext } from 'react'
import { MyStore } from '../MyContext/MyWebContext'
import RecipeCard from '../Components/RecipeCard'

const RecipePage = () => {
    let {recipes , cartRecipes} =  useContext(MyStore)
  return (
    <main className="min-h-screen bg-[#fffaf3] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">

        {/* Page Header */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-orange-600">
              Recipe Collection
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore All Recipes
            </h1>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Discover delicious recipes from different chefs and cuisines.
            </p>
          </div>

          {/* Recipe Count */}
          <div className="w-fit rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
            {recipes.length} Recipes
          </div>

        </div>

        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {recipes.map((elem) =>{
            let isInCart = cartRecipes.find((val) => elem.id === val.id)
            return <RecipeCard key={elem.id} recipe = {elem} isInCart = {isInCart} />})}

        </section>

      </div>
    </main>
  )
}

export default RecipePage
