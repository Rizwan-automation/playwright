const { db } = require('../utils/database');
const { default: test } = require("@playwright/test");

test.skip('Database Test', async ({ page }) => {

    // const [rows, fields] = await connection.execute('SELECT * FROM your_table_name');
    db.query('SELECT * FROM automation_report', async (error, results, fields) => {
        if (error) throw error;
        // Use the results of the query in your test
        // For example, check if the number of rows is as expected
        expect(results.length).toBe(expectedNumberOfRows);
        // You can also use the data to interact with your web application
        // For example, use a value from the database as input for a form
        const valueFromDatabase = results[0].yourColumnName;
        console.log("Value from database : " + valueFromDatabase)
        // await page.fill('input[name="yourInputName"]', valueFromDatabase);
    })
})

// Close the database connection after all tests are done
test.afterAll(async () => {
    db.end();
    });