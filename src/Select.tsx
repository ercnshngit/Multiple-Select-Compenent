
import styles from "./Select.module.css"

type SelectOption = {
  label: string,
  value: any
}

type SelectProps = {
  value?: SelectOption,
  options: SelectOption[],
  onChange: (value: SelectOption | undefined) => void
}
export default function Select({ value, onChange, options}: SelectProps){
  return (
    <div className={styles.container}>
      <span className={styles.value}>Value</span>
      <button className={styles["clear-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className=
      </div>
  )
}