import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import './SearchForm.css';

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedSearchText = searchText.trim();
    if (trimmedSearchText.length === 0) {
      setSearchTerm('Inuyasha');
      setResultTitle('Please Enter Something ...');
    } else {
      setSearchTerm(trimmedSearchText);
    }

    navigate('/book');
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Inuyasha ..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button type="submit" className="flex flex-c">
                <FaSearch className="text-purple" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
