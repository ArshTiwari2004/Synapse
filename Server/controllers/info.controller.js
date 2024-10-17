import User from '../models/user.model.js';
import SocialMedia from '../models/socialmedia.model.js'; 

export const userInfo = async (req, res) => {
    try {
        const { token } = req.cookies;
        console.log(token);

        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const socialMediaData = await SocialMedia.findOne({ user: req.userId });

        const { facebook = '', twitter = '', instagram = '', linkedin = '', google = '', snapchat = '' } = socialMediaData || {};

        res.json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            country: user.country,
            gender: user.gender,
            dateOfBirth: user.dateOfBirth,
            socials: {
                facebook,
                twitter,
                instagram,
                linkedin,
                google,
                snapchat,
            }  
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
