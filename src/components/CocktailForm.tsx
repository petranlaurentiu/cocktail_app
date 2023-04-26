import {useState} from "react";

interface FormProps {
    onSearch: (searchTerm: string) => void;
}


const Form: React.FC<FormProps> = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchTerm);
    }


    return (
        <form
            onSubmit={handleSubmit}C
            className='mb-4 flex items-center'
        >
            <input
                type='text'
                placeholder='Enter cocktail'
                className='border rounded-md px-4 py-2 mr-2 flex-group'
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button
                type='submit'
                className='
                bg-blue-500 hover:bg-blue-600
                text-white rounded-md px-4 py-2'
            >Search
            </button>
        </form>

    )
}

export default Form;