import SocialMedia from "../models/socialmedia.model.js";
import User from '../models/user.model.js';

export const addOrUpdateSocialMedia = async (req, res) => {
    try {
      const userId = req.userId; // Use req.userId instead of req.user._id
      const { platform, link } = req.body;
  
      // Check if the social media link already exists for this user
      let socialMedia = await SocialMedia.findOne({ user: userId });
  
      if (socialMedia) {
        // If the social media entry exists, update the link for the specific platform
        socialMedia[platform] = link;
        await socialMedia.save();
        return res.status(200).json({ message: 'Social media link updated successfully', socialMedia });
      } else {
        // Create new social media entry for the user
        socialMedia = new SocialMedia({ user: userId, [platform]: link });
        await socialMedia.save();
        return res.status(201).json({ message: 'Social media link added successfully', socialMedia });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error });
    }
  };