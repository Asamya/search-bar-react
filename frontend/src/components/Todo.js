import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

Todo.propTypes = {
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['OPEN', 'IN_PROGRESS', 'DONE']).isRequired,
    description: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onAdvance: PropTypes.func.isRequired,
}

export default function Todo({ id, status, description, onDelete, onAdvance }) {
    return (
        <StyledTodo>
            <h3>
                {description} <small>[{status}]</small>
            </h3>
            <ButtonGroup>
                {status !== 'DONE' && (
                    <button
                        onClick={() => onAdvance({ id, description, status })}>
                        Advance
                    </button>
                )}
                <button onClick={() => onDelete(id)}>Delete</button>
            </ButtonGroup>
        </StyledTodo>
    );
}

const StyledTodo = styled.section`
    padding: 8px;
    border: 1px solid salmon;
    border-radius: 8px;
`;

const ButtonGroup = styled.section`
    display: flex;
    justify-content: space-between;
`;
