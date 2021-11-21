import './PendingHis.css'
import React, { useState } from 'react';
import Content from './Content/Content';
import SearchBar from './SearchBar/SearchBar';

function PendingHis() {
    return (
        <div className="PendingHis">
            <SearchBar></SearchBar>
            <Content></Content>
        </div>
    );
}

export default PendingHis;
