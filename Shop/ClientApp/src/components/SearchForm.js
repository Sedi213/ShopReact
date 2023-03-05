import React from "react";
import { useGlobalContext } from "../AppProvider";
import {FaSearch} from 'react-icons/fa'
import "./SearchForm.css";
export default function SearchForm() {
  const { searchString, SetSearchString } = useGlobalContext();

  return (
    <section className="search">
      <div class="search-box">
        <button class="btn-search">
          <i class="fas fa-search"><FaSearch/></i>
        </button>
        <input
          type="text"
          class="input-search"
          placeholder="Type to Search..."
          value={searchString}
          onChange={(e) => SetSearchString(e.target.value)}
        />
      </div>
    </section>
  );
}
