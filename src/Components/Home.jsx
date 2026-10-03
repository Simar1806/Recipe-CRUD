
import React, { useContext } from 'react'
import { Clock3, Star, ShoppingCart } from 'lucide-react'
import { MyStore } from '../MyContext/MyWebContext'
import RecipeCard from './RecipeCard'
import FeaturedRecipe from './FeaturedRecipe'
import { useNavigate } from 'react-router'
import RecipeForm from './RecipeForm'

const HomePage = () => {
    let {recipes , cartRecipes , isFormOpen} = useContext(MyStore)
    let navigate = useNavigate()
  return (
    <main className="min-h-screen bg-[#fffaf3] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1600px]">

        {/* Hero Section */}
        <section className="relative mb-6 flex min-h-[340px] items-center overflow-hidden rounded-2xl bg-gray-950 sm:min-h-[380px] lg:min-h-[420px]">
          <img
            src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1600&q=85"
            alt="Delicious pasta"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/10" />

          <div className="relative z-10 max-w-xl px-7 py-10 sm:px-12">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-orange-300 sm:text-sm">
              DISCOVER · COOK · ENJOY
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Discover Your Taste
            </h1>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-200 sm:text-base">
              Explore delicious recipes, discover new flavors, and find your
              next favorite dish from talented chefs.
            </p>

            <button
            onClick={() => navigate("/recipes")}
              type="button"
              className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-orange-500 hover:text-white"
            >
              Explore Recipes
            </button>
          </div>
        </section>

        {/* Recipes Grid */}

{/* Main Section: Divide space */}
<section className="grid grid-cols-1 gap-5 lg:grid-cols-5">

  {/* Featured Recipe - Left Side */}
   {
    isFormOpen ? <RecipeForm/> : recipes.slice(1,2).map((elem) => <FeaturedRecipe key = {elem.id} recipe = {elem}/>)
   }
    

  {/* Recipes Area - Right Side */}
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
    {recipes.slice(0, 8).map((elem) => {
        let isInCart = cartRecipes.find((val) => elem.id === val.id)
      return <RecipeCard key={elem.id} recipe={elem} isInCart = {isInCart} />}
    )}
  </div>

</section>


      </div>
    </main>
  )
}

export default HomePage
