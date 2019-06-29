import React, { FunctionComponent } from 'react';

interface IAppProps {
	msg?: string;
}

export const App: FunctionComponent<IAppProps> = ({ msg }) => {
	return <div>Hello World {msg ? msg : 'Test'}!</div>;
};
