import SocialMedia from "../models/socialmedia.model.js";
import User from '../models/user.model.js';

export const addOrUpdateSocialMedia = async (req, res) => {
    try {
      const userId = req.userId;
      const { platform, link } = req.body;
      let socialMedia = await SocialMedia.findOne({ user: userId });
  
      if (socialMedia) {
        socialMedia[platform] = link;
        await socialMedia.save();
        return res.status(200).json({ message: 'Social media link updated successfully', socialMedia });
      } else {
        socialMedia = new SocialMedia({ user: userId, [platform]: link });
        await socialMedia.save();
        return res.status(201).json({ message: 'Social media link added successfully', socialMedia });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error });
    }
  };