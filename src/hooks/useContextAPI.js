import { useContext } from 'react';
import { ContextAPI } from '../contexts/ContextAPI';

export function useContextAPI() {
    const value =  useContext(ContextAPI)

    return value;
}