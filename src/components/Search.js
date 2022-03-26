import React from 'react'
import { MovieList } from './MovieList';

import {
    useQuery,
    QueryClient,
    QueryClientProvider
} from "https://cdn.skypack.dev/react-query@3";

const queryClient = new QueryClient();

export const Search = (props) => {

    return (
        <>
            <input type="search" />
            <QueryClientProvider client={queryClient}>
                <MovieList />
            </QueryClientProvider>
        </>
    )
}
