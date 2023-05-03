async function start() {
  const container = document.querySelector(".container");
  const template_card = document.querySelector(".card_template");
  const api_url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

  const response = await fetch(api_url);
  const { results } = await response.json();

  function insert(element, parant = container) {
    parant.appendChild(element);
  }

  function generateColorOfType(type) {
    switch (type) {
      case "grass":
        return "lightgreen";
        break;
      case "fire":
        return "lightcoral";
        break;
      case "water":
        return "lightblue";
        break;
      case "bug":
        return "lightgoldenrodyellow";
        break;
      case "normal":
        return "lightsalmon";
        break;
      case "poison":
        return "lightseagreen";
        break;
      case "electric":
        return "lightskyblue";
        break;
      case "ground":
        return "lightgoldenrodyellow";
        break;
      case "fairy":
        return "lightgoldenrodyellow";
        break;
      case "fighting":
        return "lightgoldenrodyellow";
        break;
      case "rock":
        return "lightgoldenrodyellow";
        break;
      case "ghost":
        return "lightgoldenrodyellow";
        break;
      case "psychic":
        return "lightgoldenrodyellow";
        break;

      default:
        break;
    }
  }

  function createElPokemon(item) {
    const card_box = template_card.content.cloneNode(true);

    const card_image = card_box.querySelector(".pokemon_img");
    card_image.setAttribute("src", item.img);

    const pokemon_name = card_box.querySelector(".pokemon_name");
    pokemon_name.textContent = item.name;

    const pokemon_type = card_box.querySelector(".pokemon_type");
    pokemon_type.textContent = item.type;

    const pokemon_card = card_box.querySelector(".pokemon_template");

    // set color of pokemon
    pokemon_card.style.backgroundColor = generateColorOfType(item.type);

    return card_box;
  }

  // fetch url to get image src && type
  results.forEach(async (item) => {
    const response = await fetch(item.url);
    const pokemon_item = await response.json();

    // generate type, img, name of item
    const type = pokemon_item.types[0].type.name;
    const img = pokemon_item.sprites.front_default;
    const name = pokemon_item.name;

    // generate own object of all information
    const pokemon = {
      type: type,
      img: img,
      name: name,
    };

    // create pokemon element
    const pokemonEl = createElPokemon(pokemon);

    // push to container
    insert(pokemonEl, container);
  });
}
start();
