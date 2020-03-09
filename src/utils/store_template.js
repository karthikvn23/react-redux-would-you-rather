/* This JS File is a simple template of the store */

const store = 
    {
        users:[
                {
                    userId: 'kvellur',
                    answers: {
                        questionId1: 'optionA',
                    },
                    questions: ['questionId1', 'questionId2']
                },
                {
                    userId: 'nvellur',
                    answers: {
                        questionId1: 'optionA',
                    },
                    questions: ['questionId1', 'questionId2']
                },                
            ],
        questions:[
            {
                questionId: 'questionId1',
                text: 'text',
                optionA: 'optionA',
                optionB: 'optionB',
                owner: 'userId'
            },
            {
                questionId: 'questionId1',
                text: 'text',
                optionA: 'optionA',
                optionB: 'optionB',
                owner: 'userId'
            }                 
        ]
    }

console.log(store)    