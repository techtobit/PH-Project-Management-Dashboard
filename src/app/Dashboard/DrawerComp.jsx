"use client"
import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
const DrawerComp = ({drawerData, handleDrawerClose}) => {
  const [open, setOpen] = useState(true);

  const onClose = () => {
    setOpen(false);
    handleDrawerClose();
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
        <EditText name='title' defaultValue={drawerData.project_title} />
      </Drawer>
    </>
  );
};
export default DrawerComp;