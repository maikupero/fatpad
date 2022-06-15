--  get the employee with the second highest salary from a table. 

SELECT
    MAX(salary)
FROM
    SALARY_TABLE
WHERE salary < (
    SELECT
        MAX(salary)
    FROM
        SALARY_TABLE
)

--  OR
SELECT 
    *
FROM
    SALARY_TABLE
ORDER BY
    salary
LIMIT 1 OFFSET 1