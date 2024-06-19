import React from "react";
import useWatchlist from "../../../../hooks/usewatchlist";
import "./Button.component.css";
import { WatchlistButtonProps } from "./Button.types";

const WatchlistButton: React.FC<WatchlistButtonProps> = ({
  itemId,
  itemName,
  itemImage,
  itemPrice,
}) => {
  const { isInWatchlist, handleWatchlistToggle, isSignedIn } = useWatchlist(
    itemId,
    itemName,
    itemPrice,
    itemImage
  );

  return (
    <button
      onClick={handleWatchlistToggle}
      disabled={!isSignedIn}
      className={`watchlist-button ${isInWatchlist ? "in-watchlist" : ""}`}
    >
      {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
    </button>
  );
};

export default WatchlistButton;
