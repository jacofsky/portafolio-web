import styles from '../../styles/components/ui/Button.module.css'

interface IProps {
  text: string,
  action: () => void,
  type?: "button" | "submit" | "reset",
  width?: number,
  heigt?: number,
  fontSize?: number,
  bg?: 'green' | 'white'

}

export const Button = ({text, action, type = 'button', bg = 'white'}:IProps) => {

  if(bg === 'white') {
    return (
      <button className={styles.buttonStyle} onClick={action} type={type}>
        {text}
      </button>
    )
  } else {
    return (
      <button className={styles.buttonStyleG} onClick={action} type={type}>
        {text}
      </button>
    )
  }
  
}