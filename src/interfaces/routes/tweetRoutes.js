import express from 'express';
import tweetController from '../controllers/tweetController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, tweetController.postTweet);
router.get('/:userId/timeline', tweetController.getTimeline);

export default router;
