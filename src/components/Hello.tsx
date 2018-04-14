import * as React from 'react';
import axios from 'axios';

export interface HelloProps {
    compiler: string;
    framework: string;
}

// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}</h1>;

export class Question extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            score: 0,
            question:"",
            correctAnswer:"",
            incorrectAnswers:[],
            disable: false
        };
        
        this.NextButton = this.NextButton.bind(this);
    }

    GetQuestion(){
        axios.get('https://opentdb.com/api.php?amount=1&category=10&difficulty=easy&type=multiple').then((response: any) => {
            // console.log(response);
            let { results } = response.data
            this.setState({
                            question: results[0].question, 
                            correctAnswer: results[0].correct_answer ,
                            incorrectAnswers: results[0].incorrect_answers ,
                        });
        });
    }

    componentDidMount() {
        this.GetQuestion()
    }

    NextButton(){
        this.GetQuestion()
    }

    clickAnswer(e:any){
        let self = this.state;
        if ( this.state.correctAnswer == e.target.value ){
            this.setState({
                score: this.state.score + 1
            }, ()=>{
                alert("Correct")
            })
        }else{
            this.setState({disable: !this.state.disable},()=>{
                alert("Game OVER !!! :)");
            })
        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <p>
                    {
                        this.state.question
                    }
                </p>

            </div>
        );

    }
}
