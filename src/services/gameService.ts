import type { Game } from '@/utils/endpoint';

interface FetchGamesResponse {
  games: Game[];
  totalPages: number;
  currentPage: number;
  availableFilters: string[];
}

export const fetchGames = async (genre?: string | null, page: number = 1): Promise<FetchGamesResponse> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const params = new URLSearchParams({ page: String(page) });
  if (genre && genre.toLowerCase() !== 'all') {
    params.append('genre', genre);
  }

  const response = await fetch(`${apiUrl}/games?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Failed to fetch games from API');
  }

  return response.json();
};