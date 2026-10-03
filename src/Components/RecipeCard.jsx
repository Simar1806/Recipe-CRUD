import React, { useContext } from 'react'
import { Clock3, Star, ShoppingCart , Minus, Plus  } from 'lucide-react'
import { MyStore } from '../MyContext/MyWebContext'

const RecipeCard = ({recipe , isInCart}) => {
    let {setCartRecipes , increaseQuantity, decreaseQuantity} =  useContext(MyStore)
    
  return (
     <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-36 overflow-hidden sm:h-40">
              <img
                src= {recipe.image}
                alt={recipe.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-600 shadow-sm">
                ₹{recipe.price}
              </span>
            </div>

            <div className="p-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-orange-600">
                BY {recipe.chef}
              </p>
              <h3 className="text-base font-semibold text-gray-900">
                {recipe.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                {recipe.description}
              </p>

              <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock3 size={14} />
                  <span>{recipe.prepTime} min</span>
                </div>
                {isInCart ? 
<div className="flex items-center overflow-hidden rounded-xl border border-orange-200 bg-white">

  <button
  onClick={() => decreaseQuantity(recipe.id)}
    className="flex h-9 w-7 items-center justify-center border-r border-orange-100 bg-orange-50 text-orange-600 transition hover:bg-orange-500 hover:text-white"
    aria-label="Decrease quantity"
  >
    <Minus size={16} />
  </button>
  <span className="flex h-9 min-w-7 items-center justify-center px-2 text-sm font-semibold text-gray-900">
    {isInCart.quantity}
  </span>

  <button
  onClick={() => increaseQuantity(recipe.id)}
    className="flex h-9 w-7 items-center justify-center border-l border-orange-100 bg-orange-50 text-orange-600 transition hover:bg-orange-500 hover:text-white"
    aria-label="Increase quantity"
  >
    <Plus size={16} />
  </button>

</div>
     : <button onClick={() => setCartRecipes(prev => [...prev,{...recipe, quantity : 1}])} className="rounded-lg bg-orange-50 px-3 py-2 text-xs font-medium text-orange-600 transition hover:bg-orange-500 hover:text-white">
                  Add to Cart
                </button>}
                
              </div>
            </div>
          </div>
  )
}

export default RecipeCard
