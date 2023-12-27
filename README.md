# playwright
Execute test simple:
npx playwright test task3.spec.js

Execute Cucumber Test:
npx cucumber-js --tags "@task4" --exit


# testrail
testrail integration command to execute:
trcli -y -h "https://rizwanvd.testrail.io/" -u "rizwan.iqbal@venturedive.com" -p "L3QKRuQFd5qT4/ZQhCM9-iNgUnAiwP62cF6PLMmtx" --project "playwright" parse_junit -f "results.xml" --title "playwright automated tests" --case-fields "customer_automation_type:5"

# Report
To execute report run allue commands:
npm run allure:generate
npm run allure:open

