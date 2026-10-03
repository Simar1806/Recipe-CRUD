import React from 'react'
import {
  Check,
  ChefHat
} from 'lucide-react'
const SuccessCard = ({recipe}) => {
  return (
     <div className="flex items-center gap-3 rounded-xl border border-gray-100 p-3 sm:gap-4">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="h-20 w-20 rounded-lg object-cover sm:h-24 sm:w-24"
                    />
    
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-orange-600">
                        {recipe.chef}
                      </p>
                      <h3 className="mt-1 truncate text-sm font-bold text-gray-900 sm:text-base">
                        {recipe.title}
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
                        <ChefHat size={14} />
                       {recipe.prepTime} min preparation
                      </p>
                    </div>
    
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">₹{recipe.price * recipe.quantity}</p>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-green-600">
                        <Check size={13} />
                        Unlocked
                      </span>
                    </div>
                  </div>
  )
}

export default SuccessCard
