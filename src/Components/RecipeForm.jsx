import React, { useContext, useEffect, useState } from 'react'
import { Camera, Plus, X } from 'lucide-react'
import { MyStore } from '../MyContext/MyWebContext'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'


const RecipeForm = () => {
    
    let {setIsFormOpen , setRecipes} = useContext(MyStore)
    const {
  register,
  handleSubmit,
  reset,
  watch,
  formState: { errors }
} = useForm()
let submit = (data) => {
    const imageUrl = URL.createObjectURL(data.image[0]);
    let newRecipe = {...data, id : nanoid() , image : imageUrl , quantity : 0 , price : Number(data.price) , prepTime : Number(data.prepTime) }
    setRecipes(prev => [...prev,newRecipe])
    reset()
    alert("Recipe Added")
    setIsFormOpen(false)
  }

const selectedImage = watch("image")
const imageFile = selectedImage?.[0]


const [preview, setPreview] = useState("")

useEffect(() => {
  if (!imageFile) {
    setPreview("")
    return
  }

  const imageUrl = URL.createObjectURL(imageFile)
  setPreview(imageUrl)

  return () => URL.revokeObjectURL(imageUrl)
}, [imageFile])
  return (
    <div className="flex w-full flex-col gap-5 lg:col-span-2 lg:h-[700px]">
        <div className="w-full rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-7 flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Add Recipe
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Add details about your delicious recipe.
              </p>
            </div>
            <button
            onClick={() => setIsFormOpen(false)}
              type="button"
              className="rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-orange-50 hover:text-orange-600"
            >
              <X size={18} />
            </button>
          </div>
<form
  onSubmit={handleSubmit(submit)}
  className="flex flex-col gap-5"
>
  {/* Recipe Image */}

<div>
  <label className="mb-2 block text-sm font-medium text-gray-700">
    Recipe Image
  </label>

  <label className="flex h-36 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-orange-400 hover:bg-orange-50/40">
    {preview ? (
      <img
        src={preview}
        alt="Recipe preview"
        className="h-full w-full object-cover"
      />
    ) : (
      <>
        <div className="mb-2 rounded-full bg-white p-3 shadow-sm">
          <Camera size={22} className="text-gray-500" />
        </div>
        <span className="text-sm font-medium text-gray-700">
          Upload recipe image
        </span>
        <span className="mt-1 text-xs text-gray-400">
          PNG, JPG up to 5MB
        </span>
      </>
    )}

    <input
      type="file"
      accept="image/*"
      {...register("image",{
        required : "Image is Required"
      })}
      className="hidden"
    />
  </label>
</div>


  {/* Recipe Name */}
  <div>
    <label className="mb-2 block text-sm font-medium text-gray-700">
      Recipe Name
    </label>
    <input
    {...register("title",{
        required : "Title Is Required"
    })}
      type="text"
      placeholder="e.g. Creamy Garlic Pasta"
      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
    />
  </div>

  {/* Chef Name */}
  <div>
    <label className="mb-2 block text-sm font-medium text-gray-700">
      Chef Name
    </label>
    <input
    {...register("chef", {
        required : "Chef Name Is Required"
    })}
      type="text"
      placeholder="e.g. John Doe"
      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
    />
  </div>

  {/* Description */}
  <div>
    <label className="mb-2 block text-sm font-medium text-gray-700">
      Description
    </label>
    <textarea
    {...register("description" , {
        required : "Description Is Required"
    })}
      rows="4"
      placeholder="Tell us a little about the recipe..."
      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
    />
  </div>

  {/* Price and Preparation Time */}
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Price
      </label>
      <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
        <span className="mr-2 text-sm text-gray-400">₹</span>
        <input
        {...register("price", {
            required : "Price Is Required"
        })}
          type="number"
          placeholder="199"
          className="w-full bg-transparent py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
        />
      </div>
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Preparation Time
      </label>
      <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
        <input
        {...register("prepTime", {
            required : "Prep Time Is Required"
        })}
          type="number"
          placeholder="30"
          className="w-full bg-transparent py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
        />
        <span className="ml-2 text-sm text-gray-400">min</span>
      </div>
    </div>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-100 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg"
  >
    <Plus size={18} />
    Add Recipe
            </button>
        </form>
    </div>
</div>
  )
}

export default RecipeForm
