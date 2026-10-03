
import React, { useContext } from 'react'
import { ShoppingBag, ArrowLeft,ArrowRight , Tag, Truck, ShieldCheck } from 'lucide-react'
import CartCard from '../Components/CartCard'
import { MyStore } from '../MyContext/MyWebContext'
import { useNavigate } from 'react-router'


const CartPage = () => {
    let navigate =  useNavigate()
    let {cartRecipes} = useContext(MyStore)
    let total = cartRecipes.reduce((total , elem) => {
        return total += elem.price * elem.quantity
    },0)
    
    let shipping = total > 499 ? 0 : 50
    let Subtotal = total + shipping
  return (
    <main className="min-h-screen bg-[#fffaf3] px-4 py-8 sm:px-6 lg:px-8">

{cartRecipes.length === 0 ? (
  <div className='flex justify-center' >
      <div className="flex min-h-[400px] flex-col w-[50vw] items-center justify-center rounded-2xl border border-orange-100 bg-white px-6 py-12 text-center shadow-sm">
        {/* Empty Cart Icon */}
        <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-orange-50">
          <ShoppingBag size={42} strokeWidth={1.5} className="text-orange-500" />
        </div>
        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-900">
          Your Cart is Empty!
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
          Looks like you haven't added any recipes to your cart yet.
          Explore our delicious recipes and find something you love!
        </p>
        {/* Explore Button */}
        <button onClick={() => navigate("/recipes")} className="mt-6 flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-md">
          Explore Recipes
          <ArrowRight size={17} />
        </button>
      </div>
  </div>
) : <div className="mx-auto w-full max-w-6xl">

        {/* Page Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-orange-600">
            Your Selection
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Cart
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Review your delicious picks before placing your order.
          </p>
        </div>

        {/* Back to Recipes */}
        <button onClick={() => navigate("/recipes")} className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-orange-600">
          <ArrowLeft size={17} />
          Continue Exploring Recipes
        </button>

        {/* Cart Layout */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">

          {/* Cart Items */}
          <section className="space-y-4 lg:col-span-2">
            <div className="flex items-center justify-between rounded-xl border border-orange-100 bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                  <ShoppingBag size={19} />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Cart Items</h2>
                  <p className="text-xs text-gray-500">Your selected recipes</p>
                </div>
              </div>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                Items
              </span>
            </div>
            {cartRecipes.map((elem) => <CartCard key = {elem.id} recipe = {elem} /> )}
          </section>

          {/* Order Summary */}
          <aside className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-gray-900">
              Order Summary
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              A quick overview of your order.
            </p>

            <div className="my-5 space-y-4 border-b border-gray-100 pb-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium text-gray-900">₹{total}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-500">
                  <Truck size={16} />
                  Delivery Fee
                </span>
                <span className="font-medium text-gray-900">₹{shipping}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-500">
                  <Tag size={16} />
                  Discount
                </span>
                <span className="font-medium text-green-600">-₹0</span>
              </div>
            </div>

            <div className="mb-5 flex items-center justify-between">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-gray-900">₹{Subtotal}</span>
            </div>

            <button onClick={() => navigate("/order-success")} className="w-full rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-md">
              Proceed to Checkout
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={15} className="text-green-600" />
              Secure and safe checkout
            </div>
          </aside>
        </div>
      </div>
}

      
    </main>
  )
}

export default CartPage
