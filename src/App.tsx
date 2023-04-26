import  { useState, useEffect } from 'react';
import Form from './components/CocktailForm.tsx';
import { fetchCocktails } from './utils/api.ts';
import {Cocktail} from './utils/types.ts';
import CocktailCard  from "./components/CocktailCard";

const App = () => {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    console.log(cocktails)

    useEffect(() => {
        const getCocktails = async () => {
            if (!searchTerm) return;

            const fetchedCocktails = await fetchCocktails(searchTerm);
            setCocktails(fetchedCocktails);
        };

        getCocktails().catch((error) => {
            console.error(error);

        });
    }, [searchTerm]);

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold mb-4 text-center">Cocktail App</h1>
            <Form onSearch={setSearchTerm} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cocktails.map((cocktail) => (
                    <CocktailCard key={cocktail.id} cocktail={cocktail} />
                ))}
            </div>
        </div>
    );
};

export default App;