import * as React from 'react';
import axios from 'axios';

export interface HelloProps {
    compiler: string;
    framework: string;
}

// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}</h1>;

export class Question extends React.Component<any> {
    constructor(props: any) {
        super(props);

        this.state ={
            questions: []
        };
    }

    componentDidMount() {
        axios.get('https://opentdb.com/api.php?amount=1&category=10&difficulty=easy&type=multiple').then(response => {
            // console.log(response);
            this.setState({questions: response.data});
        });
    }

    render() {
        console.log(this.state);
        return <h1>sadasd</h1>;
    }
}
