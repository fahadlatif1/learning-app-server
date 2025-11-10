import Challenge from '../models/Challenge.js';

// Get all challenges
export const getAllChallenges = async (req, res, next) => {
  try {
    const { difficulty, category, isActive } = req.query;
    
    const filter = {};
    if (difficulty) filter.difficulty = difficulty;
    if (category) filter.category = category;
    if (isActive !== undefined) filter.isActive = isActive === 'true';

    const challenges = await Challenge.find(filter).sort({ level: 1, createdAt: -1 });

    res.json({
      success: true,
      data: { challenges },
    });
  } catch (error) {
    next(error);
  }
};

// Get challenge by ID
export const getChallengeById = async (req, res, next) => {
  try {
    const challenge = await Challenge.findById(req.params.id);

    if (!challenge) {
      return res.status(404).json({
        success: false,
        message: 'Challenge not found',
      });
    }

    res.json({
      success: true,
      data: { challenge },
    });
  } catch (error) {
    next(error);
  }
};

// Create challenge (Admin only)
export const createChallenge = async (req, res, next) => {
  try {
    const challenge = new Challenge(req.body);
    await challenge.save();

    res.status(201).json({
      success: true,
      message: 'Challenge created successfully',
      data: { challenge },
    });
  } catch (error) {
    next(error);
  }
};

// Update challenge (Admin only)
export const updateChallenge = async (req, res, next) => {
  try {
    const challenge = await Challenge.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!challenge) {
      return res.status(404).json({
        success: false,
        message: 'Challenge not found',
      });
    }

    res.json({
      success: true,
      message: 'Challenge updated successfully',
      data: { challenge },
    });
  } catch (error) {
    next(error);
  }
};

// Delete challenge (Admin only)
export const deleteChallenge = async (req, res, next) => {
  try {
    const challenge = await Challenge.findByIdAndDelete(req.params.id);

    if (!challenge) {
      return res.status(404).json({
        success: false,
        message: 'Challenge not found',
      });
    }

    res.json({
      success: true,
      message: 'Challenge deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
