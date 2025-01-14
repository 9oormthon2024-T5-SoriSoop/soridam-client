import React from "react";

interface LocationSuggestionsProps {
  suggestions: any[];
  onSelect: (placeName: string, lat: number, lng: number) => void;
}

const LocationSuggestion: React.FC<LocationSuggestionsProps> = ({ suggestions, onSelect }) => {
  if (suggestions.length === 0) return null;

  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        border: "1px solid #ccc",
        maxHeight: "200px",
        overflowY: "auto",
        background: "#fff",
        zIndex: 10,
        width: "100%",
      }}
    >
      {suggestions.map((item) => (
        <li
          key={item.id}
          onClick={() => onSelect(item.place_name, parseFloat(item.y), parseFloat(item.x))}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #eee",
          }}
        >
          {item.place_name} ({item.road_address_name || item.address_name})
        </li>
      ))}
    </ul>
  );
};

export default LocationSuggestion;