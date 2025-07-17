'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchGames } from '@/services/gameService';
import type { Game } from '@/utils/endpoint';
import GameCard from '@/components/GameCard';
import GenreFilter from '@/components/GenreFilter';
import LoadingSpinner from '@/components/LoadingSpinner';

function Catalog() {
  const searchParams = useSearchParams();
  const [games, setGames] = useState<Game[]>([]);
  const [availableGenres, setAvailableGenres] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const selectedGenre = searchParams.get('genre');

  useEffect(() => {
    const loadGames = async (reset = false) => {
      setLoading(true);
      try {
        const { games: newGames, availableFilters, totalPages: newTotalPages } = await fetchGames(selectedGenre, reset ? 1 : page);
        setGames(prevGames => (reset ? newGames : [...prevGames, ...newGames]));
        setAvailableGenres(availableFilters);
        setTotalPages(newTotalPages);

      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setLoading(false);
      }
    };
    setPage(1);
    loadGames(true);

  }, [selectedGenre]);

  const handleSeeMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (page > 1) {
      const loadMoreGames = async () => {
        setLoading(true);
        try {
          const { games: newGames } = await fetchGames(selectedGenre, page);
          setGames(prevGames => [...prevGames, ...newGames]);
        } catch (error) {
          console.error("Error fetching more games:", error);
        } finally {
          setLoading(false);
        }
      };
      loadMoreGames();
    }
  }, [page, selectedGenre]);


  return (
    <div className="bg-background-main p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-text-primary">Top Sellers</h1>
          <GenreFilter genres={availableGenres} />
        </div>

        {loading && games.length === 0 ? (
          <div className="flex justify-center items-center h-96">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {games.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
            {loading && games.length > 0 && <div className="flex justify-center py-4"><LoadingSpinner /></div>}
            
            {page < totalPages && !loading && (
              <div className="text-left mt-8">
                <button 
                  onClick={handleSeeMore}
                  className="bg-text-primary text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity"
                >
                  See More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen"><LoadingSpinner /></div>}>
      <Catalog />
    </Suspense>
  );
}