import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelTest?: string; // O ? serve para dizer q a variavel é opcional
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  labelTest,
  type,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* condição ? 'True' : 'False'} */}
      {/* condição && 'valor' SEM O SENAO*/}
      {labelTest && <label htmlFor={id}>{labelTest}</label>}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
