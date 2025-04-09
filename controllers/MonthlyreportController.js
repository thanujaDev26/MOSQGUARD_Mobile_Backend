import Message from '../models/Message.js';
import NoteBook from '../models/Note_book.js';
import { Op } from 'sequelize';

export const getMonthlyReport = async (req, res) => {
  try {
    const districtName = req.query.district;

    // Total cases from Message table
    const totalCases = await Message.count({
      where: { district: districtName },
    });

    // Total investigations (status = SENT or COMPLETED)
    const totalInvestigations = await Message.count({
      where: {
        district: districtName,
        status: {
          [Op.in]: ['SENT', 'COMPLETED'],
        },
      },
    });

    // Get all h544_ids from Message table in selected district
    const relatedMessages = await Message.findAll({
      attributes: ['h544_id'],
      where: {
        district: districtName,
        h544_id: {
          [Op.ne]: null, // Ensure h544_id is not null
        },
      },
    });

    const h544Ids = relatedMessages.map(msg => msg.h544_id);
    console.log('Filtered h544Ids (non-null):', h544Ids);  // Debug output
    console.log('h544Ids:', h544Ids);
    if (h544Ids.length === 0) {
      console.log('No h544_ids found for this district.');
    }

    // Count deaths using h544_id
    const totalDeaths = await NoteBook.count({
      where: {
        h544_id: {
          [Op.in]: h544Ids,
        },
        isolation: 'death',
      },
    });

    // Count recoveries using h544_id
    const totalRecoveries = await NoteBook.count({
      where: {
        h544_id: {
          [Op.in]: h544Ids,
        },
        isolation: 'recovery',
      },
    });
    console.log('Total Deaths:', totalDeaths);  // Debugging totalDeaths
    console.log('Total Recoveries:', totalRecoveries);  // Debugging totalRecoveries


    res.status(200).json({
      district: districtName,
      totalCases,
      totalInvestigations,
      totalDeaths,
      totalRecoveries,
    });
  } catch (error) {
    console.error('Error generating monthly report:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
