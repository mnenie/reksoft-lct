import {gpt} from "../utils/index.js";
import PostModel from "../models/Post.js";

export const podborka = async (req, res) => {
    try {
        const text = req.body.text;
        const posts = await PostModel.find()
        .select('title text')
        .exec();
        const token = await gpt.getIamToken(process.env.YA_OAUTH_TOKEN)
        const response = await gpt.getTextCompletion(token.iamToken, posts, text);
        res.status(200).json(response.result.alternatives[0].message.text);
    } catch (err) {
        res.status(500).json({
            message: 'Нейронка не в духе',
          });
        console.log(err);
    }
}

export const pdfanalizer = async (req, res) => {
    try {
        const text = req.body.text;
        const pdf = req.body.pdf;
        const token = await gpt.getIamToken(process.env.YA_OAUTH_TOKEN)
        const response = await gpt.getTextPDF(token.iamToken, pdf, text);
        res.status(200).json(response.result.alternatives[0].message);
    } catch (err) {
        res.status(500).json({
            message: 'Нейронка не в духе',
          });
        console.log(err);
    }
}