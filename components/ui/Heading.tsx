import styles from '../../styles/components/ui/Heading.module.css'

interface IProps {
    fontSize: number,
    text: string,
    type?: 'black' | 'white',
    h?: 1 | 2 | 3
}

export const Heading = ({fontSize, text, type = 'black', h = 1}:IProps) => {


    switch (h) {
        case 1:
            return (
                <div className={styles.textBox}>
                    <h1 style={{fontSize: `${fontSize}rem`, color: `${type}`}} className={styles.text}>{text}</h1>
                    <span className={styles.backText} style={{fontSize: `${fontSize}rem`, color: `${type === 'black' ? '#F5F5F5' : '#0ACF83'} `}}>{text}</span>
                </div>
                
            )

        case 2:
            return (
                <div className={styles.textBox}>
                    <h2 style={{fontSize: `${fontSize}rem`, color: `${type}`}} className={styles.text}>{text}</h2>
                    <span className={styles.backText} style={{fontSize: `${fontSize}rem`, color: `${type === 'black' ? '#F5F5F5' : '#0ACF83'} `}}>{text}</span>
                </div>
            )

        case 3:
            return (
                <div className={styles.textBox}>
                    <h3 style={{fontSize: `${fontSize}rem`, color: `${type}`}} className={styles.text}>{text}</h3>
                    <span className={styles.backText} style={{fontSize: `${fontSize}rem`, color: `${type === 'black' ? '#F5F5F5' : '#0ACF83'} `}}>{text}</span>
                </div>
            )
    
    }
  
}