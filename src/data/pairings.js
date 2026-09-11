export const selectorOptions = {
  foodType: [
    { value: "beef", label: "Beef / Burger" },
    { value: "poultry", label: "Chicken / Turkey" },
    { value: "seafood", label: "Seafood" },
    { value: "pizza", label: "Pizza / Italian" },
    { value: "bbq", label: "BBQ / Smoked Meat" },
    { value: "spicy", label: "Spicy Dishes" },
    { value: "dessert", label: "Dessert" },
    { value: "vegetarian", label: "Vegetarian / Salad" },
  ],
  preparation: [
    { value: "fried", label: "Fried" },
    { value: "grilled", label: "Grilled / Charred" },
    { value: "fresh", label: "Fresh / Raw" },
    { value: "roasted", label: "Roasted / Baked" },
    { value: "smoked", label: "Smoked" },
    { value: "saucy", label: "Saucy / Sticky" },
  ],
  spiceLevel: [
    { value: "mild", label: "Mild" },
    { value: "medium", label: "Medium" },
    { value: "hot", label: "Hot" },
  ],
  richness: [
    { value: "light", label: "Light" },
    { value: "medium", label: "Medium" },
    { value: "rich", label: "Rich / Fatty" },
  ],
}

export const beerProfiles = [
  {
    style: "Japanese Rice Lager",
    why: "Crisp, clean, and refreshing with delicate foods.",
    matches: {
      foodType: ["seafood", "vegetarian"],
      preparation: ["fresh", "fried"],
      spiceLevel: ["mild", "medium"],
      richness: ["light", "medium"],
    },
  },
  {
    style: "German Pilsner",
    why: "Sharp bitterness and high carbonation lift fried or savory dishes.",
    matches: {
      foodType: ["seafood", "pizza", "poultry"],
      preparation: ["fried", "roasted", "fresh"],
      spiceLevel: ["mild", "medium"],
      richness: ["light", "medium"],
    },
  },
  {
    style: "Hefeweizen",
    why: "Soft wheat body and fruity esters calm spice and salt.",
    matches: {
      foodType: ["spicy", "poultry", "seafood"],
      preparation: ["fried", "fresh"],
      spiceLevel: ["medium", "hot"],
      richness: ["light", "medium"],
    },
  },
  {
    style: "American Pale Ale",
    why: "Balanced hops and malt pair well with burgers and grilled dishes.",
    matches: {
      foodType: ["beef", "pizza", "bbq"],
      preparation: ["grilled", "roasted"],
      spiceLevel: ["mild", "medium"],
      richness: ["medium", "rich"],
    },
  },
  {
    style: "West Coast IPA",
    why: "Bold bitterness cuts heavy fat and sticky sauces.",
    matches: {
      foodType: ["bbq", "beef", "spicy"],
      preparation: ["grilled", "smoked", "saucy"],
      spiceLevel: ["medium", "hot"],
      richness: ["rich"],
    },
  },
  {
    style: "Brown Ale",
    why: "Nutty malt and gentle sweetness complement roasted and smoky flavors.",
    matches: {
      foodType: ["bbq", "beef", "poultry"],
      preparation: ["roasted", "smoked", "saucy"],
      spiceLevel: ["mild", "medium"],
      richness: ["medium", "rich"],
    },
  },
  {
    style: "Dry Stout",
    why: "Roasty bitterness brings contrast to rich charred foods.",
    matches: {
      foodType: ["beef", "bbq"],
      preparation: ["grilled", "smoked"],
      spiceLevel: ["mild", "medium"],
      richness: ["rich"],
    },
  },
  {
    style: "Saison",
    why: "Dry, peppery profile is highly food-friendly across many dishes.",
    matches: {
      foodType: ["seafood", "vegetarian", "poultry"],
      preparation: ["fresh", "roasted"],
      spiceLevel: ["medium", "hot"],
      richness: ["light", "medium"],
    },
  },
  {
    style: "Vienna Lager",
    why: "Toasty malt supports baked flavors without overwhelming them.",
    matches: {
      foodType: ["pizza", "poultry", "vegetarian"],
      preparation: ["roasted", "grilled"],
      spiceLevel: ["mild", "medium"],
      richness: ["medium"],
    },
  },
  {
    style: "Milk Stout",
    why: "Creamy sweetness mirrors caramel and chocolate desserts.",
    matches: {
      foodType: ["dessert"],
      preparation: ["roasted", "saucy"],
      spiceLevel: ["mild"],
      richness: ["medium", "rich"],
    },
  },
  {
    style: "Fruit Lambic",
    why: "Fruity acidity balances sweet and rich dessert textures.",
    matches: {
      foodType: ["dessert"],
      preparation: ["fresh", "saucy"],
      spiceLevel: ["mild"],
      richness: ["light", "medium", "rich"],
    },
  },
]
