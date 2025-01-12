import {Link} from 'react-router';
import styles from './styles.module.css';

type Props = {
  href: string;
  children: string;
};
function NavigationLink({href, children}: Props) {
  return (
    <Link className={styles.link} to={href}>
      {children}
    </Link>
  );
}

export default NavigationLink;
