Javascript-Objects
Data Structures
CourseInfo
Contains information about a course.

id: Numeric ID of the course (451).
name: Name of the course ("Introduction to JavaScript").
AssignmentGroup
Represents a group of assignments related to a course.

id: Numeric ID of the assignment group (12345).
name: Name of the assignment group ("Fundamentals of JavaScript").
course_id: ID of the associated course (451).
group_weight: Weight of the assignment group as a percentage (25%).
assignments: Array of assignments, each with an ID, name, due date, and points possible.
LearnerSubmissions
Array of objects representing submissions by learners.

Each object includes the learner ID, assignment ID, and submission details (submission date and score).
Utility Functions
validateCourseAssignment(course, ag)
Checks if the given assignment group belongs to the specified course. Throws an error if not.

isLate(submittedAt, dueAt)
Determines if a submission is late based on the submitted and due dates.

calculateScore(submission, assignment, latePenalty)
Calculates the score of a submission as a percentage of the maximum possible score. Applies a late penalty if applicable (10% deduction).

Main Function
getLearnerData(course, ag, submissions)
Validates the assignment group against the course.
Iterates over each assignment and submission.
Checks if a submission is late and calculates the score percentage.
Accumulates scores and weights for each learner.
Calculates the final average score for each learner.
Prints and returns the learners' average scores and details.
This structured markdown should help in presenting the information in a clear and organized manner.
