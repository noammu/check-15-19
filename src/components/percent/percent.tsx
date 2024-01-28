import classNames from 'classnames';
import styles from './percent.module.scss';
import {num} from './constants'

export interface PercentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Percent = ({ className }: PercentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles.noPerc}>{num}</span>
        </div>
    );
};
