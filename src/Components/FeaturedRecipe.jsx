import React from 'react'
import { Clock3, Star, ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router'


const FeaturedRecipe = ({recipe}) => {
    let navigate = useNavigate()
  return (

<div className="flex w-full flex-col gap-5 lg:col-span-2 lg:h-[700px]">
  <div className="group relative min-h-[500px] w-full flex-1 overflow-hidden rounded-2xl">

    <img
      src= {recipe.image}
      alt={recipe.title}
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

    <div className="absolute bottom-0 p-5 sm:p-6">
      <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-orange-400">
        <Star size={14} fill="currentColor" />
        Featured Recipe
      </p>

      <h2 className="text-2xl font-bold text-white">
        {recipe.title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-200">
        {recipe.description}
      </p>

      <div className="mt-4 flex items-center gap-5 text-sm text-white">
        <span className="flex items-center gap-2">
          <Clock3 size={15} />
          {recipe.prepTime} min
        </span>
        <span>₹{recipe.price}</span>
      </div>
    </div>
  </div>

  {/* View More Button */}
  <button onClick={() => navigate("/recipes")} className="w-full shrink-0 rounded-xl border border-orange-100 bg-white px-6 py-4 text-sm font-medium text-orange-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50 hover:shadow-md">
    View More Recipes <span className="ml-1">→</span>
  </button>

</div>

  )
}

export default FeaturedRecipe
