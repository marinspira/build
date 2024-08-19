import React from 'react';
import me from '../../assets/me.jpeg';
import * as C from './styles'
import Btn from '../btn';

function SectionTop() {
  return (
    <C.Section>
      <C.Container>
        <C.Content>
          <h1>Hi! I am Maria, 👋<br />FullStack Developer.</h1>
          <span>
            I develop software for web and mobile using with React.js, React Native, Next.js, Node.js, Express.js, and MongoDB.
          </span>
          <Btn
            link1={{
              text: "Go to CV",
              link: 'https://drive.google.com/file/d/1FAURrCgId0ld5Knlgt0UTIqzwlLsfz22/view?usp=sharing'
            }}
            link2={{
              text: "LinkedIn",
              link: 'https://www.linkedin.com/in/iamaria/'
            }}
          />
        </C.Content>
        <C.ImageContainer>
          <img src={me} alt='Maria Eduarda' />
        </C.ImageContainer>
      </C.Container>
    </C.Section>
  );
}

export default SectionTop;
