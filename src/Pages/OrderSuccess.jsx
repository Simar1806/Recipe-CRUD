
import React, { useContext } from 'react'
import {
  Check,
  BookOpen,
  ReceiptText,
  ArrowRight,
  Home
} from 'lucide-react'
import { nanoid } from 'nanoid'
import { MyStore } from '../MyContext/MyWebContext'
import SuccessCard from '../Components/SuccessCard'
import { useNavigate } from 'react-router'

const OrderSuccess = () => {
    let navigate =  useNavigate()
    let {cartRecipes , setCartRecipes} = useContext(MyStore)
    let total = cartRecipes.reduce((total, recipe) => {
        return total += recipe.price * recipe.quantity
    },0)
    let shipping = total > 499 ? 0 : 50
    total = total + shipping
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fffaf3] px-4 py-10">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl">

        <div className="relative flex flex-col items-center overflow-hidden bg-orange-50 px-6 py-10 text-center sm:py-12">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-orange-100/70" />
          <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-orange-100/70" />

          <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 ring-8 ring-green-50">
            <Check size={40} strokeWidth={3} className="text-green-600" />
          </div>

          <span className="relative mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
            Payment Successful
          </span>

          <h1 className="relative text-3xl font-bold text-gray-900 sm:text-4xl">
            Purchase Complete!
          </h1>

          <p className="relative mt-3 max-w-md text-sm leading-6 text-gray-600 sm:text-base">
            Thank you for your purchase. Your recipes are ready to explore.
            Happy cooking!
          </p>

          <div className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-semibold text-green-700 shadow-sm">
            <Check size={14} />
            Recipes Unlocked
          </div>
        </div>

        {/* Main Content */}
        <div className="p-5 sm:p-8">

          {/* Order ID */}
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-orange-100 bg-[#fffaf3] p-4 sm:p-5">
            <div>
              <p className="text-xs text-gray-500">Order ID</p>
              <p className="mt-1 break-all text-sm font-bold tracking-wide text-gray-900">
                #ORD-{nanoid()}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Keep this ID for your records
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm">
              <ReceiptText size={23} />
            </div>
          </div>

          {/* Purchased Recipes */}
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">
                Your Purchased Recipes
              </h2>
              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                {cartRecipes.length} Recipes
              </span>
            </div>

            <div className="space-y-3">
            {cartRecipes.map((recipe) => <SuccessCard recipe = {recipe} />)}
            </div>
          </div>

          {/* Payment Summary */}
          <div className="mt-7 rounded-2xl bg-gray-50 p-5">
            <h2 className="mb-4 text-base font-bold text-gray-900">
              Payment Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Discount</span>
                <span className="font-medium text-green-600">− ₹0</span>
              </div>

              <div className="border-t border-dashed border-gray-200 pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Total Paid</span>
                  <span className="text-2xl font-bold text-gray-900">₹{total}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2.5 text-xs text-green-700">
              <Check size={15} />
              Payment completed successfully
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg"
            >
              <BookOpen size={18} />
              View My Recipes
              <ArrowRight size={16} />
            </button>

            <button
            onClick={() => {
                 setCartRecipes([])
                navigate("/")
            }}
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
            >
              <Home size={18} />
              Back to Home
            </button>
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-gray-400">
            Thank you for choosing Recipe. Your next delicious creation starts here!
          </p>
        </div>
      </div>
    </main>
  )
}

export default OrderSuccess
