const recipes = [
  {
    name: "Vegetarian Pasta",
    ingredients: ["Pasta", "Tomatoes", "Spinach", "Garlic", "Olive Oil"],
    instructions:
      "Boil pasta. Sauté garlic in olive oil. Add tomatoes and spinach. Mix with pasta.",
  },
  {
    name: "Quinoa Salad",
    ingredients: [
      "Quinoa",
      "Cucumbers",
      "Cherry Tomatoes",
      "Red Onion",
      "Feta Cheese",
      "Olive Oil",
      "Lemon Juice",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Cook quinoa. Mix with chopped cucumbers, cherry tomatoes, red onion, and crumbled feta cheese. Dress with olive oil, lemon juice, salt, and pepper.",
  },
  {
    name: "Vegetarian Stir-Fry",
    ingredients: [
      "Tofu",
      "Broccoli",
      "Carrots",
      "Bell Peppers",
      "Soy Sauce",
      "Ginger",
      "Garlic",
      "Sesame Oil",
    ],
    instructions:
      "Stir-fry tofu, broccoli, carrots, and bell peppers in sesame oil. Add soy sauce, ginger, and garlic for flavor.",
  },
  {
    name: "Eggplant Parmesan",
    ingredients: [
      "Eggplant",
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Parmesan Cheese",
      "Bread Crumbs",
      "Eggs",
      "Basil",
    ],
    instructions:
      "Slice and bread eggplant. Bake until crispy. Layer with tomato sauce, mozzarella, and Parmesan. Bake until cheese is melted. Garnish with fresh basil.",
  },
  {
    name: "Spinach and Feta Stuffed Mushrooms",
    ingredients: [
      "Mushrooms",
      "Spinach",
      "Feta Cheese",
      "Garlic",
      "Onion",
      "Olive Oil",
    ],
    instructions:
      "Remove mushroom stems. Sauté garlic and onion in olive oil. Mix with chopped spinach and feta cheese. Stuff mushrooms and bake until tender.",
  },
  {
    name: "Caprese Salad",
    ingredients: [
      "Tomatoes",
      "Fresh Mozzarella",
      "Basil",
      "Balsamic Glaze",
      "Olive Oil",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Slice tomatoes and fresh mozzarella. Arrange on a plate with fresh basil leaves. Drizzle with balsamic glaze and olive oil. Season with salt and pepper.",
  },
  {
    name: "Chickpea Curry",
    ingredients: [
      "Chickpeas",
      "Tomatoes",
      "Onion",
      "Garlic",
      "Ginger",
      "Coconut Milk",
      "Curry Powder",
      "Cilantro",
      "Rice",
    ],
    instructions:
      "Sauté onion, garlic, and ginger. Add chickpeas, tomatoes, coconut milk, and curry powder. Simmer until flavors meld. Serve over rice and garnish with cilantro.",
  },
  {
    name: "Sweet Potato and Black Bean Burritos",
    ingredients: [
      "Sweet Potatoes",
      "Black Beans",
      "Corn",
      "Red Onion",
      "Avocado",
      "Lime",
      "Cumin",
      "Chili Powder",
      "Tortillas",
    ],
    instructions:
      "Roast sweet potatoes. Mix with black beans, corn, red onion, and spices. Fill tortillas, top with avocado slices, and squeeze lime over the filling. Roll into burritos.",
  },
  {
    name: "Vegetarian Lentil Soup",
    ingredients: [
      "Lentils",
      "Carrots",
      "Celery",
      "Onion",
      "Tomatoes",
      "Vegetable Broth",
      "Garlic",
      "Cumin",
      "Coriander",
      "Bay Leaves",
    ],
    instructions:
      "Sauté onion, garlic, carrots, and celery. Add lentils, tomatoes, vegetable broth, and spices. Simmer until lentils are tender. Remove bay leaves before serving.",
  },
  {
    name: "Zucchini Noodles with Pesto",
    ingredients: [
      "Zucchini",
      "Cherry Tomatoes",
      "Basil Pesto",
      "Parmesan Cheese",
      "Pine Nuts",
      "Olive Oil",
    ],
    instructions:
      "Spiralize zucchini into noodles. Toss with halved cherry tomatoes, basil pesto, Parmesan cheese, and toasted pine nuts. Drizzle with olive oil before serving.",
  },
  {
    name: "Mushroom Risotto",
    ingredients: [
      "Arborio Rice",
      "Mushrooms",
      "Vegetable Broth",
      "Onion",
      "Garlic",
      "White Wine",
      "Parmesan Cheese",
      "Butter",
      "Thyme",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Sauté onions and garlic. Add Arborio rice, mushrooms, and white wine. Gradually add vegetable broth while stirring until rice is cooked. Stir in Parmesan, butter, thyme, salt, and pepper.",
  },
  {
    name: "Cauliflower Buffalo Bites",
    ingredients: [
      "Cauliflower Florets",
      "Flour",
      "Almond Milk",
      "Buffalo Sauce",
      "Garlic Powder",
      "Onion Powder",
      "Dip (Ranch or Blue Cheese)",
    ],
    instructions:
      "Coat cauliflower in batter made of flour and almond milk. Bake until golden. Toss in buffalo sauce mixed with garlic and onion powder. Serve with dip.",
  },
  {
    name: "Vegetarian Sushi Rolls",
    ingredients: [
      "Sushi Rice",
      "Nori Sheets",
      "Cucumber",
      "Avocado",
      "Carrot",
      "Soy Sauce",
      "Wasabi",
      "Pickled Ginger",
    ],
    instructions:
      "Prepare sushi rice. Lay out nori sheets, add rice, cucumber, avocado, and carrot. Roll tightly and slice into pieces. Serve with soy sauce, wasabi, and pickled ginger.",
  },
  {
    name: "Pumpkin and Sage Stuffed Shells",
    ingredients: [
      "Jumbo Pasta Shells",
      "Pumpkin Puree",
      "Ricotta Cheese",
      "Sage",
      "Nutmeg",
      "Mozzarella Cheese",
      "Marinara Sauce",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Cook pasta shells. Mix pumpkin puree, ricotta, sage, nutmeg, salt, and pepper. Stuff shells, top with marinara and mozzarella. Bake until bubbly.",
  },
  {
    name: "Vegetarian Fajitas",
    ingredients: [
      "Bell Peppers",
      "Onions",
      "Portobello Mushrooms",
      "Fajita Seasoning",
      "Tortillas",
      "Sour Cream",
      "Guacamole",
      "Salsa",
    ],
    instructions:
      "Sauté sliced bell peppers, onions, and portobello mushrooms with fajita seasoning. Serve in tortillas with sour cream, guacamole, and salsa.",
  },
  {
    name: "Caponata",
    ingredients: [
      "Eggplant",
      "Tomatoes",
      "Celery",
      "Olives",
      "Capres",
      "Red Wine Vinegar",
      "Olive Oil",
      "Basil",
      "Pine Nuts",
      "Crostini",
    ],
    instructions:
      "Sauté eggplant, tomatoes, celery, olives, and capers. Add red wine vinegar, olive oil, and basil. Serve over crostini, garnished with pine nuts.",
  },
  {
    name: "Broccoli and Cheddar Stuffed Potatoes",
    ingredients: [
      "Baking Potatoes",
      "Broccoli",
      "Cheddar Cheese",
      "Sour Cream",
      "Chives",
      "Butter",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Bake potatoes. Steam broccoli. Hollow out potatoes, mash with butter, and mix in broccoli and cheddar. Refill skins and bake until cheese is melted. Top with sour cream and chives.",
  },
  {
    name: "Vegetarian Pad Thai",
    ingredients: [
      "Rice Noodles",
      "Tofu",
      "Bean Sprouts",
      "Carrots",
      "Scallions",
      "Peanuts",
      "Eggs",
      "Soy Sauce",
      "Tamarind Paste",
      "Sriracha",
    ],
    instructions:
      "Cook rice noodles. Sauté tofu, bean sprouts, carrots, scallions, and peanuts. Push vegetables aside, scramble eggs. Mix with cooked noodles, soy sauce, tamarind paste, and sriracha.",
  },
  {
    name: "Stuffed Bell Peppers",
    ingredients: [
      "Bell Peppers",
      "Quinoa",
      "Black Beans",
      "Corn",
      "Tomatoes",
      "Chili Powder",
      "Cumin",
      "Cheese",
      "Avocado",
      "Cilantro",
    ],
    instructions:
      "Cook quinoa. Mix with black beans, corn, tomatoes, chili powder, and cumin. Stuff bell peppers, top with cheese, and bake until peppers are tender. Serve with sliced avocado and cilantro.",
  },
  {
    name: "Veggie Burger",
    ingredients: [
      "Black Beans",
      "Quinoa",
      "Oats",
      "Onion",
      "Garlic",
      "Cumin",
      "Paprika",
      "Egg",
      "Whole Wheat Buns",
      "Lettuce",
      "Tomato",
      "Pickles",
    ],
    instructions:
      "Mash black beans, mix with cooked quinoa, oats, diced onion, garlic, cumin, paprika, and egg. Form into patties and cook. Serve on whole wheat buns with lettuce, tomato, and pickles.",
  },
  {
    name: "Mushroom Risotto",
    ingredients: [
      "Arborio Rice",
      "Mushrooms",
      "Vegetable Broth",
      "Onion",
      "Garlic",
      "White Wine",
      "Parmesan Cheese",
      "Butter",
      "Thyme",
    ],
    instructions:
      "Sauté onion and garlic. Add Arborio rice and cook until translucent. Deglaze with white wine. Gradually add vegetable broth, stirring until absorbed. Stir in sautéed mushrooms, Parmesan, and butter. Garnish with thyme.",
  },
  {
    name: "Cauliflower Buffalo Wings",
    ingredients: [
      "Cauliflower",
      "Flour",
      "Almond Milk",
      "Buffalo Sauce",
      "Garlic Powder",
      "Onion Powder",
      "Vegan Ranch Dressing",
    ],
    instructions:
      "Dip cauliflower florets in a batter of flour and almond milk. Bake until crispy. Toss in buffalo sauce mixed with garlic powder and onion powder. Serve with vegan ranch dressing.",
  },
  {
    name: "Vegetarian Sushi Rolls",
    ingredients: [
      "Sushi Rice",
      "Nori Sheets",
      "Avocado",
      "Cucumber",
      "Carrot",
      "Soy Sauce",
      "Wasabi",
      "Pickled Ginger",
    ],
    instructions:
      "Prepare sushi rice. Lay out a nori sheet, add rice, avocado, cucumber, and carrot strips. Roll tightly and slice. Serve with soy sauce, wasabi, and pickled ginger.",
  },
  {
    name: "Stuffed Bell Peppers",
    ingredients: [
      "Bell Peppers",
      "Quinoa",
      "Black Beans",
      "Corn",
      "Tomatoes",
      "Onion",
      "Cumin",
      "Chili Powder",
      "Cheese",
      "Cilantro",
    ],
    instructions:
      "Cut bell peppers in half and remove seeds. Cook quinoa and mix with black beans, corn, tomatoes, onion, cumin, and chili powder. Stuff peppers, top with cheese, and bake until bubbly. Garnish with cilantro.",
  },
  {
    name: "Vegetarian Pho",
    ingredients: [
      "Rice Noodles",
      "Vegetable Broth",
      "Tofu",
      "Bean Sprouts",
      "Bok Choy",
      "Lime",
      "Sriracha",
      "Basil",
      "Cilantro",
      "Green Onions",
    ],
    instructions:
      "Cook rice noodles and prepare vegetable broth. Add tofu, bean sprouts, bok choy, and green onions. Serve with lime wedges, Sriracha, basil, and cilantro.",
  },
  {
    name: "Eggless Spinach and Cheese Omelette",
    ingredients: [
      "Chickpea Flour",
      "Spinach",
      "Nutritional Yeast",
      "Dairy-Free Cheese",
      "Onion",
      "Tomatoes",
      "Turmeric",
      "Black Salt",
      "Pepper",
    ],
    instructions:
      "Mix chickpea flour with water, add spinach, nutritional yeast, dairy-free cheese, onion, tomatoes, turmeric, black salt, and pepper. Cook like a traditional omelette.",
  },
  {
    name: "Crispy Tofu Tacos",
    ingredients: [
      "Tofu",
      "Corn Tortillas",
      "Cabbage",
      "Lime",
      "Cilantro",
      "Soy Sauce",
      "Chili Powder",
      "Cumin",
      "Garlic Powder",
    ],
    instructions:
      "Press and cube tofu, then bake until crispy. Toss with soy sauce, chili powder, cumin, and garlic powder. Fill corn tortillas with tofu, shredded cabbage, lime, and cilantro.",
  },
  {
    name: "Vegan Lentil Meatballs",
    ingredients: [
      "Lentils",
      "Breadcrumbs",
      "Onion",
      "Garlic",
      "Tomato Sauce",
      "Oregano",
      "Basil",
      "Parsley",
      "Olive Oil",
    ],
    instructions:
      "Cook lentils and mix with breadcrumbs, onion, garlic, oregano, basil, and parsley. Form into meatballs and bake. Simmer in tomato sauce before serving.",
  },
  {
    name: "Vegetarian Pad Thai",
    ingredients: [
      "Rice Noodles",
      "Tofu",
      "Bean Sprouts",
      "Carrots",
      "Peanuts",
      "Lime",
      "Soy Sauce",
      "Tamarind Paste",
      "Sriracha",
    ],
    instructions:
      "Cook rice noodles and sauté tofu, bean sprouts, and carrots. Toss with peanuts, lime juice, soy sauce, tamarind paste, and Sriracha.",
  },
  {
    name: "Chickpea and Spinach Stew",
    ingredients: [
      "Chickpeas",
      "Spinach",
      "Tomatoes",
      "Onion",
      "Garlic",
      "Vegetable Broth",
      "Paprika",
      "Cumin",
      "Coriander",
      "Lemon",
    ],
    instructions:
      "Sauté onion and garlic. Add chickpeas, tomatoes, vegetable broth, paprika, cumin, and coriander. Simmer until flavors meld. Finish with a squeeze of lemon and stir in fresh spinach.",
  },
  {
    name: "Vegetarian Enchiladas",
    ingredients: [
      "Black Beans",
      "Corn",
      "Bell Peppers",
      "Onion",
      "Enchilada Sauce",
      "Cheese",
      "Tortillas",
      "Cilantro",
      "Lime",
    ],
    instructions:
      "Sauté black beans, corn, bell peppers, and onion. Roll the mixture in tortillas, place in a baking dish, cover with enchilada sauce and cheese. Bake until cheese is melted. Garnish with cilantro and lime.",
  },
  {
    name: "Mediterranean Chickpea Salad",
    ingredients: [
      "Chickpeas",
      "Cucumbers",
      "Cherry Tomatoes",
      "Red Onion",
      "Kalamata Olives",
      "Feta Cheese",
      "Olive Oil",
      "Lemon Juice",
      "Garlic",
      "Oregano",
    ],
    instructions:
      "Combine chickpeas, chopped cucumbers, halved cherry tomatoes, red onion, Kalamata olives, and crumbled feta cheese in a bowl. In a separate bowl, whisk together olive oil, lemon juice, minced garlic, and oregano. Pour the dressing over the salad and toss to combine. Chill before serving.",
  },
  {
    name: "Broccoli and Cheddar Stuffed Potatoes",
    ingredients: [
      "Potatoes",
      "Broccoli",
      "Cheddar Cheese",
      "Sour Cream",
      "Chives",
      "Butter",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Bake potatoes until tender. Steam broccoli and mix with cheddar cheese. Cut open potatoes, fluff with a fork, and fill with the broccoli-cheddar mixture. Top with sour cream, chives, butter, salt, and pepper.",
  },
  {
    name: "Vegetarian Tikka Masala",
    ingredients: [
      "Paneer",
      "Bell Peppers",
      "Onion",
      "Tomatoes",
      "Yogurt",
      "Ginger",
      "Garlic",
      "Garam Masala",
      "Turmeric",
      "Cumin",
    ],
    instructions:
      "Sauté paneer, bell peppers, and onion. In a blender, blend tomatoes, yogurt, ginger, garlic, garam masala, turmeric, and cumin. Simmer the sauce with the sautéed ingredients until flavors meld. Serve with rice or naan.",
  },
  {
    name: "Crispy Avocado Tacos",
    ingredients: [
      "Avocado Slices",
      "Corn Tortillas",
      "Lime",
      "Cilantro",
      "Cabbage",
      "Sour Cream",
      "Hot Sauce",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Coat avocado slices in a crispy batter and fry until golden. Fill corn tortillas with the crispy avocados, shredded cabbage, lime, cilantro, sour cream, and hot sauce. Season with salt and pepper.",
  },
  {
    name: "Vegetarian Gyoza",
    ingredients: [
      "Tofu",
      "Cabbage",
      "Carrots",
      "Shiitake Mushrooms",
      "Ginger",
      "Garlic",
      "Soy Sauce",
      "Sesame Oil",
      "Green Onions",
      "Gyoza Wrappers",
    ],
    instructions:
      "Sauté tofu, cabbage, carrots, shiitake mushrooms, ginger, and garlic. Mix in soy sauce, sesame oil, and green onions. Fill gyoza wrappers, seal, and pan-fry until golden. Serve with dipping sauce.",
  },
  {
    name: "Caprese Stuffed Avocados",
    ingredients: [
      "Avocados",
      "Cherry Tomatoes",
      "Fresh Mozzarella",
      "Basil",
      "Balsamic Glaze",
      "Olive Oil",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Halve avocados and remove the pit. Fill the hollow with cherry tomatoes, fresh mozzarella, and basil. Drizzle with balsamic glaze and olive oil. Season with salt and pepper.",
  },
  {
    name: "Vegetarian Paella",
    ingredients: [
      "Arborio Rice",
      "Artichokes",
      "Bell Peppers",
      "Tomatoes",
      "Green Beans",
      "Saffron",
      "Vegetable Broth",
      "Garlic",
      "Onion",
      "Paprika",
    ],
    instructions:
      "Sauté onion, garlic, artichokes, bell peppers, and green beans. Add Arborio rice, saffron, vegetable broth, tomatoes, and paprika. Simmer until rice is cooked and the liquid is absorbed.",
  },
  {
    name: "Sweet Potato and Quinoa Salad",
    ingredients: [
      "Sweet Potatoes",
      "Quinoa",
      "Arugula",
      "Pomegranate Seeds",
      "Walnuts",
      "Feta Cheese",
      "Olive Oil",
      "Balsamic Vinegar",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Roast sweet potatoes and cook quinoa. Toss together with arugula, pomegranate seeds, walnuts, and crumbled feta cheese. Dress with olive oil, balsamic vinegar, salt, and pepper.",
  },
  {
    name: "Vegetarian Fajitas",
    ingredients: [
      "Bell Peppers",
      "Onion",
      "Portobello Mushrooms",
      "Cumin",
      "Chili Powder",
      "Garlic Powder",
      "Lime",
      "Tortillas",
      "Guacamole",
      "Salsa",
    ],
    instructions:
      "Sauté bell peppers, onion, and sliced portobello mushrooms with cumin, chili powder, and garlic powder. Squeeze lime over the mixture. Serve in tortillas with guacamole and salsa.",
  },
  {
    name: "Pesto Zucchini Noodles",
    ingredients: [
      "Zucchini",
      "Cherry Tomatoes",
      "Basil Pesto",
      "Parmesan Cheese",
      "Pine Nuts",
      "Olive Oil",
    ],
    instructions:
      "Spiralize zucchini into noodles. Toss with halved cherry tomatoes, basil pesto, Parmesan cheese, and toasted pine nuts. Drizzle with olive oil before serving.",
  },
  {
    name: "Vegetarian Bibimbap",
    ingredients: [
      "Rice",
      "Tofu",
      "Carrots",
      "Zucchini",
      "Spinach",
      "Bean Sprouts",
      "Soy Sauce",
      "Sesame Oil",
      "Gochujang",
      "Fried Eggs",
    ],
    instructions:
      "Cook rice. Sauté tofu, carrots, zucchini, and spinach separately with soy sauce and sesame oil. Arrange the rice and vegetables in a bowl, top with bean sprouts and a fried egg. Serve with gochujang sauce.",
  },
  {
    name: "Butternut Squash and Sage Risotto",
    ingredients: [
      "Arborio Rice",
      "Butternut Squash",
      "Vegetable Broth",
      "White Wine",
      "Onion",
      "Garlic",
      "Parmesan Cheese",
      "Fresh Sage",
      "Butter",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Sauté onion and garlic. Add Arborio rice and cook until translucent. Deglaze with white wine. Gradually add vegetable broth, stirring until absorbed. Stir in roasted butternut squash, Parmesan, butter, fresh sage, salt, and pepper.",
  },
  {
    name: "Vegetarian Thai Green Curry",
    ingredients: [
      "Coconut Milk",
      "Tofu",
      "Bell Peppers",
      "Zucchini",
      "Carrots",
      "Thai Green Curry Paste",
      "Basil",
      "Lime",
      "Jasmine Rice",
    ],
    instructions:
      "Sauté tofu, bell peppers, zucchini, and carrots. Add coconut milk and Thai green curry paste. Simmer until vegetables are tender. Stir in fresh basil and squeeze lime over the curry. Serve with jasmine rice.",
  },
  {
    name: "Mushroom and Spinach Stuffed Shells",
    ingredients: [
      "Jumbo Pasta Shells",
      "Ricotta Cheese",
      "Mushrooms",
      "Spinach",
      "Marinara Sauce",
      "Mozzarella Cheese",
      "Parmesan Cheese",
      "Garlic",
      "Olive Oil",
      "Basil",
    ],
    instructions:
      "Cook jumbo pasta shells. Sauté mushrooms and spinach with garlic in olive oil. Mix ricotta cheese with the sautéed vegetables. Stuff the shells with the ricotta mixture. Arrange in a baking dish, top with marinara sauce, mozzarella, and Parmesan. Bake until bubbly. Garnish with fresh basil.",
  },
  {
    name: "Vegetarian Jambalaya",
    ingredients: [
      "Brown Rice",
      "Kidney Beans",
      "Bell Peppers",
      "Celery",
      "Onion",
      "Tomatoes",
      "Vegetable Broth",
      "Cajun Seasoning",
      "Thyme",
      "Garlic",
    ],
    instructions:
      "Sauté onion, celery, and bell peppers. Add brown rice, kidney beans, tomatoes, vegetable broth, Cajun seasoning, thyme, and garlic. Simmer until rice is cooked and the liquid is absorbed.",
  },
  {
    name: "Eggplant Caponata",
    ingredients: [
      "Eggplant",
      "Tomatoes",
      "Celery",
      "Green Olives",
      "Capers",
      "Red Onion",
      "Balsamic Vinegar",
      "Olive Oil",
      "Garlic",
      "Basil",
    ],
    instructions:
      "Sauté diced eggplant, tomatoes, celery, green olives, capers, and red onion in olive oil. Add balsamic vinegar and minced garlic. Simmer until the mixture thickens. Garnish with fresh basil.",
  },
  {
    name: "Vegetarian Tacos with Chipotle Cauliflower",
    ingredients: [
      "Cauliflower",
      "Chipotle Sauce",
      "Black Beans",
      "Avocado",
      "Lime",
      "Cilantro",
      "Corn Tortillas",
      "Sour Cream",
      "Cotija Cheese",
    ],
    instructions:
      "Roast cauliflower with chipotle sauce until crispy. Heat black beans. Fill corn tortillas with the chipotle cauliflower, black beans, sliced avocado, lime, cilantro, sour cream, and crumbled cotija cheese.",
  },
  {
    name: "Greek Orzo Salad",
    ingredients: [
      "Orzo Pasta",
      "Cucumbers",
      "Cherry Tomatoes",
      "Feta Cheese",
      "Kalamata Olives",
      "Red Onion",
      "Olive Oil",
      "Lemon Juice",
      "Dill",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Cook orzo pasta. Mix with diced cucumbers, halved cherry tomatoes, crumbled feta cheese, Kalamata olives, and finely chopped red onion. Dress with olive oil, lemon juice, chopped dill, salt, and pepper.",
  },
  {
    name: "Vegetarian Soba Noodle Stir-Fry",
    ingredients: [
      "Soba Noodles",
      "Broccoli",
      "Carrots",
      "Snap Peas",
      "Tofu",
      "Soy Sauce",
      "Sesame Oil",
      "Garlic",
      "Ginger",
      "Green Onions",
    ],
    instructions:
      "Cook soba noodles. Sauté broccoli, carrots, snap peas, and tofu in soy sauce and sesame oil with minced garlic, ginger, and sliced green onions. Toss with cooked soba noodles.",
  },
  {
    name: "Spinach and Artichoke Stuffed Mushrooms",
    ingredients: [
      "Mushrooms",
      "Spinach",
      "Artichoke Hearts",
      "Cream Cheese",
      "Parmesan Cheese",
      "Garlic",
      "Olive Oil",
      "Breadcrumbs",
    ],
    instructions:
      "Remove mushroom stems. Sauté garlic in olive oil. Mix chopped spinach, artichoke hearts, cream cheese, and Parmesan. Stuff mushrooms, sprinkle with breadcrumbs, and bake until golden.",
  },
  {
    name: "Vegetarian Tofu Scramble",
    ingredients: [
      "Tofu",
      "Bell Peppers",
      "Onion",
      "Tomatoes",
      "Turmeric",
      "Black Salt",
      "Nutritional Yeast",
      "Spinach",
      "Garlic Powder",
      "Olive Oil",
    ],
    instructions:
      "Sauté bell peppers, onion, and tomatoes. Crumble in tofu and season with turmeric, black salt, nutritional yeast, and garlic powder. Add spinach and cook until wilted. Drizzle with olive oil before serving.",
  },
  {
    name: "Cauliflower and Chickpea Curry",
    ingredients: [
      "Cauliflower",
      "Chickpeas",
      "Coconut Milk",
      "Tomatoes",
      "Onion",
      "Garlic",
      "Ginger",
      "Curry Powder",
      "Cumin",
      "Coriander",
      "Cilantro",
      "Lime",
    ],
    instructions:
      "Sauté onion, garlic, and ginger. Add cauliflower, chickpeas, tomatoes, coconut milk, curry powder, cumin, and coriander. Simmer until cauliflower is tender. Garnish with chopped cilantro and squeeze lime over the curry.",
  },
  {
    name: "Vegetarian Pesto Pizza",
    ingredients: [
      "Pizza Dough",
      "Pesto Sauce",
      "Cherry Tomatoes",
      "Mozzarella Cheese",
      "Arugula",
      "Parmesan Cheese",
      "Olive Oil",
      "Garlic",
      "Pine Nuts",
    ],
    instructions:
      "Roll out pizza dough. Spread pesto sauce and top with sliced cherry tomatoes, mozzarella cheese, and arugula. Drizzle with olive oil, sprinkle with grated Parmesan, and scatter pine nuts. Bake until crust is golden.",
  },
  {
    name: "Black Bean and Sweet Potato Quesadillas",
    ingredients: [
      "Black Beans",
      "Sweet Potatoes",
      "Red Onion",
      "Cilantro",
      "Lime",
      "Cumin",
      "Chili Powder",
      "Tortillas",
      "Cheese",
      "Sour Cream",
      "Salsa",
    ],
    instructions:
      "Roast sweet potatoes. Mix with black beans, diced red onion, chopped cilantro, lime juice, cumin, and chili powder. Fill tortillas with the mixture and cheese. Cook until cheese is melted. Serve with sour cream and salsa.",
  },
  {
    name: "Vegetarian Lentil Loaf",
    ingredients: [
      "Lentils",
      "Carrots",
      "Celery",
      "Onion",
      "Garlic",
      "Breadcrumbs",
      "Eggs",
      "Ketchup",
      "Mustard",
      "Worcestershire Sauce",
    ],
    instructions:
      "Cook lentils and mix with sautéed carrots, celery, onion, and garlic. Add breadcrumbs, beaten eggs, ketchup, mustard, and Worcestershire sauce. Form into a loaf and bake until firm.",
  },
  {
    name: "Stuffed Acorn Squash with Quinoa",
    ingredients: [
      "Acorn Squash",
      "Quinoa",
      "Kale",
      "Dried Cranberries",
      "Pecans",
      "Maple Syrup",
      "Cinnamon",
      "Olive Oil",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Cut acorn squash in half and scoop out seeds. Roast until tender. Cook quinoa and mix with sautéed kale, dried cranberries, and chopped pecans. Fill the acorn squash halves with the quinoa mixture. Drizzle with maple syrup, sprinkle with cinnamon, and season with salt and pepper.",
  },
  {
    name: "Vegetarian Chickpea Burger",
    ingredients: [
      "Chickpeas",
      "Red Onion",
      "Garlic",
      "Cilantro",
      "Cumin",
      "Coriander",
      "Breadcrumbs",
      "Egg",
      "Tahini Sauce",
      "Whole Wheat Buns",
    ],
    instructions:
      "Mash chickpeas and mix with finely chopped red onion, minced garlic, cilantro, cumin, coriander, breadcrumbs, and beaten egg. Form into patties and cook until golden. Serve on whole wheat buns with a drizzle of tahini sauce.",
  },
  {
    name: "Sundried Tomato and Spinach Stuffed Portobello Mushrooms",
    ingredients: [
      "Portobello Mushrooms",
      "Spinach",
      "Sundried Tomatoes",
      "Feta Cheese",
      "Balsamic Glaze",
      "Olive Oil",
      "Garlic",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Remove the stems from portobello mushrooms. Sauté spinach, sundried tomatoes, and minced garlic in olive oil. Stuff the mushrooms with the mixture, top with crumbled feta, and bake until tender. Drizzle with balsamic glaze before serving.",
  },
  {
    name: "Vegetarian Szechuan Tofu Stir-Fry",
    ingredients: [
      "Tofu",
      "Broccoli",
      "Bell Peppers",
      "Snap Peas",
      "Szechuan Sauce",
      "Soy Sauce",
      "Ginger",
      "Garlic",
      "Green Onions",
      "Rice",
    ],
    instructions:
      "Press tofu and cut into cubes. Stir-fry tofu, broccoli, bell peppers, and snap peas in Szechuan sauce, soy sauce, minced ginger, and garlic. Garnish with sliced green onions. Serve over rice.",
  },
  {
    name: "Caramelized Onion and Goat Cheese Tart",
    ingredients: [
      "Puff Pastry",
      "Onions",
      "Goat Cheese",
      "Balsamic Vinegar",
      "Thyme",
      "Olive Oil",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Caramelize sliced onions in olive oil with thyme, balsamic vinegar, salt, and pepper. Roll out puff pastry and spread the caramelized onions over it. Crumble goat cheese on top. Bake until pastry is golden.",
  },
  {
    name: "Vegetarian Coconut Curry",
    ingredients: [
      "Potatoes",
      "Carrots",
      "Cauliflower",
      "Chickpeas",
      "Coconut Milk",
      "Curry Powder",
      "Turmeric",
      "Ginger",
      "Garlic",
      "Cilantro",
      "Basmati Rice",
    ],
    instructions:
      "Sauté diced potatoes, carrots, cauliflower, and chickpeas in curry powder, turmeric, minced ginger, and garlic. Add coconut milk and simmer until vegetables are tender. Serve over basmati rice, garnished with fresh cilantro.",
  },
  {
    name: "Caprese Quinoa Salad",
    ingredients: [
      "Quinoa",
      "Cherry Tomatoes",
      "Fresh Mozzarella",
      "Basil",
      "Balsamic Glaze",
      "Olive Oil",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Cook quinoa and let it cool. Mix with halved cherry tomatoes, fresh mozzarella balls, and chopped basil. Drizzle with balsamic glaze and olive oil. Season with salt and pepper.",
  },
  {
    name: "Vegetarian Stuffed Bell Peppers with Couscous",
    ingredients: [
      "Bell Peppers",
      "Couscous",
      "Black Beans",
      "Corn",
      "Tomatoes",
      "Onion",
      "Chili Powder",
      "Cumin",
      "Cilantro",
      "Lime",
    ],
    instructions:
      "Cut bell peppers in half and remove seeds. Cook couscous. Mix with black beans, corn, diced tomatoes, chopped onion, chili powder, cumin, cilantro, and a squeeze of lime. Fill the bell peppers and bake until tender.",
  },
  {
    name: "Spaghetti Aglio e Olio with Roasted Vegetables",
    ingredients: [
      "Spaghetti",
      "Cherry Tomatoes",
      "Broccoli",
      "Zucchini",
      "Garlic",
      "Red Pepper Flakes",
      "Olive Oil",
      "Parmesan Cheese",
      "Parsley",
    ],
    instructions:
      "Roast cherry tomatoes, broccoli, and zucchini. Sauté minced garlic and red pepper flakes in olive oil. Toss with cooked spaghetti and roasted vegetables. Garnish with grated Parmesan and chopped parsley.",
  },
  {
    name: "Vegetarian Thai Pineapple Fried Rice",
    ingredients: [
      "Jasmine Rice",
      "Pineapple",
      "Tofu",
      "Carrots",
      "Peas",
      "Cashews",
      "Soy Sauce",
      "Curry Powder",
      "Turmeric",
      "Green Onions",
    ],
    instructions:
      "Cook jasmine rice. Sauté tofu, diced pineapple, carrots, peas, and cashews in soy sauce, curry powder, and turmeric. Stir in cooked rice and sliced green onions. Cook until heated through.",
  },
  {
    name: "Mushroom and Spinach Stuffed Shells",
    ingredients: [
      "Jumbo Pasta Shells",
      "Ricotta Cheese",
      "Mushrooms",
      "Spinach",
      "Marinara Sauce",
      "Mozzarella Cheese",
      "Parmesan Cheese",
      "Garlic",
      "Olive Oil",
      "Basil",
    ],
    instructions:
      "Cook jumbo pasta shells. Sauté mushrooms and spinach with garlic in olive oil. Mix ricotta cheese with the sautéed vegetables. Stuff the shells with the ricotta mixture. Arrange in a baking dish, top with marinara sauce, mozzarella, and Parmesan. Bake until bubbly. Garnish with fresh basil.",
  },
  {
    name: "Vegetarian Pesto Pizza",
    ingredients: [
      "Pizza Dough",
      "Pesto Sauce",
      "Cherry Tomatoes",
      "Mozzarella Cheese",
      "Arugula",
      "Parmesan Cheese",
      "Olive Oil",
      "Garlic",
      "Pine Nuts",
    ],
    instructions:
      "Roll out pizza dough. Spread pesto sauce and top with sliced cherry tomatoes, mozzarella cheese, and arugula. Drizzle with olive oil, sprinkle with grated Parmesan, and scatter pine nuts. Bake until crust is golden.",
  },
  {
    name: "Black Bean and Sweet Potato Quesadillas",
    ingredients: [
      "Black Beans",
      "Sweet Potatoes",
      "Red Onion",
      "Cilantro",
      "Lime",
      "Cumin",
      "Chili Powder",
      "Tortillas",
      "Cheese",
      "Sour Cream",
      "Salsa",
    ],
    instructions:
      "Roast sweet potatoes. Mix with black beans, diced red onion, chopped cilantro, lime juice, cumin, and chili powder. Fill tortillas with the mixture and cheese. Cook until cheese is melted. Serve with sour cream and salsa.",
  },
  {
    name: "Vegetarian Lentil Loaf",
    ingredients: [
      "Lentils",
      "Carrots",
      "Celery",
      "Onion",
      "Garlic",
      "Breadcrumbs",
      "Eggs",
      "Ketchup",
      "Mustard",
      "Worcestershire Sauce",
    ],
    instructions:
      "Cook lentils and mix with sautéed carrots, celery, onion, and garlic. Add breadcrumbs, beaten eggs, ketchup, mustard, and Worcestershire sauce. Form into a loaf and bake until firm.",
  },
  {
    name: "Stuffed Acorn Squash with Quinoa",
    ingredients: [
      "Acorn Squash",
      "Quinoa",
      "Kale",
      "Dried Cranberries",
      "Pecans",
      "Maple Syrup",
      "Cinnamon",
      "Olive Oil",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Cut acorn squash in half and scoop out seeds. Roast until tender. Cook quinoa and mix with sautéed kale, dried cranberries, and chopped pecans. Fill the acorn squash halves with the quinoa mixture. Drizzle with maple syrup, sprinkle with cinnamon, and season with salt and pepper.",
  },
  {
    name: "Vegetarian Eggplant Involtini",
    ingredients: [
      "Eggplants",
      "Ricotta Cheese",
      "Spinach",
      "Marinara Sauce",
      "Mozzarella Cheese",
      "Parmesan Cheese",
      "Garlic",
      "Olive Oil",
      "Basil",
    ],
    instructions:
      "Slice eggplants and grill until tender. Mix ricotta cheese with sautéed spinach and minced garlic. Spread the ricotta mixture on each eggplant slice, roll up, and place in a baking dish. Top with marinara sauce, mozzarella, Parmesan, and fresh basil. Bake until bubbly.",
  },
  {
    name: "Vegetarian Chickpea Tikki",
    ingredients: [
      "Chickpeas",
      "Potatoes",
      "Onion",
      "Garlic",
      "Ginger",
      "Cilantro",
      "Cumin",
      "Coriander",
      "Garam Masala",
      "Bread Crumbs",
      "Yogurt Sauce",
    ],
    instructions:
      "Mash chickpeas and potatoes. Sauté chopped onion, garlic, and ginger. Mix with mashed chickpeas, potatoes, cilantro, cumin, coriander, garam masala, and breadcrumbs. Form into patties and pan-fry until golden. Serve with yogurt sauce.",
  },
  {
    name: "Vegetarian Greek Moussaka",
    ingredients: [
      "Eggplants",
      "Potatoes",
      "Tomatoes",
      "Onion",
      "Garlic",
      "Feta Cheese",
      "Milk",
      "Flour",
      "Butter",
      "Nutmeg",
      "Cinnamon",
    ],
    instructions:
      "Roast eggplants and potatoes. Sauté onion and garlic. Layer roasted vegetables with sliced tomatoes and crumbled feta cheese. In a separate pan, make béchamel sauce with milk, flour, and butter, seasoned with nutmeg. Pour the sauce over the layered ingredients. Sprinkle with cinnamon and bake until golden.",
  },
  {
    name: "Vegetarian Stuffed Grape Leaves",
    ingredients: [
      "Grape Leaves",
      "Rice",
      "Tomatoes",
      "Pine Nuts",
      "Raisins",
      "Onion",
      "Dill",
      "Mint",
      "Lemon",
      "Olive Oil",
    ],
    instructions:
      "Prepare grape leaves. Cook rice and mix with diced tomatoes, pine nuts, raisins, chopped onion, dill, and mint. Place a spoonful of the rice mixture on each grape leaf, fold, and roll. Steam until heated through. Drizzle with olive oil and lemon juice before serving.",
  },
  {
    name: "Chickpea and Avocado Salad",
    ingredients: [
      "Chickpeas",
      "Avocado",
      "Cucumber",
      "Cherry Tomatoes",
      "Red Onion",
      "Cilantro",
      "Lime",
      "Olive Oil",
      "Cumin",
      "Salt",
      "Pepper",
    ],
    instructions:
      "Combine chickpeas, diced avocado, sliced cucumber, halved cherry tomatoes, finely chopped red onion, and chopped cilantro in a bowl. In a separate bowl, whisk together lime juice, olive oil, cumin, salt, and pepper. Pour the dressing over the salad and toss gently.",
  },
  {
    name: "Vegetarian Ratatouille",
    ingredients: [
      "Eggplants",
      "Zucchini",
      "Bell Peppers",
      "Tomatoes",
      "Onion",
      "Garlic",
      "Herbes de Provence",
      "Olive Oil",
    ],
    instructions:
      "Slice eggplants, zucchini, bell peppers, and tomatoes. Sauté diced onion and minced garlic in olive oil. Layer the sliced vegetables in a baking dish, sprinkling each layer with Herbes de Provence. Bake until the vegetables are tender and slightly caramelized.",
  },
  {
    name: "Vegan Lentil and Vegetable Soup",
    ingredients: [
      "Lentils",
      "Carrots",
      "Celery",
      "Potatoes",
      "Tomatoes",
      "Vegetable Broth",
      "Onion",
      "Garlic",
      "Cumin",
      "Paprika",
      "Bay Leaves",
    ],
    instructions:
      "Sauté diced onion and minced garlic. Add lentils, carrots, celery, potatoes, diced tomatoes, vegetable broth, cumin, paprika, and bay leaves. Simmer until the lentils and vegetables are cooked. Season with salt and pepper to taste.",
  },
];

// Function to display recipes
function displayRecipes() {
  const recipeContainer = document.getElementById("recipe-container");

  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
            <h2>${recipe.name}</h2>
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}
            </ul>
            <h3>Instructions:</h3>
            <p>${recipe.instructions}</p>
        `;

    recipeContainer.appendChild(card);
  });
}

// Call the displayRecipes function when the page loads
window.onload = displayRecipes;
