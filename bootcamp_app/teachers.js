const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  host: 'localhost',
  password: 123,
  database: 'bootcampx'
});


const cohortName = process.argv[2];

pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
ORDER BY teacher;
`, [cohortName])
  .then(res => {
    res.rows.forEach(teacher => {
      console.log(`${teacher.cohort}: ${teacher.teacher}`);
    });
  
    pool.end();

  })
  .catch(err => console.error('query error', err.stack));
