import { useState, useEffect } from 'react';
import { IPokemon } from '../pokemon.type';

interface IAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const usePokemons = (limit: number = 10) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [page, setPage] = useState(1); // Current page number
  const [totalPages, setTotalPages] = useState(0); // Total number of pages
  const [nextUrl, setNextUrl] = useState<string | null>(null); // Next page URL
  const [prevUrl, setPrevUrl] = useState<string | null>(null); // Previous page URL

  const fetchPokemons = async (url: string) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data: IAPIResponse = await response.json();
        const pokemonsWithImage = data.results.map((pokemon) => ({
          ...pokemon,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            pokemon.url.split('/')[6]
          }.png`,
        }));
        setPokemons(pokemonsWithImage);
        setTotalPages(Math.ceil(data.count / limit));
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err) {
      setError((err as any).message);
    }
    setLoading(false);
  };

  useEffect(() => {
    const url = `${API_URL}?offset=${(page - 1) * limit}&limit=${limit}`;
    fetchPokemons(url);
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return {
    pokemons,
    loading,
    error,
    page,
    totalPages,
    nextUrl,
    prevUrl,
    handlePageChange,
  };
};
