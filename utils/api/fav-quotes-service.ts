import axios from 'axios'
import Constants from 'expo-constants';
import { Response } from '../types/api';
import { Quote } from '../../features/quotes/types';


const API_URL = `https://favqs.com/api`
const FAV_QUOTES_API_KEY = Constants.expoConfig?.extra?.FAV_QUOTES_API_KEY


class FavQuotesService {
  async getQuotes (): Promise<Quote[]> {
    const { data }: Response<{ quotes: Quote[] }> = await axios.get(`${API_URL}/quotes`,
    {
      headers: {
        Authorization: `Bearer ${FAV_QUOTES_API_KEY}`
      }
    })

    return data.quotes
  }
}

export default new FavQuotesService()