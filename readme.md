Assignment Tasks
Task 1 – Basic Login Test
Steps:
Navigate to: https://opensource-demo.orangehrmlive.com/web/index.php/auth/loginEnter Username: AdminEnter Password: admin123Click on the Login buttonExpected Result:
User should be redirected to the OrangeHRM dashboard.

Task 2 – Login and Logout Test
Steps:
Follow steps from Task 1.After successful login, click on the User Dropdown (top-right corner).Click on Logout.Expected Result:
User should be redirected back to the login page.

Task 3 – Add New User in Admin Section
Steps:
Perform login steps as in Task 1.Navigate to: Admin → User Management → UsersClick on Add button.Fill the form with the following (sample) details:User Role: ESSEmployee Name: Linda Anderson (choose from dropdown)Status: EnabledUsername: test.user01Password: Test@1234Confirm Password: Test@1234Click SaveExpected Result:
A new user should be added successfully and listed in the user table.

Task 4 – Add Job Title
Steps:
Perform login steps as in Task 1.Navigate to: Admin → Job → Job TitlesClick on AddFill the form with:Job Title: QA TesterJob Description: Responsible for manual and automated testing.Note: This is a test job title.Click SaveExpected Result:
New job title should appear in the job titles list.

Task 5 – Add Pay Grade
Steps:
Perform login steps as in Task 1.Navigate to: Admin → Job → Pay GradesClick on AddFill the form with:Name: Grade AClick SaveExpected Result:
New pay grade should be listed successfully.

Note - We are just understanding the structure through record and playback. We will have detailed discussion on each and every commands of Playwright.