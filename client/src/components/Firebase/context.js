import React from 'react';

const FirebaseContext = React.createContext();

// Higher order component to wrap injection of firebase context
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;