import { createContext , useState , useEffect} from "react";

export const MyStore = createContext()

export const MyStoreProvider = ({children}) => {
    let recipesData = [
  {
    id: 1,
    title: "Paneer Tikka",
    chef: "Riya Sharma",
    description: "Grilled paneer cubes marinated with yogurt, peppers and flavorful Indian spices.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=700&q=80",
    price: 249,
    prepTime: 30,
    quantity: 0
  },
  {
    id: 2,
    title: "Creamy Mushroom Soup",
    chef: "Olivia Martin",
    description: "A warm and creamy mushroom soup prepared with herbs, garlic and fresh cream.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700&q=80",
    price: 189,
    prepTime: 25,
    quantity: 0
  },
  {
    id: 3,
    title: "Fresh Greek Salad",
    chef: "Sophia Miller",
    description: "Fresh cucumber, tomatoes, olives and feta cheese tossed with a light herb dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80",
    price: 199,
    prepTime: 15,
    quantity: 0
  },
  {
    id: 4,
    title: "Butter Chicken",
    chef: "Arjun Mehta",
    description: "Tender chicken cooked in a rich tomato, butter and cream gravy with aromatic spices.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700&q=80",
    price: 329,
    prepTime: 40,
    quantity: 0
  },
  {
    id: 5,
    title: "Classic Beef Burger",
    chef: "James Anderson",
    description: "A juicy burger with fresh lettuce, tomato, cheese and a special house sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=80",
    price: 299,
    prepTime: 20,
    quantity: 0
  },
  {
    id: 6,
    title: "Creamy Alfredo Pasta",
    chef: "Emma Davis",
    description: "Pasta tossed in a creamy Alfredo sauce with herbs and parmesan cheese.",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=700&q=80",
    price: 319,
    prepTime: 25,
    quantity: 0
  },
  {
    id: 7,
    title: "Margherita Pizza",
    chef: "Marco Rossi",
    description: "Classic Italian pizza topped with mozzarella cheese, fresh basil and tomato sauce.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&q=80",
    price: 349,
    prepTime: 35,
    quantity: 0
  },
  {
    id: 9,
    title: "Chocolate Brownie",
    chef: "Emily Clark",
    description: "Rich and fudgy chocolate brownie with a soft center and a delicious chocolate flavor.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&q=80",
    price: 149,
    prepTime: 30,
    quantity: 0
  },
  {
    id: 10,
    title: "Masala Dosa",
    chef: "Ananya Iyer",
    description: "Crispy golden dosa filled with spiced potato masala, served with chutney and sambar.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=700&q=80",
    price: 129,
    prepTime: 25,
    quantity: 0
  },
  {
    id: 11,
    title: "Pancakes with Berries",
    chef: "Sophie Turner",
    description: "Fluffy pancakes topped with fresh berries, maple syrup and a touch of butter.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=700&q=80",
    price: 219,
    prepTime: 20,
    quantity: 0
  },
  {
    id: 12,
    title: "Grilled Chicken",
    chef: "Daniel Wilson",
    description: "Juicy grilled chicken seasoned with herbs, black pepper and fresh lemon.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700&q=80",
    price: 359,
    prepTime: 35,
    quantity: 0
  },
  {
    id: 13,
    title: "Veg Hakka Noodles",
    chef: "Meera Kapoor",
    description: "Stir-fried noodles with crunchy vegetables, soy sauce and aromatic spices.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&q=80",
    price: 179,
    prepTime: 20,
    quantity: 0
  },
  {
    id: 14,
    title: "Strawberry Cheesecake",
    chef: "Isabella Brown",
    description: "Creamy cheesecake with a buttery biscuit base and fresh strawberry topping.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700&q=80",
    price: 249,
    prepTime: 60,
    quantity: 0
  },
  {
    id: 15,
    title: "Chole Bhature",
    chef: "Harpreet Kaur",
    description: "Spicy Punjabi chickpea curry served with fluffy, deep-fried bhature.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=700&q=80",
    price: 159,
    prepTime: 40,
    quantity: 0
  },
  {
    id: 16,
    title: "Sushi Platter",
    chef: "Kenji Tanaka",
    description: "A delicious assortment of sushi rolls served with soy sauce and wasabi.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=700&q=80",
    price: 499,
    prepTime: 45,
    quantity: 0
  },
  {
    id: 17,
    title: "Veggie Sandwich",
    chef: "Aarav Malhotra",
    description: "Toasted bread filled with fresh vegetables, cheese, lettuce and creamy dressing.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700&q=80",
    price: 139,
    prepTime: 15,
    quantity: 0
  },
  {
    id: 18,
    title: "Mango Smoothie",
    chef: "Olivia Martin",
    description: "A refreshing blend of ripe mangoes, chilled milk and creamy yogurt.",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=700&q=80",
    price: 119,
    prepTime: 10,
    quantity: 0
  },
  {
    id: 19,
    title: "Tandoori Momos",
    chef: "Vikram Sethi",
    description: "Juicy dumplings marinated in spicy tandoori masala and grilled to perfection.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&q=80",
    price: 169,
    prepTime: 30,
    quantity: 0
  },
  {
    id: 20,
    title: "Pesto Pasta",
    chef: "Lucas Martin",
    description: "Italian pasta coated in fresh basil pesto, parmesan cheese and olive oil.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&q=80",
    price: 289,
    prepTime: 25,
    quantity: 0
  },
  {
    id: 21,
    title: "Chocolate Waffles",
    chef: "Emily Clark",
    description: "Crispy golden waffles drizzled with chocolate sauce and topped with strawberries.",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=700&q=80",
    price: 199,
    prepTime: 20,
    quantity: 0
  },
  {
    id: 22,
    title: "Crispy French Fries",
    chef: "Noah Williams",
    description: "Golden crispy potato fries seasoned with herbs and served with a creamy dip.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&q=80",
    price: 99,
    prepTime: 15,
    quantity: 0
  },
  {
    id: 23,
    title: "Rajma Chawal",
    chef: "Simran Kaur",
    description: "Comforting red kidney bean curry served with steamed basmati rice.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&q=80",
    price: 149,
    prepTime: 40,
    quantity: 0
  },
  {
    id: 24,
    title: "Grilled Fish",
    chef: "Oliver James",
    description: "Fresh fish fillet grilled with lemon, garlic, herbs and a light seasoning.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=700&q=80",
    price: 399,
    prepTime: 30,
    quantity: 0
  }
]
const [recipeToSearch, setRecipeToSearch] = useState(null)
const [cartRecipes, setCartRecipes] = useState(() => JSON.parse(localStorage.getItem("cartRecipes")) || [])
const [isFormOpen, setIsFormOpen] = useState(false)
const [recipes, setRecipes] = useState(() => JSON.parse(localStorage.getItem("recipes")) || recipesData)

function decreaseQuantity(id) {
    setCartRecipes(prev => {
        return prev.map((recipe) => recipe.id === id ? {...recipe, quantity : recipe.quantity - 1} : recipe).filter((recipe) => recipe.quantity > 0)
    })
}
function increaseQuantity(id){
    setCartRecipes((prev) => {
        return prev.map((recipe) => recipe.id === id ? {...recipe,quantity : recipe.quantity + 1} : recipe)
    })
}
useEffect(() => {
  localStorage.setItem("recipes", JSON.stringify(recipes))

}, [recipes])
useEffect(() => {
  localStorage.setItem("cartRecipes", JSON.stringify(cartRecipes))

}, [cartRecipes])


   return <MyStore.Provider value={{recipeToSearch, setRecipeToSearch ,recipes , setRecipes, cartRecipes, setCartRecipes, increaseQuantity, decreaseQuantity, isFormOpen, setIsFormOpen}} >{children}</MyStore.Provider>
}