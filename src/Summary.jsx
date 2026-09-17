/**
 *  Components
 * JSX
 * Props
 * State
 * Events
 * [Conditional Rendering]
 * 
 */

/**
 * 1. Api : url: https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json
 * 
 */


/**
 * 1. just write a simple fetch with json conversion.
 * 2. Wrap the data loading component under suspense
 */

// fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
//     .then(res => res.json())
//     .then(data => console.log(data));



// const loadData = async() => {
//     const res = await fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json');
//     const data = res.json();
//     return data;
// }

/**
 *  1. event trigger 
 *  2. state 
 *  3. Data load from API 
 *  4. loop through to display data
 *  5. why we use key prop
 * 
 */