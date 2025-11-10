import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Generate JWT token
const generateToken = (userId, accountType) => {
  return jwt.sign(
    { userId, accountType },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

// Sign Up
export const signUp = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    // Validate input
    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: 'Email, password, and name are required',
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Email already registered',
      });
    }

    // Create new user
    const user = new User({
      email: email.toLowerCase(),
      name,
      passwordHash: password, // Will be hashed by pre-save hook
      accountType: 'user',
    });

    await user.save();

    // Generate token
    const token = generateToken(user._id, user.accountType);

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        token,
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          accountType: user.accountType,
          points: user.points,
          level: user.level,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

// Sign In
export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required',
      });
    }

    // Find user
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    // Update last login
    user.lastLoginAt = new Date();
    await user.save();

    // Generate token
    const token = generateToken(user._id, user.accountType);

    res.json({
      success: true,
      message: 'Sign in successful',
      data: {
        token,
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          accountType: user.accountType,
          points: user.points,
          level: user.level,
          streak: user.streak,
          totalChallengesCompleted: user.totalChallengesCompleted,
          totalLessonsCompleted: user.totalLessonsCompleted,
          avatarUrl: user.avatarUrl,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get Current User
export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.json({
      success: true,
      data: {
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          accountType: user.accountType,
          points: user.points,
          level: user.level,
          streak: user.streak,
          totalChallengesCompleted: user.totalChallengesCompleted,
          totalLessonsCompleted: user.totalLessonsCompleted,
          avatarUrl: user.avatarUrl,
          createdAt: user.createdAt,
          lastLoginAt: user.lastLoginAt,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
