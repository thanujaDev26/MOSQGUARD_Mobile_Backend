import Message from '../models/Message.js';
import NoteBook from '../models/Note_book.js'; // Assuming you have a NoteBook model defined similarly
import { Op } from 'sequelize';

export const getMonthlyReport = async (req, res) => {
  try {
    // Total cases from Message table
    const totalCases = await Message.count(
      // {
      // where: { district: districtName },
      // }
    );

    // Total investigations (status = SENT or COMPLETED)
    const totalInvestigations = await Message.count({
      where: {
        // district: districtName,
        status: {
          [Op.in]: ['SENT', 'COMPLETED'],
        },
      },
    });

    // Get all related message IDs from selected district
    const relatedMessageIds = await Message.findAll({
      attributes: ['id'],
      // where: { district: districtName },
    });

    const messageIds = relatedMessageIds.map((msg) => msg.id);

    // Deaths from NoteBook table (linked to messages from the selected district)
    const totalDeaths = await NoteBook.count({
      where: {
        // message_id: {
        //   [Op.in]: messageIds,
        // },
        isolation: 'death',
      },
    });

    // Recoveries
    const totalRecoveries = await NoteBook.count({
      where: {
        // message_id: {
        //   [Op.in]: messageIds,
        // },
        isolation: 'recovery',
      },
    });

    res.status(200).json({
      // district: districtName,
      totalCases,
      totalInvestigations,
      totalDeaths,
      totalRecoveries,
    });
  } catch (error) {
    console.error('Error generating monthly report:', error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
