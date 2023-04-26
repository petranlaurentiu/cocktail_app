export interface Cocktail {
    id: string;
    name: string;
    image: string;
    instructions: string;
    category: string;
    glass: string;
}

export interface CocktailProps {
    cocktail: Cocktail;
}