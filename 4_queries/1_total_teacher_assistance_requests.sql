SELECT teachers.name AS teacher, count(assistance_requests.*)
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teacher