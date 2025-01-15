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
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void; 
    onBackIconClick: () => void; // 추가된 prop
}

const LocationSearchBar: React.FC<SearchBarProps> = ({
    value,
    onInputChange,
    onFocus,
    onBlur,
    isFocused,
    onKeyDown,
    onBackIconClick,
}) => {

    return (
        <SearchBarContainer isFocused={isFocused}>
            <img
                src={isFocused ? BackIcon : SearchIcon}
                alt={isFocused ? "back_icon" : "search_icon"}
                onClick={isFocused ? onBackIconClick : undefined} // 핸들러 연결
            />
            <SearchInput
                isFocused={isFocused}
                type="text"
                value={value}
                onChange={(e) => onInputChange(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                placeholder="지번, 도로명 주소 검색"
            />
        </SearchBarContainer>
    );
};

export default LocationSearchBar;