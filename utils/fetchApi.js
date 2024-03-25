import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {

    const { data } = await axios.get((url), {
        headers : {
            'X-RapidAPI-Key': '22b6030b1amshffbe9f025527ce5p1ec10cjsn48268217ee75',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
    

} 
