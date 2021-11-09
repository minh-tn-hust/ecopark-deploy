import './ListRe.css'
import React, { useState } from 'react';
import Content from './Content/Content';
import SearchBar from './SearchBar/SearchBar';

function ListRe() {
    const [needLoading, setLoading] = useState(0) // 1 is Add new, 2 is Delete the list was checked 0 is nothing
    const [listIdDelete, setListId] = useState([])
    const [role, setRole] = useState([true, false])
    return (
        <div className="ListRe">
            <SearchBar role={role} list={listIdDelete} callBack={
                () => {
                    setLoading(needLoading + 1)
                    setListId([])
                }
            }></SearchBar>
            <Content loading={needLoading} updateList={(list) => setListId(list)} updateRole={(value) => setRole(value)}></Content>
        </div>
    );
}

export default ListRe;
