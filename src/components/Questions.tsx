import React, {Dispatch, SetStateAction, useState} from "react";
import {Icon, Accordion, Container, Segment} from "semantic-ui-react";

interface Question {
    index: number;
    activeIndex: number;
    setIndex: Dispatch<SetStateAction<number>>;
    question: string;
    answer: any;
}

const handleClick = (index: number, activeIndex: number, setIndex: Dispatch<SetStateAction<number>>) => {
    if (index === activeIndex) {
        setIndex(-1);
    } else {
        setIndex(index);
    }
};

const Question = ({index, activeIndex, setIndex, question, answer}: Question) => {
    return (
        <>
            <Accordion.Title
                active={index === activeIndex}
                index={index}
                onClick={(e, {index}) => handleClick(index as number, activeIndex, setIndex)}
            >
                <Icon name='dropdown'/>
                {question}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === index}>
                <Segment raised attached={"top"} basic>
                    {answer}
                </Segment>
            </Accordion.Content>
        </>
    )
};

interface Answer {
    title: string;
    answer1: string;
    answer2: string;
}

const Answer = ({title, answer1, answer2}: Answer) => {
    return (
        <div className={"answer"}>
            <div className="answer__title">{title}</div>
            <div className="answer__main">
                {answer1}
            </div>
            <div className="answer__main">
                {answer2}
            </div>
        </div>
    )
};

const Questions = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    return (
        <div className={"questions"}>
            <div className={"questions__title"}>Q & A</div>
            <Accordion styled className={"questions__accordion"}>
                <Question index={0} activeIndex={activeIndex} setIndex={setActiveIndex}
                          question={"Why would you be a good fit for the Campaign Developer role?"}
                          answer={"I enjoy innovation and love to experiment with different ideas. " +
                          "I love coding and numbers in general, I have cultivated a habit of learning " +
                          "through practice and diverse experiences. " +
                          "I have a deep passion for new advancements in technology and using it to bring change to the world." +
                          "I have an artistic eye and strong work ethic, but also like to foster an element of fun. " +
                          "I strongly believe that my creative talents will prove to be a valuable resource for your organization."}/>
                <Question index={1} activeIndex={activeIndex} setIndex={setActiveIndex}
                          question={"Why do you want to work here over somewhere else?"}
                          answer={"Riasley is a people oriented platform that allows people achieve their fund raising goals. It is really a life changing platform, " +
                          "and I would love to be a part of that knowing that my work will affect lives directly or indirectly will bring me a sense of fulfillment."}/>
                <Question index={2} activeIndex={activeIndex} setIndex={setActiveIndex}
                          question={"Choices from the list of tasks"}
                          answer={(
                              <div className={"questions__answers"}>
                                  <Answer title={"Excited"}
                                          answer1={"Building a custom theme on Raisely, with your own SASS styles and javascript components."}
                                          answer2={"Creating a complex, multi-step signup form using Create React App, Stripe payments and our API."}/>

                                  <Answer title={"To Learn"}
                                          answer1={"Project managing the set-up of a new large campaign on Raisely, keeping it on time and budget."}
                                          answer2={"Running a scoping call with a customer to figure out all the details about their campaign."}/>

                                  <Answer title={"Don't Want"}
                                          answer1={"Looking at data (SQL or spreadsheets) to figure out the A/B test to set up in Google Optimize."}
                                          answer2={"Building a special kind of campaign leaderboard as a component in React."}/>

                              </div>)}/>
                <Question index={3} activeIndex={activeIndex} setIndex={setActiveIndex}
                          question={"Tell us about a platform you believe has solved a complex problem really well, and why. " +
                          "Would you change anything in their approach?"}
                          answer={"StackOverflow. It has been a life saver in software development space, providing " +
                          "answers for virtually all kinds of problems, and also creating a community for engineers to" +
                          " share knowledge from their experiences and mistakes. If I could change anything, " +
                          "I will make it more beginner friendly, because I have noticed some hostilities through down " +
                          "votes for newbies who ask basic questions on the platform."}/>
            </Accordion>
        </div>
    )
};

export default Questions;