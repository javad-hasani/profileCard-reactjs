# Profile Cards

This project comprises a React component that generates profile cards. Each card includes a profile image, name, job title, and social media links.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
Navigate to the project directory:
bash
Copy code

npm install
Usage
The ProfileCard component in cart.jsx renders profile cards using different profile photos and details.

Code Structure
cart.css: Contains styling for the profile cards.
assets/: Directory containing profile photos (bg-site.jpg, bg-site1.jpg, bg-site2.jpg).
Styling with Dark Theme and Font Customization
The styling has been enhanced with a dark theme. Additionally, custom fonts have been applied to improve readability. The selected fonts are 'Roboto' for the body text and 'Montserrat' for titles.

To modify the fonts or styling further, refer to the cart-dark.css file.

Animations
The profile cards now feature entrance animations. The cards use the fadeInUp animation for a smooth appearance. The title and description also include animations, with fadeInLeft and fadeInRight respectively.

How to Use
The ProfileCard component generates three cards with distinct profile information. Each card includes a profile image, name, job title, and social media links for Instagram, LinkedIn, and Twitter.

Modifying the Cards
To modify or add new profile cards:

Update the profile photos in the assets/ directory.
Edit the ProfileCard component in cart.jsx to change the profile information, including name, job title, and social media links.
Additional Notes
Ensure proper dependencies are installed for FontAwesome icon usage.
Customize the styling in cart-dark.css as needed.
![Profile Cards](./src/assets/profile%20card.PNG)
