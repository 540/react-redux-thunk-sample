import * as React from 'react';
import { StatelessComponent } from 'react';

const AboutPage: StatelessComponent<{}> = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This application uses React, Redux Router and a variety of other helpful libraries</p>
        </div>
    );
};

export default AboutPage;