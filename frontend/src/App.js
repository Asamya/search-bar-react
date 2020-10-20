import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodo from './components/AddTodo';
import SearchBar from "./components/SearchBar";

export default function App() {
    const [todos, create, remove, advance] = useTodos();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(todos);

    useEffect(() => {
        setSearchResults(todos
            .filter((todo) => todo.description.includes(searchTerm)))
    }, [searchTerm, todos]);

    return (
        <Main>
            <h1>Super Kanban Board </h1>
            <AddTodo onAdd={create} />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <Board>
                <TodoList
                    status="OPEN"
                    todos={searchResults}
                    onDelete={remove}
                    onAdvance={advance}
                />
                <TodoList
                    status="IN_PROGRESS"
                    todos={searchResults}
                    onDelete={remove}
                    onAdvance={advance}
                />
                <TodoList
                    status="DONE"
                    todos={searchResults}
                    onDelete={remove}
                    onAdvance={advance}
                />
            </Board>
        </Main>
    );
}

const Main = styled.main`
    height: 100vh;
    padding: 8px;

    h1 {
        color: hotpink;
    }
`;

const Board = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`;
