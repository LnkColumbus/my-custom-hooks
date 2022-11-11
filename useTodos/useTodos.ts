import { useEffect, useReducer } from 'react'

import { todoReducer } from './todoReducer';
import { ITodo } from './todos';

const initialState: ITodo[] = [];

const init = () => {
    return JSON.parse( localStorage.getItem('todos') || '' ) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const handleNewTodo = ( todo: ITodo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id: number ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: {
                id,
                description: '',
                done: false
            }
        })
    }

    const handleToggleTodo = ( id: number ) => {
        // console.log({ id });
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: {
                id,
                description: '',
                done: false
            }
        })
    }

    return {
        todos,
        todosCount: todos.length,
        todosPending: todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
