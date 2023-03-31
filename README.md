# MSS Nexus Robot Framework Testing
<sup>*(version 0.0.1)*</sup>

## Overview
<p>MSS Nexus (MYTT) is a Human Resource portal used by ST Engineering Staff Employees.
</p>

<p>The site allows Employees to clock and submit their monthly timesheet.
In turn, Internal & External Managers manage the timesheet submissions done by Employees via the site.
</p>

<p><code>Robot Framework</code> and <code>Selenium Library</code> will be used for conducting automated testing to aid in the development of the website.<br>
Google Chrome is the default browser used for testing.
</p>

To be familiar with MYTT, please refer to the [User Guide](https://drive.google.com/drive/folders/1TBBtnxIfS6XZ1u74-yhtmgAEzEcs1Ahi) and 
the [Manual Test Scripts](https://drive.google.com/drive/folders/1Gd_5QhOcaOBRZqhGJR9XPR26bEqKgA61).

The URLs to the different environments can be accessed here:
* [Dev web link](https://mytt-dev.mss-nexus.com/index.html)
* [QA web link](https://mytt-qamytt.beta.mss-nexus.com/index)
* [Production web link](https://mytt.connect.mss-nexus.com/index.html)

## Prerequsite
<p>Complete the instructions below to get started:
</p>

1. Create gitea account and get access to [team-playground](https://gitea.sgdevlab.duckdns.org/mssnexus/team-playground) repository.
Please approach <code>Olivia</code> for assistance.
2. Download and install [Visual Studio Code](https://code.visualstudio.com/) (VSC).
3. Download and install [Git Bash](https://www.educative.io/answers/how-to-install-git-bash-in-windows).
4. Download and install [TortoiseGit](https://tortoisegit.org/).
5. Download and install ChromeDriver ([see below](https://github.com/waihouC/NodejsAssignment/new/main?readme=1#setup)).

## Setup
<p>Complete the following steps to set up the testing environment on a local machine:
</p>

1. Clone [team-playground](https://gitea.sgdevlab.duckdns.org/mssnexus/team-playground) repository to desired directory.
    * Open Windows Explorer and navigate to desired directory. Right-click and select "Git Clone...".
    * Enter "https://gitea.sgdevlab.duckdns.org/mssnexus/team-playground.git" in **URL** textbox and click **OK** button.

2. Navigate to **robotframework** folder and delete **python3** folder (if any).

3. Open **robotframework** project in VSC.

4. Open Git Bash terminal in VSC.
    * Press and hold Ctrl + ` to open the terminal.
    * Click on the + icon in the terminal window, then select Git Bash.

5. In the terminal, navigate to **robotframework** folder path.

6. Run "./setup_robot_v2.sh" in the terminal.

7. Install ChromeDriver. (Guide: https://www.browserstack.com/guide/run-selenium-tests-using-selenium-chromedriver)

## Resources
The following links offer useful information on <code>Robot Framework</code>, <code>Selenium Library</code> and Python related scripts.
* https://robotframework.org
* https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#introduction
* https://docs.python.org/3/library/calendar.html
  
The following links provide documentations to commonly used keywords used throughout Robot test scripts.
* https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#library-documentation-top
* https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#library-documentation-top
* https://robotframework.org/robotframework/latest/libraries/DateTime.html#library-documentation-top

## Testing Suites

### Folder Structure
| Folder/SubFolder             | Function                                                                                                                                |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| passwords                    | Holds account passwords for startup bat file                                                                                            |
| resources                    | Holds resource files that contain test data, xpath variables and keywords                                                               |
| utils                        | Holds Python scripts used by Robot test scripts                                                                                         |
| robot_projects               |                                                                                                                                         |
| - SUITE-001_LOGIN            | Test suite for all user login functions, forget password functions and validations                                                      |
| - SUITE-002_ADMIN            | Test suite for all Admin User functions                                                                                                 |
| - SUITE-003_EMP              | Test suite for Employee User regarding site navigation, single day timesheet draft creation, internal and external timesheet submission |
| - SUITE-004_MGR              | Test suite for Internal Manager User regarding approval and rejection of internal and external timesheets, and dashboard verification   |
| - SUITE-005_EXT              | Test suite for External Manager User regarding approval and rejection of external timesheet, and dashboard verification                 |
| - SUITE_SIMPLE_FLOW          | 1. Admin User creates Project and Purchase Order                                                                                        |
|                              | 2. Employee User submits Internal and External Timesheets                                                                               |
|                              | 3. Internal Manager User approves Internal and External Timesheets                                                                      |
|                              | 4. External Manager User approves External Timesheet                                                                                    |
|                              | 5. Verify External Manager User dashboard                                                                                               |
| - SUITE_EXPANDED_SIMPLE_FLOW | TBD                                                                                                                                     |
			
### Running a test using bat file
1. Open CMD terminal in VSC.

2. In the terminal, navigate to **robotframework** folder path.

3. Run "run_tests_for_browser.bat" in the terminal.<br>
	 * **Note:**
		* Ensure TARGET_URL field in the bat file is the correct URL.
		* Ensure password text file paths in the bat file are correct.
		* Ensure robot test path in the bat file is correct.<br>
		Example:<br>
			* robot -d .\logs\%TEST_DATETIME% --variable RESOURCE_DIR:%~dp0resources --variable UTIL_DIR:%~dp0utils %TEST_DIR%\SUITE-001_LOGIN\*<br>
				=> runs all robot test scripts in SUITE-001_LOGIN folder
			* robot -d .\logs\%TEST_DATETIME% --variable RESOURCE_DIR:%~dp0resources --variable UTIL_DIR:%~dp0utils %TEST_DIR%\SUITE-001_LOGIN\TC-001_LOGIN_EMP.robot<br>
				=> runs only TC-001_LOGIN_EMP.robot in SUITE-001_LOGIN folder
