// Provided data - Course Info
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// Provided data - Assignment Group
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// Provided data - Learner Submissions
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

// Function to check if a submission is late
const isLate = (submittedAt, dueAt) => {
  const submittedDate = new Date(submittedAt);
  const dueDate = new Date(dueAt);

  return submittedDate > dueDate;
};

// Function to calculate score based on late penalty
const calculateScore = (submission, assignment, latePenalty) => {
  const maxScore = assignment.points_possible;
  let score = submission.score;

  if (latePenalty) {
    score = Math.max(score - maxScore * 0.1, 0);
  }

  return score / maxScore;
};

// Function to validate course assignment
const validateCourseAssignment = (course, ag) => {
  if (course.id !== ag.course_id) {
    throw new Error(
      "Invalid input, please submit within correct assignment group"
    );
  }
  console.log("Assignment group validated successfully!");
};

// Function to get learner data and calculate average scores
function getLearnerData(course, ag, studentSubmission) {
  validateCourseAssignment(course, ag);

  const learners = {};

  for (let i = 0; i < studentSubmission.length; i++) {
    const submission = studentSubmission[i];
    const assignment = ag.assignments.find(
      (a) => a.id === submission.assignment_id
    );

    if (assignment && new Date() >= new Date(assignment.due_at)) {
      const learnerId = submission.learner_id;

      if (!learners[learnerId]) {
        learners[learnerId] = { id: learnerId, finalScore: 0, totalWeight: 0 };
      }

      const late = isLate(
        submission.submission.submitted_at,
        assignment.due_at
      );
      const adjustedScore =
        calculateScore(submission.submission, assignment, late) *
        ag.group_weight;

      learners[learnerId].finalScore += adjustedScore;
      learners[learnerId].totalWeight += ag.group_weight;
    }
  }

  const learnerAverages = [];

  for (const learnerId in learners) {
    const learner = learners[learnerId];
    const averageScore =
      learner.totalWeight > 0 ? learner.finalScore / learner.totalWeight : 0;

    console.log(
      `Learner ID: ${learner.id} - Average Score: ${averageScore.toFixed(2)}`
    );
    learnerAverages.push({ id: learner.id, averageScore: averageScore });
  }

  return learnerAverages;
}

// Get and display learner data
const learnerData = getLearnerData(
  CourseInfo,
  AssignmentGroup,
  LearnerSubmissions
);
console.log(learnerData);

// Validate course assignment
try {
  validateCourseAssignment(CourseInfo, AssignmentGroup);
} catch (error) {
  console.error(error.message);
}
