export const foodPairings = {
  burgers: {
    label: "Burgers",
    description: "Rich beef, melted cheese, and savory toppings.",
    beers: [
      {
        style: "American Pale Ale",
        reason: "Its citrusy hops cut through fat without overpowering the burger.",
      },
      {
        style: "Amber Lager",
        reason: "Toasty malt supports caramelized meat and grilled onions.",
      },
      {
        style: "Dry Stout",
        reason: "Roasty bitterness balances char and brings out umami flavors.",
      },
    ],
  },
  sushi: {
    label: "Sushi",
    description: "Delicate fish, rice, and bright pickled notes.",
    beers: [
      {
        style: "Japanese Rice Lager",
        reason: "Crisp and clean profile keeps focus on subtle seafood flavors.",
      },
      {
        style: "German Pilsner",
        reason: "Snappy bitterness lifts richness in fatty fish like salmon or tuna.",
      },
      {
        style: "Wheat Beer",
        reason: "Soft body and gentle fruit notes complement soy and ginger.",
      },
    ],
  },
  bbq: {
    label: "BBQ",
    description: "Smoky meats and sweet, sticky sauces.",
    beers: [
      {
        style: "Brown Ale",
        reason: "Nutty malt echoes smoke and caramelized barbecue glaze.",
      },
      {
        style: "West Coast IPA",
        reason: "Bold bitterness stands up to rich brisket and sweet sauces.",
      },
      {
        style: "Porter",
        reason: "Chocolate and roast notes pair naturally with charred bark.",
      },
    ],
  },
  spicy: {
    label: "Spicy Food",
    description: "Heat-forward dishes like wings, curries, or tacos.",
    beers: [
      {
        style: "Hazy IPA",
        reason: "Juicy hop character cools perceived heat without adding sharp bitterness.",
      },
      {
        style: "Hefeweizen",
        reason: "Banana-clove notes and soft carbonation tame chili burn.",
      },
      {
        style: "Pale Lager",
        reason: "Light body refreshes the palate between hot bites.",
      },
    ],
  },
  pizza: {
    label: "Pizza",
    description: "Tomato acidity, melted cheese, and baked crust.",
    beers: [
      {
        style: "Italian Pils",
        reason: "Herbal hops and crisp finish brighten tomato sauce.",
      },
      {
        style: "Vienna Lager",
        reason: "Balanced malt matches crust and baked cheese flavors.",
      },
      {
        style: "Session IPA",
        reason: "Enough hop bite for pepperoni and sausage without palate fatigue.",
      },
    ],
  },
  seafood: {
    label: "Seafood",
    description: "From fried fish to buttery shellfish.",
    beers: [
      {
        style: "Blonde Ale",
        reason: "Subtle malt sweetness supports delicate white fish.",
      },
      {
        style: "Saison",
        reason: "Dry, peppery finish complements briny oysters and mussels.",
      },
      {
        style: "Czech Pilsner",
        reason: "Crisp carbonation cuts through fried seafood texture.",
      },
    ],
  },
  desserts: {
    label: "Desserts",
    description: "Chocolate cakes, caramel treats, and creamy sweets.",
    beers: [
      {
        style: "Milk Stout",
        reason: "Creamy sweetness mirrors chocolate and coffee desserts.",
      },
      {
        style: "Belgian Dubbel",
        reason: "Dark fruit and caramel notes pair with pastry richness.",
      },
      {
        style: "Fruit Lambic",
        reason: "Bright acidity balances dense, sugary desserts.",
      },
    ],
  },
}

export const foodOptions = Object.entries(foodPairings).map(([value, info]) => ({
  value,
  label: info.label,
}))
