// Provided data - Course Info
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// Provided data - Assignment Group.
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

/** find method returns the value of the first element in the array where predicate is true, and undefined otherwise.
 * find calls predicate once for each element of the array, in ascending order,
 * until it finds one where predicate returns true. If such an element is found,
 * find immediately returns that element value. Otherwise, find returns undefined. */

// Error Handling  - Late Submission
const isLate = (submittedAt, dueAt) => {
  const submittedDate = new Date(submittedAt);
  const dueDate = new Date(dueAt);

  try {
    if (isNan(submittedDate.getTime()) || isNan(dueDate.getTime())) {
    }
  } catch (error) {
    console.error("error:", error.message);
  }
  return submittedDate > dueDate;
};

// Error Handling - Late Penalty

const calculateScore = (submission, assignment, latePenalty) => {
  const maxScore = assignment.points_possible;
  let score = submission.score;
  if (latePenalty) {
    score = Math.max(score - maxScore * 0.1, 0);
  }
  return score / maxScore;
};

// /* Throw an error if AssignmentGroup and course_id are mismatched
//    letting user know that the input was invalid. */
// Similarly, what if points_possible is 0?
// What if a value we're expecting to be a number is instead a string?
// Use try/catch and other logic to handle these types of errors gracefully.
// Do not include assignments not yet due, in results or the average.
// Late submissions deduct 10 percent of the ***total points possible***
// Alter the data to test for edge cases, error handling, and other potential issues.*/

// // CourseInfo =
// //   { id: Number } == { course_id: Number }
// //     ? "Celebrate, you submitted!"
// //     : "Invalid input, please submit correct assignment";

const validateCourseAssignment = (course, ag) => {
  if (course.id !== ag.course_id) {
    throw new Error(
      "Invalid input, please submit within correct assignment group"
    );
  }
  console.log("Celebrate, you did it!");
};
