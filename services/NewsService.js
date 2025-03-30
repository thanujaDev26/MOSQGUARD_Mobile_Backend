import News from "../models/News.js";

export async function displayNews() {
    try {
        // Retrieve all news records from the database
        const newsList = await News.findAll({
            attributes: ['id', 'topic', 'message', 'publisher', 'picture', 'createdAt'], // Select specific fields
            order: [['createdAt', 'DESC']] // Sort by newest first
        });

        return newsList; // Return the list of news records
    } catch (error) {
        console.error("Error retrieving news:", error);
        throw new Error("Failed to fetch news from the database");
    }
}
