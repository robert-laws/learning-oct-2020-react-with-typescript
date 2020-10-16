import React, { useState } from 'react'

interface User {
  id: number,
  name: string
}

interface MessageContent {
  person: string,
  message: string
}

const Message = (props: MessageContent) => {
  const [user, setUser] = useState<User>({ id: 3, name: 'Hal'});

  return (
    <div>
      {props.message} from {props.person}.
    </div>
  )
}

export default Message