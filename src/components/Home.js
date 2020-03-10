import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';

class Home extends Component {
    render() {
        
        const { questionInfo } = this.props

        console.log('this.props: ', this.props)

        return <Tab panes={panes({ questionInfo })} className="tab" />;
    }
}

const panes = param => {
    const { questionInfo } = param

    console.log('questionInfo: ', questionInfo)

    return [
      {
        menuItem: 'Unanswered',
        render: () => (
          <Tab.Pane>
            {questionInfo.answered.map(question => (
                <div>question.id</div>
            ))}
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Answered',
        render: () => (
          <Tab.Pane>
            {questionInfo.unanswered.map(question => (
                <div>question.id</div>
            ))}
          </Tab.Pane>
        )
      }
    ];
  }

function mapStateToProps({ authedUser, users, questions }) {
    const answeredIds = Object.keys(users[authedUser].answers);
    const answered = Object.values(questions)
      .filter(question => !answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);
    const unanswered = Object.values(questions)
      .filter(question => answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);
  
    return {
        questionInfo: {
            answered,
            unanswered
      }
    };
  }
  
  export default connect(mapStateToProps)(Home);