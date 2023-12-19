import { FullPageChat } from 'flowise-embed-react'

const FlowiseChat = () => {
	return (
		<FullPageChat
			chatflowid='70704781-5c6b-439c-8542-cd2f52966f07'
			apiHost='http://localhost:3000'
			// theme={{
			// 	chatWindow: {
			// 		welcomeMessage:
			// 			"Hello there! I can explain any concept like you're a 5 year old child. Ask me anything!",
			// 		backgroundColor: '#111111',
			// 		botMessage: {
			// 			backgroundColor: '#EEEEEE',
			// 			textColor: '#111111',
			// 		},
			// 		userMessage: {
			// 			backgroundColor: '#70B8FF',
			// 			textColor: '#111111',
			// 		},
			// 		textInput: {
			// 			placeholder: 'What would like to learn about?',
			// 			backgroundColor: '#222222',
			// 			textColor: '#EEEEEE',
			// 		},
			// 	},
			// }}
		/>
	)
	// return (
	// 	<BubbleChat
	// 		chatflowid='70704781-5c6b-439c-8542-cd2f52966f07'
	// 		apiHost='http://localhost:3000'
	// 		theme={{
	// 			button: {},
	// 			chatWindow: {
	// 				welcomeMessage:
	// 					"Hello there! I can explain any concept like you're a 5 year old child. Ask me anything!",
	// 				width: 800,
	// 				height: 1400,
	// 			},
	// 		}}
	// 	/>
	// )
}

export default FlowiseChat
