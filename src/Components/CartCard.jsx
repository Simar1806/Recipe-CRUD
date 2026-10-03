
import React, { useContext } from 'react'
import { Clock3, Minus, Plus, Trash2 } from 'lucide-react'
import { MyStore } from '../MyContext/MyWebContext'

const CartCard = ({recipe}) => {
    let {setCartRecipes , increaseQuantity, decreaseQuantity} = useContext(MyStore)
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-orange-100 bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:p-5">

      {/* Recipe Image */}
      <div className="h-36 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-32 sm:w-36">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Recipe Details */}
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-orange-600">
            By {recipe.chef}
          </p>

          <h3 className="text-lg font-bold text-gray-900">
            {recipe.title}
          </h3>

          <p className="mt-1 line-clamp-2 text-sm leading-5 text-gray-500">
            {recipe.description}
          </p>

          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <Clock3 size={14} />
            <span>{recipe.prepTime} min</span>
          </div>
        </div>

        {/* Quantity and Price */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-1">
            <button
            onClick={() => decreaseQuantity(recipe.id)}
              className="flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition hover:bg-orange-50 hover:text-orange-600"
              aria-label="Decrease quantity"
            >
              <Minus size={15} />
            </button>

            <span className="min-w-5 text-center text-sm font-semibold text-gray-900">
              {recipe.quantity}
            </span>

            <button
            onClick={() => increaseQuantity(recipe.id)}
              className="flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition hover:bg-orange-50 hover:text-orange-600"
              aria-label="Increase quantity"
            >
              <Plus size={15} />
            </button>
          </div>

          <span className="text-lg font-bold text-gray-900">
            ₹{recipe.price}
          </span>
        </div>
      </div>

      {/* Remove Button */}
      <button 
      onClick={() => setCartRecipes(prev => prev.filter((elem) => elem.id !== recipe.id)) }
        aria-label="Remove recipe"
        className="flex h-9 w-9 shrink-0 items-center justify-center self-end rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500 sm:self-start"
      >
        <Trash2 size={17} />
      </button>
    </div>
  )
}

export default CartCard
