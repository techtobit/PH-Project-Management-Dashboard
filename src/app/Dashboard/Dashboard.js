"use client"
import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Avatar, Col, Row, Card, Skeleton, Switch } from 'antd';
const { Meta } = Card;

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: 'todos',
    queryFn: async () => {
      const response = await fetch('https://663114fbc92f351c03dc1f32.mockapi.io/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      const limitedData = await response.json()
      setProjects(limitedData.slice(0, 10));
    },
  });

  // setProjects(data);
  // // console.log(projects)
  // projects.map((project, index )=> {
  //   console.log(project.project_title);
  // })


  const onChange = (checked) => {
    setLoading(!checked);
  }

  return (
    <div>
      <p>dashboard</p>

      <Row gutter={14}className='flex justify-center'>
        {
          projects.map((project, index) => (
            <>
              <Card
              className='mx-4'
                key={index}
                style={{
                  width: 300,
                  marginTop: 16,
                }}
                actions={[
                  <EyeOutlined key="view" />,
                  <EditOutlined key="edit" />,
                  <DeleteOutlined key="delete" />,
                ]}
              >
                <Skeleton loading={loading} active>
                  <Meta
                    title={project.project_title}
                    description={project.project_dis}
                  />
                  <p>{project.assing}</p>
                </Skeleton>
              </Card>
            </>
          ))
        }
      </Row>

    </div>
  )
};

export default Dashboard;