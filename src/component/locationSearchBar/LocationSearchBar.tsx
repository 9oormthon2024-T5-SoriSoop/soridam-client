import React from 'react';
import SearchIcon from '../../assets/icons/ico_map_search.png'
import BackIcon from '../../assets/icons/ico_navigate_back.png';
import { SearchBarContainer, SearchInput } from './LocationSearchBar.styles';

interface SearchBarProps {
    value: string;
    onInputChange: (value: string) => void;
    onFocus: () => void;
    onBlur: () => void;
    isFocused: boolean;
}

const LocationSearchBar: React.FC<SearchBarProps> = ({
    value,
    onInputChange,
    onFocus,
    onBlur,
    isFocused,
}) => {

    return (
        <SearchBarContainer isFocused={isFocused}>
            <img
                src={isFocused ? BackIcon : SearchIcon}
                alt={isFocused ? "back_icon" : "search_icon"}
            />
            <SearchInput
                type="text"
                value={value}
                onChange={(e) => onInputChange(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder="지번, 도로명 주소 검색"
            />
        </SearchBarContainer>
    );
};

export default LocationSearchBar;