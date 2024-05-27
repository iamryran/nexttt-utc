'use client';

import {Container, Space, rem} from '@mantine/core';
import React from 'react';
import classes from './style.module.css';

const BigData = () => {
    return (
        <Container
            m={0}
            py={rem(20)}
            classNames={{
                root: classes.wrapper,
            }}
        >
            <Space h="xl"/>
            {(
                <div>
                    {(
                        <>
                            <div>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <img src="/assets/bigdata/img_1.jpg" style={{width: '33%'}}/>
                                <img src="/assets/bigdata/img_2.jpg" style={{width: '33%'}}/>
                                <img src="/assets/bigdata/img_3.jpg" style={{width: '33%'}}/>
                            </div>
                        </>
                    )}
                </div>
            )}
        </Container>
    );
};

export default BigData;
