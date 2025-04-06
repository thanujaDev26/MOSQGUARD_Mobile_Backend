import News from "../models/News.js";

export async function displayNews() {
    try {
        const newsList = await News.findAll({
            attributes: ['id', 'topic', 'message', 'publisher', 'picture', 'createdAt'], 
            order: [['createdAt', 'DESC']]
        });

        return newsList; 
    } catch (error) {
        console.error("Error retrieving news:", error);
        throw new Error("Failed to fetch news from the database");
    }
}
