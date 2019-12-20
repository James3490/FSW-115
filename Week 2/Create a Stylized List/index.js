const jContent =
{
		"name": "Luke Skywalker",
		"height": "172",
		"mass": "77",
		"hair_color": "blond",
		"skin_color": "fair",
		"eye_color": "blue",
		"birth_year": "19BBY",
		"gender": "male",
		"homeworld": "https://swapi.co/api/planets/1/",
		"films": [
			"https://swapi.co/api/films/2/",
			"https://swapi.co/api/films/6/",
			"https://swapi.co/api/films/3/",
			"https://swapi.co/api/films/1/",
			"https://swapi.co/api/films/7/"
		],
		"species": [
			"https://swapi.co/api/species/1/"
		],
		"vehicles": [
			"https://swapi.co/api/vehicles/14/",
			"https://swapi.co/api/vehicles/30/"
		],
		"starships": [
			"https://swapi.co/api/starships/12/",
			"https://swapi.co/api/starships/22/"
		],
		"created": "2014-12-09T13:50:51.644000Z",
		"edited": "2014-12-20T21:17:56.891000Z",
		"url": "https://swapi.co/api/people/1/"
}

    function show() {
        output.innerHTML = `
            <h1>Name: ${jContent.name}</h1>
            <ol>
            <li>Height: ${jContent.height}</li>
            <li>Mass: ${jContent.mass}</li>
            <li>Hair Color: ${jContent.hair_color}</li>
            <li>Skin Color: ${jContent.skin_color}</li>
            <li>Eye Color: ${jContent.eye_color}</li>
            <li>Birth Year: ${jContent.birth_year}</li>
            <li>Gender: ${jContent.gender}</li>
            <li>Homeworld: ${jContent.homeworld}</li>
            <li>Species: ${jContent.species}</li>
            <li>Vehicles: ${jContent.vehicles}</li>
            <li>Starships: ${jContent.starships}</li>
            <h2>Films: <ul> 
                    <li>${jContent.films[0]}</li>
                    <li>${jContent.films[1]}</li>
                    <li>${jContent.films[2]}</li>
                    <li>${jContent.films[3]}</li>
                    <li>${jContent.films[4]}</li>
                </ul>
            </h2>
            <h3>Created: ${jContent.created}</h3>
            <h3>Edited: ${jContent.edited}</h3>
            <h3>URL: ${jContent.url}</h3>
            </ol>`}