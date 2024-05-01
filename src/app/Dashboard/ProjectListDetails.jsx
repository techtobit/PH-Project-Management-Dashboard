import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card,Button, Skeleton, Switch } from 'antd';
const { Meta } = Card;
const ProjectListDetails = ({setViewDetails}) => {
  const [loading, setLoading] = useState(false);

  const onChange = (checked) => {
    setLoading(checked);
  };
  return (
    <>
      <Card className='flex justify-center'
        style={{
          width: '100%',
          marginTop: 16,
        }}
        loading={loading}
      >
        {/* <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Card title"
          description="This is the description"
        /> */}
        <Button onClick={()=> setViewDetails(false)} >Save</Button>
      </Card>
    </>
  );
};
export default ProjectListDetails;