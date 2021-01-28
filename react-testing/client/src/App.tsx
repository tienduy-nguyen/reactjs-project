import React from 'react';
import './App.css';
import { useDebounce } from './hooks/useDebounce';
import { Book } from './components/book';

const sleep = (ms = 500) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

interface IBook {
  id: number;
  name: string;
}

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedValue = useDebounce(searchTerm, 500);
  const [isLoading, setIsLoading] = React.useState(false);
  const [books, setBooks] = React.useState<IBook[]>([]);
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    const fetchBooks = async (searchTerm: string) => {
      setIsLoading(true);
      const result = await fetch(
        `http://localhost:5000/books?q=${debouncedValue}`
      );
      const json = await result.json();
      await sleep(800);
      setBooks(json);
      setIsLoading(false);
    };
    fetchBooks(debouncedValue);
  }, [debouncedValue]);

  const handleEdit = async (id: number, name: string) => {
    const data = {
      name: name,
    };

    const res = await fetch(`http://localhost:5000/books/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    setBooks(
      books.map((book) => {
        if (book.id !== id) return book;
        return result;
      })
    );
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!value || value.trim() === '') {
      return;
    }
    const data = {
      name: value,
    };
    const res = await fetch('http://localhost:5000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setBooks(books.concat([result]));
    setValue('');
  };

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:5000/books/${id}`, {
      method: 'DELETE',
    });
    setBooks(books.filter((book) => book.id !== id));
    return;
  };

  return (
    <div className='App'>
      <h1>Favorite Books</h1>
      <p>Keep track of your favorites!</p>
      <div>
        <div className='field'>
          <label htmlFor='search'>Search for a book</label>
        </div>
        <div className='field'>
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            id='search'
          />
        </div>
      </div>
      {isLoading && <div>Loading...</div>}

      {!isLoading && (
        <ul>
          {books.map((book) => (
            <Book
              key={book.id}
              value={book.name}
              handleEdit={(newValue: string) => handleEdit(book.id, newValue)}
              handleDelete={() => handleDelete(book.id)}
            />
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit} className='new-form'>
        <div className='field'>
          <label htmlFor='create-input'>Add a book</label>
        </div>
        <input
          data-testid='input'
          id='create-input'
          name='create-book'
          className='new-input'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder='eg. The Great Gatsby'
        />
        <div className='field align-right'>
          <button className='button primary-button' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
