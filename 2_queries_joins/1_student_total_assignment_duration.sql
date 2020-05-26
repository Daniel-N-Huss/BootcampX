SELECT sum(duration) AS total_duration
FROM students
JOIN assignment_submissions on students.id = student_id
WHERE name = 'Ibrahim Schimmel';