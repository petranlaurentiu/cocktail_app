import {CocktailProps} from "../utils/types.ts";

const CocktailCard: React.FC<CocktailProps> = ({cocktail}) => {
    return (
        <div className='p-4 shadow rounded bg-white'>
            <img
                className='w-full h-48 object-cover rounded-mb mb-4'
                src={cocktail.image}
                alt={cocktail.name}
            />
            <h2 className='text-2xl font-bold mb-2'>
                {cocktail.name}
            </h2>
            <p className='text-gray-600'>
                {cocktail.instructions}
            </p>
            <p className="text-gray-600 text-sm">Category: {cocktail.category}</p>
            <p className="text-gray-600 text-sm">Glass: {cocktail.glass}</p>
        </div>
    )
}

export default CocktailCard;