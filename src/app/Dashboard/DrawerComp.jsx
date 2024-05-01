"use client"
import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
const DrawerComp = ({drawerData, handleDrawerClose}) => {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState('');

  const onClose = () => {
    setOpen(false);
    handleDrawerClose();
  };

  const handleSave = ({ name, value, previousValue }) => {
    alert(name + ' saved as: ' + value + ' (prev: ' + previousValue + ')');
  };
  
  return (
    <>
      <Drawer
        title={`Drawer`}
        placement="right"
        size={736}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <EditText  style={{padding: '10px', fontSize: '20px'}} className='font-semibold focus:outline-none focus:border-none' name='title' 
        onChange={(e)=>hanleChange(e, setText)}
        onSave={handleSave}
        defaultValue={drawerData.project_title} />
      </Drawer>
    </>
  );
};
export default DrawerComp;