import React from 'react';

import avatarPath from '../assets/avatar.jpg';

const CV = () => {
    return <>
        <header>
            <img src={avatarPath} alt="kiryl's face" />
            <div>
                <h1>Kiryl Arlouski</h1>
                <h2>Senior Front-end Developer</h2>
            </div>
        </header>
        <main>
            <article>
                <h3 id="contacts-label">
                    Contacts:
                </h3>
                <ul aria-labelledby="contacts-label">
                    <li>
                        <a href="mailto:k.smolniy@gmail.com">k.smolniy@gmail.com</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kiryl-arlouski/" target="__blank">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://t.me/ksmolniy" target="__blank">Telegram</a>
                    </li>
                </ul>
            </article>
            <article>
                <h3 id="skills-label">Skills:</h3>
                <ul aria-labelledby="skills-label">
                    <li>
                        JavaScript
                    </li>
                </ul>
            </article>
        </main>
    </>
}

export default CV;