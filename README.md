# Character Roleplay Website

This is a website where users will be able to log in to pre-made accounts, access their roleplaying characters, and add, update, or delete them as they wish. They can also perform dice rolls at their own leisure.

## Setup 

Postgres is necessary for this project. Make sure you have downloaded Postgres before using this application.

Clone the repository to a folder of your choosing. In the character-roleplay-server folder, there is an application.yml. It includes an url for the Postgres database, along with a username and password.

![image](https://github.com/SaadHaiderGit/CharacterRoleplayWebsite/assets/118562950/aa6da21a-6f2d-4082-a2a9-062d0e1df656)

Create a matching username and password in order for the backend server to access Postgres, then create a new database called 'character'. If you have a pre-existing database you want to use instead, you can change the application.yml's URL to `jdbc:postgresql://localhost:5432/{name_goes_here}`. You can also change the application.yml's values for username and password to a pre-existing combination you have saved in your Postgres application, if you so wish.

Finally, set up the node_modules if needed. Simply open the character-roleplay-folder in a command terminal of your choosing, then type `npm install`.

## Running the Program

Start the backend server by going to the character-roleplay-server\src\main\java\com\example\characterroleplayserver folder, then access and run the CharacterRoleplayServerApplication.java file. This will activate the server and its corresponding database.

![image](https://github.com/SaadHaiderGit/CharacterRoleplayWebsite/assets/118562950/af786383-3bdb-4132-8d99-01a87eec235f)

Then go the character-roleplay-website folder. Open this folder in a command terminal and type `ng serve`, then navigate to `http://localhost:4200/` to see the website in action.

## Accounts

Currently the website lacks the ability to create a new account. A few pre-made accounts from the following list can be accessed:
1) `Saad (password: 12345)`
2) `Hamza (password: 67890)`
3) `Billy (password: FriendlyFriend)`
4) `Empty (password: NoArgs)`

If you wish, you can add more accounts in the CharacterRoleplayServerApplication.java file. 

## Other Notes

The website currently does not save user sessions; anytime you reload the page, you will be redirected back to the login page.

The database server has a few pre-filled values for some accounts. It persists across sessions, but restarting the server will reset the database back to its preset values.
