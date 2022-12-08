import styles from '../../styles/components/ui/Button.module.css'

interface IProps {
  text: string,
  action: () => void,
  type?: "button" | "submit" | "reset",
  width?: number,
  heigt?: number,
  fontSize?: number,


}

export const Button = ({text, action, type = 'button'}:IProps) => {


  return (
    <button className={styles.buttonStyle} onClick={action} type={type}>
      {text}
    </button>
  )
}