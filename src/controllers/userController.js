import User from '../models/User.js';

// Get all users (Admin only)
export const getAllUsers = async (req, res, next) => {
  try {
    const { accountType, page = 1, limit = 50 } = req.query;
    
    const filter = {};
    if (accountType) filter.accountType = accountType;

    const users = await User.find(filter)
      .select('-passwordHash')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await User.countDocuments(filter);

    res.json({
      success: true,
      data: {
        users,
        pagination: {
          total,
          page: parseInt(page),
          pages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get user by ID
export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-passwordHash');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.json({
      success: true,
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};

// Update user profile
export const updateUserProfile = async (req, res, next) => {
  try {
    const { name, avatarUrl } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.userId,
      { name, avatarUrl },
      { new: true, runValidators: true }
    ).select('-passwordHash');

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};

// Update user stats
export const updateUserStats = async (req, res, next) => {
  try {
    const { points, level, streak, totalChallengesCompleted, totalLessonsCompleted } = req.body;
    
    const updateData = {};
    if (points !== undefined) updateData.points = points;
    if (level !== undefined) updateData.level = level;
    if (streak !== undefined) updateData.streak = streak;
    if (totalChallengesCompleted !== undefined) updateData.totalChallengesCompleted = totalChallengesCompleted;
    if (totalLessonsCompleted !== undefined) updateData.totalLessonsCompleted = totalLessonsCompleted;

    const user = await User.findByIdAndUpdate(
      req.userId,
      updateData,
      { new: true, runValidators: true }
    ).select('-passwordHash');

    res.json({
      success: true,
      message: 'Stats updated successfully',
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};

// Delete user (Admin only)
export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
