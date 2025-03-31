# Mario Mailbox App

A React-based application inspired by a Mario theme, allowing users to manage mailboxes and send letters. Built with React Router for navigation and styled with custom CSS to match a playful, Mario-inspired aesthetic.

### Mailbox - demo
![Mailbox-gif](src/assets/mailbox.gif)

## Features

- **View Mailboxes**: See a list of all mailboxes with details like box number, owner, and size.
- **Create Mailboxes**: Add new mailboxes with a form.
- **Send Letters**: Compose and send letters to specific mailboxes.
- **View Letters**: Check all letters sent to a particular mailbox.
- **Delete Mailboxes**: Remove a mailbox when no longer needed.
- **Mario Theme**: Custom CSS styling with Mario-inspired colors and layout.


## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

## Usage
- **Home Page**: Start at the root (`/`) to see a welcome message.
- **Mailboxes**: Navigate to `/mailboxes` to view all mailboxes.
- **New Mailbox**: Go to `/mailboxes/new` to add a mailbox.
- **New Letter**: Visit `/new-letter` to send a letter to a mailbox.
- **Mailbox Details**: Click a mailbox or go to `/mailbox/:mailboxId` to see its details and letters.
- **Delete Mailbox**: Navigate to `/mailbox/:mailboxId/delete` to remove a mailbox.

## Technologies Used
- **React**: Frontend library for building the UI.
- **React Router**: For client-side routing.
- **CSS**: Custom styles with a Mario theme.
- **Express (Planned)**: Backend for handling mailbox and letter data storage.
- **MongoDB (Planned)**: Database for persisting mailbox and letter data.

## Future Enhancements
- Add authentication for mailbox owners.
- Implement real-time updates using WebSockets.
- Allow users to customize mailbox colors and themes.
- Mobile responsiveness improvements.

