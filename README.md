# Clinician-View-React

## Quick Start Guide

Clone the repository and install the dependencies:

```bash
git clone https://github.com/ricksteam/Clinician-View-React.git
cd Clinician-View-React
npm install | npm i
```

## Starting Development

- Start the app in the `dev` environment:

```bash
npm run start | npm start
```

## Packaging for Production

- To package apps for the local platform:

```bash
npm run package
```

# SETUP

**local host**

- `SERVER_IP` in AxiosContext.tsx must be set to "http://localhost:5000", makes it so Axios can connect to 'clinician-view-server-node'
- `SERVER_IP` in SocketContext.tsx must be set to "http://localhost:1212", makes it so Socket.IO can connect to 'clinician-view-server-node'

# Screens

- Dashboard Screen

```
Displays the dashboard (aka home page) when the user is logged in
In this case it contains the session screen
```

- Guest Screen

```
If you login as guest (button on the login screen) it takes you to
this page (currently not functional)
```

- Login Screen

```
Let's you login to the application (application loads into this screen)
```

- Session Screen

```
The list of all sessions you (and other clinicans) created. Also,
contains the modal to create a new session
```

#

**Components**

- Patient Card

```
Once joined a session, a patient card is created for each unity
instance connected to that session (contains name, controls, etc)
```

- Private Route

```
A custom component using React Router library that gatekeeps the
sections of the application and restricts non-logged-in users by
checking the User context to see if a user is logged in
```

- Session Card

```
Similar to the patient card lists all the sessions when inside the
dashboard screen (and therefore the session screen). Contains
join button, name of session, etc
```

- Session Grid

```
The tab control for session you created and sessions other
clinican created that the wraps the list of session cards.
```

#

**Context**

- Context Group

```
Wraps the following context into 1 component for cleanliness
```

- Axios Context

```
- Controls the RESTful API (Aka POST and GET calls to the server)
```

- Session Context

```
Manages current session the clinican view is joined
and list of sessions
```

- Socket Context

```
Controls socket (TCP stream) connection with unity through connected
session. On join session, server adds both clients to a socket.io room
```

- User Context

```
Handles current logged in user
```

# Release Notes:

### 10/19/2023
* Connected to new student server

### 11/02/2023
* Added clinician controls for the new balloon game settings

### 11/16/2023
Clinician Side:
* Implemented Settings:
* Game selection
* Game mode selection (relaxed, normal)
* Target goal selection (left hand, right hand, or both)
* Powerup frequencies
* Toggle on/off the automatic spawner
* Manual spawning of a balloon
* Spawn Pattern choice (Alternating, Concurrent, Random)
* Added a slider for the "Random" spawn pattern so the clinician can control the spawn probability
* Speed of balloons
* Positioning
* Dart spawns
* Balloon spawns

#

## Maintainers

- [Eduardo Montoya](https://github.com/edmontoya1)
