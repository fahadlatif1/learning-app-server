import Lesson from '../models/Lesson.js';

// Get all lessons
export const getAllLessons = async (req, res, next) => {
  try {
    const { difficulty, category, isActive } = req.query;
    
    const filter = {};
    if (difficulty) filter.difficulty = difficulty;
    if (category) filter.category = category;
    if (isActive !== undefined) filter.isActive = isActive === 'true';

    const lessons = await Lesson.find(filter).sort({ order: 1, createdAt: -1 });

    res.json({
      success: true,
      data: { lessons },
    });
  } catch (error) {
    next(error);
  }
};

// Get lesson by ID
export const getLessonById = async (req, res, next) => {
  try {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: 'Lesson not found',
      });
    }

    res.json({
      success: true,
      data: { lesson },
    });
  } catch (error) {
    next(error);
  }
};

// Create lesson (Admin only)
export const createLesson = async (req, res, next) => {
  try {
    const lesson = new Lesson(req.body);
    await lesson.save();

    res.status(201).json({
      success: true,
      message: 'Lesson created successfully',
      data: { lesson },
    });
  } catch (error) {
    next(error);
  }
};

// Update lesson (Admin only)
export const updateLesson = async (req, res, next) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: 'Lesson not found',
      });
    }

    res.json({
      success: true,
      message: 'Lesson updated successfully',
      data: { lesson },
    });
  } catch (error) {
    next(error);
  }
};

// Delete lesson (Admin only)
export const deleteLesson = async (req, res, next) => {
  try {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: 'Lesson not found',
      });
    }

    res.json({
      success: true,
      message: 'Lesson deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
