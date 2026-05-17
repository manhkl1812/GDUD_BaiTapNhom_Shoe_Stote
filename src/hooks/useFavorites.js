import { useState, useEffect } from "react";

const FAVORITES_KEY = "shoe_store_favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  // Load on mount and listen for changes
  useEffect(() => {
    const loadFavorites = () => {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        try {
          setFavorites(JSON.parse(stored));
        } catch {
          setFavorites([]);
        }
      }
    };

    loadFavorites();

    // Listen for storage changes from other tabs/windows
    window.addEventListener("storage", loadFavorites);
    // Listen for custom event from same tab
    window.addEventListener("favorites:updated", loadFavorites);

    return () => {
      window.removeEventListener("storage", loadFavorites);
      window.removeEventListener("favorites:updated", loadFavorites);
    };
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const next = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
      // Dispatch event to notify other components
      window.dispatchEvent(new Event("favorites:updated"));
      return next;
    });
  };

  const isFavorited = (productId) => favorites.includes(productId);

  return { favorites, toggleFavorite, isFavorited };
}
