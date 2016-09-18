# [![Monitaure logo](https://monitaure.io/images/logo-black.svg)](https://monitaure.io)

[![Codacy Badge](https://api.codacy.com/project/badge/grade/f3d8e262de834aa9a6e3a5bb36aa54b2)](https://www.codacy.com/app/bertrandjun/Monitaure)
[![Dependency Status](https://david-dm.org/Bertrand31/Monitaure/status.svg)](https://david-dm.org/Bertrand31/Monitaure/)
[![Travis build status](https://travis-ci.org/Bertrand31/Monitaure.svg)](https://travis-ci.org/Bertrand31/Monitaure/)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/)
[![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://github.com/Bertrand31/Monitaure/blob/master/LICENSE)

Monitaure is an online service aiming to provide SysAdmins with a clean, lightweight and quick to configure monitoring dashboard.
The application does not need any client-side installation or configuration.

[![Monitaure main dashboard](https://monitaure.io/images/dashboard-sample.png)](https://monitaure.io)

## Why it's awesome

From a technical standpoint, here are some of the key aspects of Monitaure:

* Server-side
    * NodeJS application using MongoDB for storage and Redis for sessions handling ;
    * Hosted on a dedicated server running Archlinux ;
    * Sitting behind an NGINX reverse-proxy with smart caching mechanisms and many performance & security tweaks ;
    * [IPV6-ready](http://ready.chair6.net/?url=https%3A%2F%2Fmonitaure.io).
* Front-end
    * React to manage user interface ;
    * Redux to manage application state ;
    * React-Router to handle front-end routing ;
    * A Service Worker to allow the app to be installed on phones and to work offline ;
    * JSX and some Jade for HTML ;
    * SASS for CSS ;
    * Babel to transpile ES6 to older Javascript ;
    * Webpack to bundle everything up.
* Security
    * Served over HTTP/2 and HTTPS ([with rock-solid SSL security](https://www.ssllabs.com/ssltest/analyze.html?d=monitaure.io&s=2001%3a41d0%3ae%3a59a%3a0%3a0%3a0%3a1&hideResults=on)) ;
    * CSRF tokens ;
    * HttpOnly, encrypted session cookies ;
    * Content-Security-Policy, Strict-Transport-Security, X-Frame-Options, X-XSS-Protection, X-Content-Type-Options headers.
* Misc
    * Sendgrid to send transactionnal emails (account confirmation, alerts, etc.) ;
    * Travis CI for build testing ;
    * ESLint and Codacy for code style and quality review ;
    * Heap Analytics for retroactive interaction statistics.

Concerning the graphical aspect of the application, you can find all the goodies [here on Dribble](https://dribbble.com/guillaumeparra/tags/monitaure).

## Project purpose

While it is a useful service anyone can use, it is also meant -as a team project- to showcase our skills.

The team is composed of the following people:
* [Bertrand Junqua](https://awebsiteabout.me) for both the front-end and back-end developments, and server administration ;
* [Guillaume Parra](https://whyyouwillhire.me) who takes care of the UI & UX ;
* [Quentin Bucciarelli](https://www.behance.net/qbucciarelli) who laid a hand for writing some of the CSS and the email templates.

## Bonus: Error pages

* [403](https://monitaure.io/403)
* [404](https://monitaure.io/404)
* [500](https://monitaure.io/500)

## Certifications

<p align="center">
    <img align="center" src="http://forthebadge.com/images/featured/featured-gluten-free.svg" alt="Gluten-free certification" />
    <img align="center" src="http://forthebadge.com/images/badges/built-by-hipsters.svg" />
</p>
