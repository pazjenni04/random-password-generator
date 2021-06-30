# random-password-generator
The objective of this webpage is to assist users with generating secure and unique passwords everytime.  By following the instructions in the prompted banners that are presented to the user, the user will respond to each prompted banner in order confirm which criteria they prefer the password to include.

List of technologies used: Javascript, CSS, HTML

When the user first clicks on the "Generate password" button, the first prompt will appear and will instruct the user to enter the character length the user prefers their password to be.  Once the user confirms the remainder of the prompts to follow, their final password should be the length they entered when prompted this specific question.  

[The following image depicts the button that the user will press in order to proceed to the following step] - 

![Getting Started](https://raw.githubusercontent.com/pazjenni04/random-password-generator/main/images/generate-button.jpg)

Once the user has clicked on the "Generate Password" button, they will then be prompted to enter a number between 8 - 128, which will reflect the number of characters that the password will contain.

![The following image will show the prompt window that will request for the length of the password.](https://raw.githubusercontent.com/pazjenni04/random-password-generator/main/images/character-length.PNG)

If the user attempts to request a password length outside of the depicted range (between 8 to 128 characters), another banner will prompt the user to try again and enter a number between the assigned ranges 8 to 128 characters.

![The following image shows the window that will prompt if user does not maintain within the range.](https://raw.githubusercontent.com/pazjenni04/random-password-generator/main/images/try-again-error.png)

Once the user has entered their preferred password length, they will then be asked a series of questions that will customize the users future generated password.  The first question that will prompt is whether or not the user prefers to include uppercase letters within their password.  If the user clicks "Ok" then uppercase letters will be included in the final password generated.

![The following image shows the window prompted for the user to include upper case letters or not.](https://raw.githubusercontent.com/pazjenni04/random-password-generator/main/images/upper-case-prompt.PNG)

If the user clicks "Cancel", then the code is prompted to not include uppercase letters within the generated password.

Once confirmed, the next banner will prompt the user to choose to add symbols into their password or not.  If the user proceeds with clicking "Ok", then the final password generated will include random symbols from a list of approved symbols.

![The following image shows the window prompted for the user to include a symbol in their generate password or not.](https://raw.githubusercontent.com/pazjenni04/random-password-generator/main/images/symbol-prompt.PNG)

If the user clicks on "Cancel" then the final password will not include a symbol within the generated result.

Once the user chooses whether or not to add symbols into their future password, another window will prompt the user to choose whether or not to include numbers within their generated password.  If the user clicks "Ok" then the future generated password will incorporate numbers within the password.  If the user clicks "Cancel" then the password will not include numbers once generated.

![The following image shows the window prompted for the user to include numbers within their generated password or not.](https://raw.githubusercontent.com/pazjenni04/random-password-generator/main/images/number-prompt.PNG)

Finally, after the user chooses whether or not to include numbers the next banner will prompt the user if they are interested in adding lowercase letters within their future generated password or not.  If the user clicks "Ok" then the password will be generated to include lowercase letters, but if the user chooses to click on "Cancel" then the future generated password will not include lowercase letters.

![The following image shows the window prompted for the user to include numbers within their generated password or not.](https://raw.githubusercontent.com/pazjenni04/random-password-generator/main/images/lower-case-prompt.PNG)

After the user has answered all of the above prompted windows, then the final result should reflect the users' customizations every time.

![The following image shows an example of a generated password to include all customizations - uppercase letter, symbols, numbers, lowercase letters.](https://raw.githubusercontent.com/pazjenni04/random-password-generator/main/images/final-result.PNG)

If the user does not choose any of the criteria presented to them when prompted, the webpage will banner "You must choose at least one of the criteria's prompted in order to generate password.  Please try again."  The user will then have to proceed with having to re-click on the "Generate password" button in order to start over.

![The following image shows an example of the banner that will prompt if the user clicks cancel for all criteria options](https://raw.githubusercontent.com/pazjenni04/random-password-generator/main/images/must-choose-one.PNG)

Webpage link: https://pazjenni04.github.io/random-password-generator/
