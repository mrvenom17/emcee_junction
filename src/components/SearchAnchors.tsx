import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Anchor {
  id: number;
  name: string;
  specialization: string;
  rating: number;
}

export default function SearchAnchors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Anchor[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    if (term.length > 2) {
      setIsSearching(true);
      // TODO: Replace with actual API call
      const response = await fetch(`/api/anchors/search?term=${term}`);
      const data = await response.json();
      setResults(data);
      setIsSearching(false);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search anchors..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
        />
      </div>
      
      {(results.length > 0 || isSearching) && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl z-50">
          {isSearching ? (
            <div className="p-4 text-center text-gray-600">Searching...</div>
          ) : (
            results.map((anchor) => (
              <div key={anchor.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex justify-between">
                  <h4 className="text-gray-900 font-medium">{anchor.name}</h4>
                  <span className="text-gray-500">{anchor.rating}★</span>
                </div>
                <p className="text-gray-600 text-sm">{anchor.specialization}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}