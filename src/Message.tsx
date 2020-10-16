import React, { useState } from 'react'
import messageHoc from './Hoc'

interface User {
  id: number,
  name: string
}

interface MessageContent {
  person: string,
  message: string
}

const example = (props: any) => {
  // const val: number = 0;
  // const [user, setUser] = useState<User>({ id: 3, name: 'Hal'});

  return (
    <div>
      message: {props.message}, from {props.name}.
    </div>
  )
}

const Message = messageHoc(example)

export default Message