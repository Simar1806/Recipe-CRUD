
import React, { useContext } from 'react'
import { Plus, UserRound, ShoppingCart, Search } from 'lucide-react'
import { useNavigate } from 'react-router'
import { MyStore } from '../MyContext/MyWebContext'

const Navbar = () => {
    let navigate = useNavigate()
    let {cartRecipes ,setIsFormOpen ,setRecipeToSearch} = useContext(MyStore)
    
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4">

        {/* Logo */}
        <div className="shrink-0">
          <h1 className="text-2xl font-bold tracking-tight text-orange-600">
            Recipe<span className="text-gray-900"> Hub</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="mx-auto hidden w-full max-w-xl md:block">
          <div className="relative">
            <input
            onChange={(e) => {
                let value = e.target.value.toLowerCase().trim()
                if(value){
                    navigate("/search")
                    setRecipeToSearch(value)
                }
                else{
                    navigate("/")
                }
                
            }}
              type="search"
              placeholder="Search recipes..."
              className="w-full rounded-full bg-gray-100 px-5 py-2.5 pr-12 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-orange-200"
            />
            <Search
              size={20}
              strokeWidth={1.8}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">

<button
onClick={() => setIsFormOpen(true)}
  type="button"
  aria-label="Add recipe"
  className="group flex h-10 w-10 items-center justify-start gap-2 overflow-hidden rounded-full bg-orange-600 px-3 text-white shadow-sm transition-all duration-300 ease-in-out hover:w-36 hover:shadow-lg hover:shadow-orange-200 focus-visible:w-36 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
>
  <Plus
    size={22}
    strokeWidth={2}
    className="shrink-0 transition-transform duration-300 group-hover:rotate-90"
  />
  <span className="whitespace-nowrap text-sm font-semibold opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
    Add Recipe
  </span>
</button>


          {/* Profile */}
          <button
            type="button"
            aria-label="Profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200"
          >
            <UserRound size={19} strokeWidth={1.8} />
          </button>

          {/* Cart */}
          <button
          onClick={() => navigate("/cart")}
            type="button"
            aria-label="Shopping cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100"
          >
            <ShoppingCart size={22} strokeWidth={1.8} />

            <span className="absolute -right-0.5 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-600 px-1 text-[10px] font-semibold text-white">
              {cartRecipes.length}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mx-auto mt-3 w-full md:hidden">
        <div className="relative">
          <input
            type="search"
            placeholder="Search recipes..."
            className="w-full rounded-full bg-gray-100 px-5 py-2.5 pr-12 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-orange-200"
          />
          <Search
            size={20}
            strokeWidth={1.8}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
