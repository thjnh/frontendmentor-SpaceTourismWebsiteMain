import styles from './heading.module.scss'

export const Heading = ({children, h, className}) => {
    return (
        <div className={styles['H'+h] + ' ' + className}>
            {children}
        </div>
    )
} 

export const SubHeading = ({children, sh, className}) => {
    return (
        <div className={styles['SH'+sh] + ' ' + className}>
            {children}
        </div>
    )
}
