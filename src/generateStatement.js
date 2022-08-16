import axios from 'axios'


export default function generateStatement () {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    };

    axios.get('https://icanhazdadjoke.com', config).then(res => {
        document.getElementById('statement').textContent = res.data.joke;
    })
};