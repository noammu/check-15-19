import classNames from 'classnames';
import styles from './classname-stays.module.scss';

export interface ClassnameStaysProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ClassnameStays = ({ className }: ClassnameStaysProps) => {
    return <div className={classNames(styles.root, className)}>ClassnameStays</div>;
};
