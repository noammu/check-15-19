import classNames from 'classnames';
import styles from './sanity.module.scss';

export interface SanityProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sanity = ({ className }: SanityProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.span}>texrdhgdsfghdfghfdghfdghfdghfdghfdghdfght</div>
            <div className={styles.wra}>
                <button className={styles.butt}>Buttonךתצגכמענ</button>
            </div>
            <h5>dsfghlkdjgdlkjfgdflkjdfg</h5>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={styles.img}
            />
        </div>
    );
};
