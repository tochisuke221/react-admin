// import fakeRestDataProvider from "ra-data-fakerest";
// import data from "./data.json";

/**
 * 
 * {posts: Array(12), comments: Array(11)}
 */
// export const dataProvider = fakeRestDataProvider(data, true);


import jsonServerProvider from 'ra-data-json-server';

export const dataProvider = jsonServerProvider(
    import.meta.env.VITE_JSON_SERVER_URL
);
