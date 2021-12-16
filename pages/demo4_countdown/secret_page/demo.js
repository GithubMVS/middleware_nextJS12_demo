
import styles from "../../../styles/demo.module.css"

// go back component
import GoBack from '../../../components/BackToOtherDemos'

export default function demo() {

  return (
    <div className={styles.full}>
      <GoBack />
      <p className={styles.demo_title}>Secret page with middleware:</p>
      <p className={styles.demo_explenation}>This is a secret page! That only opens after a certain date made with middleware, if it is after this time you can't open the "secret" page but after the time you are free to visit the page.</p>

      <div className={styles.demo_showed_full}>
        <p className={styles.demo_showed_full_title}>This is great because:</p>
        <ul className={styles.ideas}>
          <li className={styles.idea}>You can now for example easily make a webshop release date with a few of code instead of having to configurate your whole site.</li>
        </ul>
      </div>

      <ul className={styles.ideas_full}>
        <p className={styles.ideas_full_title}>This could be: </p>
        <ul className={styles.ideas}>
          <li className={styles.idea}>A webshop release.</li>
          <li className={styles.idea}>An announcement</li>
          <li className={styles.idea}>Product release</li>
        </ul>
      </ul>
    </div>
  )
}
