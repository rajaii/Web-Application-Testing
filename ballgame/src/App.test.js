import React from 'react';
import * as rtl from '@testing-library/react';


import App from './App.js';
import { exportAllDeclaration } from '@babel/types';



    test('renders without crashing', () => {
        const wrapper = rtl.render(<App />);
        console.log(wrapper)

    })

    test('renders proper text', () => {
        //Arrange
        const wrapper = rtl.render(<App />);
        //Act
        wrapper.getByText('Strikes: 0')
        wrapper.getByText('At bat:')
        wrapper.getByText('Balls: 0')
        wrapper.getByText('Strike')
        wrapper.getByText('Ball')
        wrapper.getByText('Foul')
        wrapper.getByText('Select new player')
        //assert above is truthy (done in the code anyhow )

    })
  
   
//1:54 on the lecture go over that figure out syntax of getbytestid and finish up and use render test for integration on challenge.
   


   