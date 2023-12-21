import { BubbleChat, FullPageChat } from 'flowise-embed-react'

type Props = {
	apiHost: string
	chatflowid: string
}

const FlowiseChat = (props: Props) => {
	return <BubbleChat chatflowid={props.chatflowid} apiHost={props.apiHost} />
}

export default FlowiseChat
