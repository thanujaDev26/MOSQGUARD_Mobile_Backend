import { displayNews } from '../services/NewsService.js';

export const getNews = async (req, res) => {
    try {
        const news = await displayNews();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
