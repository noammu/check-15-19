import classNames from 'classnames';
import styles from './smoll.module.scss';
import { Recursive } from '../recursive/recursive';

export interface SmollProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Smoll = ({ className }: SmollProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Recursive count={3} />
        </div>
    );
};
