import React from "react";
import { LocationList, LocationListContainer } from "./LocationSuggestion.styles";
import { Suggestion } from "../../types/LocationSearchList";

interface LocationSuggestionsProps {
  suggestions: Suggestion[]; // 수정된 타입
  onSelect: (placeName: string, lat: number, lng: number) => void;
  searchTerm: string;
}

const LocationSuggestion: React.FC<LocationSuggestionsProps> = ({ suggestions, onSelect, searchTerm }) => {
  if (suggestions.length === 0) return null;

  const highlightText = (text: string, highlight: string) => {
    const regex = new RegExp(`(${highlight})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} style={{ color: "#0062FF" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <LocationListContainer>
      {suggestions.map((item) => (
        <LocationList
          key={item.id}
          onClick={() => onSelect(item.place_name, parseFloat(item.y), parseFloat(item.x))}
        >
          {highlightText(item.place_name, searchTerm)}{" "}
          {item.road_address_name
            ? `(${highlightText(item.road_address_name, searchTerm)})`
            : `(${highlightText(item.address_name, searchTerm)})`}
        </LocationList>
      ))}
    </LocationListContainer>
  );
};

export default LocationSuggestion;