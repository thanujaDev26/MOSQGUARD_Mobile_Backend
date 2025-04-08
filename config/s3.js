import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
export const uploadToS3 = async (fileBuffer, fileName) => {
    const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileName,
        Body: fileBuffer,
        ContentType: "image/jpeg",
    };
    try {
        const uploadResponse = await s3.upload(params).promise();
        return uploadResponse.Location;
    } catch (error) {
        console.error("Error uploading image to S3:", error);
        throw new Error("Failed to upload image to S3");
    }
};
