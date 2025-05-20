import './styles/theme.css';
import './styles/global.css';

import { Menu } from './components/Menu';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cylces } from './components/Cycles';
import { DefaultButton } from './components/DeafualtButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';

export function App() {
  const [num, setNum] = useState(0); // com o useState não pode ser usado atribuição diretamente
  // const [num, setNum] = useState(() => {
  //   return 0;
  // }); // Usa essa Lazy inicialization qnd é necessario muitos calculos

  function handleClick() {
    setNum(prevState => prevState + 1); // regrinha de q qnd depende da variavel anterior, use essa func
  }

  return (
    <>
      <Heading>
        <span id='numero'>Número: {num}</span>
      </Heading>
      <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              type='text'
              labelTest={num.toString()}
              placeholder='Digite Algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cylces />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
