'use client';

import { useSearchParams, useRouter } from 'next/navigation';

interface GenreFilterProps {
  genres: string[];
}

const GenreFilter = ({ genres }: GenreFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentGenre = searchParams.get('genre') || 'all';

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newGenre = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (newGenre === 'all') {
      params.delete('genre');
    } else {
      params.set('genre', newGenre);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-3">
      <label htmlFor="genre-filter" className="text-text-primary font-semibold">
        Genre
      </label>

      <div className="h-6 border-l border-card-border"></div>

      
      <select
        id="genre-filter"
        value={currentGenre}
        onChange={handleFilterChange}
        className="bg-transparent text-text-primary focus:outline-none focus:ring-0 border-none"
      >
        <option value="all">All</option>
        {genres.map(genre => (
          <option key={genre} value={genre.toLowerCase()}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;