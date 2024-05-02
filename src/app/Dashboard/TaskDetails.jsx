import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Button, Tooltip, Select,Avatar, Space, Skeleton,Divider, List } from 'antd';
const { Meta } = Card;
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const TaskDetails = ({task, setIsOpenTask}) => {
  const [text, setText] = useState()

  console.log('task',task)

  const handleSave = ({ name, value }) => {
    const updateText = { ...text }
    updateText[name] = value;
    setText(updateText)
  };

  return( 
  <>
  <div className='flex gap-5 pb-5'>
          <Button type='primary' onClick={() => setIsOpenTask(false)} >Save</Button>
          <Button onClick={() => setIsOpenTask(false)} >Cancel</Button>
    </div>
    <EditText className='font-semibold w-[120px] h-[60px] truncate lg:text-xl text-[10px] focus:outline-none focus:border-none'
          name='title'
          onChange={(e) => hanleChange(e, setText)}
          onSave={handleSave}
          defaultValue={task.title} />
  </>
  )
}
export default TaskDetails