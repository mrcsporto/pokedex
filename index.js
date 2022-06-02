fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
	.then(response => {
		return response.json()
})
	.then(async data => {
        const page = document.querySelector("#pokedex-page")
		const box = document.querySelector("#pokemon-box")
		page.innerHTML = ""
	
		for(let i = 0; i < data.results.length; i++){
			box.querySelector("#pokemon-name").innerHTML = data.results[i].name
			box.querySelector("#pokemon-name").style.textTransform = "capitalize"

			const pokemonImage = await fetch("https://pokeapi.co/api/v2/pokemon-form/" + data.results[i].name)
			const image = await pokemonImage.json()
			box.querySelector("#pokemon-img").src = image.sprites.front_default
			page.innerHTML += box.outerHTML		
	}
})






