// Gemini AI is currently disabled because no API key is configured.

const generateWorkoutRecommendation = async (age, fitnessGoal, experience) => {
  return `For your ${fitnessGoal} goal and ${experience} experience level, start with a simple workout routine suitable for your age (${age}). Focus on consistency, proper form, warm-up, and gradual progress.`;
};

const generateFitnessInsights = async (
  totalWorkouts,
  averageDuration,
  totalCaloriesBurned
) => {
  return `You have completed ${totalWorkouts} workouts with an average duration of ${averageDuration} minutes and burned approximately ${totalCaloriesBurned} kcal. Continue consistently and gradually improve your workout duration and intensity.`;
};

module.exports = {
  generateWorkoutRecommendation,
  generateFitnessInsights,
};