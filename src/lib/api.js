export function get(url) {
    return fetch(url, {
        headers: { 
            method: 'GET',
            mode: 'cors',
        }
    }).then((response) => response.json())
    // .catch(() => {}) error handling would happen here;
}

export function getRandomQuestion() {
    return get('http://jservice.io/api/random');
}