import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //não segue o link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
    // document.documentElement.setAttribute('data-theme', theme); // efeito colateral é algo que o React nao esta monitorando
  }

  // useEffect(() => {
  //   console.log('useEffect sem dependencia', Date.now());
  // }); // executa td vez q o componente renderiza na tela

  // useEffect(() => {
  //   console.log('useEffect com deps vazias', Date.now());
  // }, []); // executa apenas qnd o react monta o compennete na tela pela primeira vez

  useEffect(() => {
    console.log('theme:', theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('O componente sera atualizado');
    };
  }, [theme]); // executa apenas qnd o valor de theme muda

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para configurações'
        title='Ir para configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
