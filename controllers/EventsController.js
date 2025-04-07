import Event from '../models/Events.js';

export const getNews = async (req, res) => {
    try {
        let news = await Event.findAll()
        res.status(200).json({
            status: 'success',
            data: news
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

