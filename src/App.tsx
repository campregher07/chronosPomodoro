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
export function App() {
  return (
    <>
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
              labelTest='task'
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
