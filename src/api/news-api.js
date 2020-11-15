import axios from 'axios';

export const baseParams = {
	apiKey: '333c6550c2f94265978a490a46441c10'
}

export default axios.create({
	baseURL: 'http://newsapi.org/v2'
})