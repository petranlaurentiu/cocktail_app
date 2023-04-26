import axios from 'axios';
import {Cocktail} from "./types.ts";

// Let's fetch the API from Cocktail DB with axios

export const fetchCocktails = async (searchTerm: string): Promise<Cocktail[]> => {
    const options = {
        method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/search.php',
        params: {s: searchTerm},
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'eb04b30603msh9797d76a0ef7aadp1dd7f8jsn5751832a55c6',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }

    };
    try {
        const response = await axios.request(options);
        // map response data to Cocktail type
        return response.data.drinks.map((item: any) => ({
            id: item.idDrink,
            name: item.strDrink,
            image: item.strDrinkThumb,
            instructions: item.strInstructions,
            category: item.strCategory,
            glass: item.strGlass,
        }))
    } catch (error) {
        console.error(error);
        return [];
    }


};