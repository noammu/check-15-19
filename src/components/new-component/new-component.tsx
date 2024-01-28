import classNames from 'classnames';
import styles from './new-component.module.scss';
import moreStyles from './another-style.module.scss';
import { Smoll } from '../smoll/smoll';
import { Recursive } from '../recursive/recursive';

export interface NewComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent = ({ className }: NewComponentProps) => {
    return (
        <div
            className={classNames(
                styles.root,
                className,
                styles.asdasd,
                styles.dsfsd,
                styles.sdfs,
                styles.sdds,
                styles.ssfdsgdfvb,
                styles.cvbcvbcvb,
                styles.dfdd,
                styles.aaa,
                styles.werwerwe,
                styles.blibli
            )}
        >
            <h1 className={classNames(moreStyles.fghfgh)}>Heading 1</h1>
            <div className={styles.position}>
                <a
                    href="https://www.youtube.com/watch?v=8saKHKt1A5Q&amp;list=PLcegffsUNmB2fYM1pdgroXyEFT8lCGxzU&amp;index=2&amp;ab_channel=SumerianRecords"
                    title="lipin"
                >
                    lippincott{undefined}
                </a>
            </div>
            <ol>
                <li className={styles.asd}>
                    <span className={styles.float}>dfgdfgdfg</span>First itemfdghfdghdfgh fdg hdfgh
                    fdg hfdgh fdgh{' '}
                </li>
                <li>fdghfdg hfdghfdghfdg hfdgh fdghfd hfdhitem</li>
                <li>Third itemDFHGDSHFDGHFDGHFDGHFDG</li>
            </ol>
            <h3>Heading 3</h3>
            <div className={styles.ppp}>
                <p className={styles.p1}>This is a paragraph.</p>
                <p className={styles.p2}>This is a paragraph.</p>
            </div>
            <div className={styles.smollwrap}>
                <Smoll className={styles.xcvxcxcv} />
            </div>
            <h6 className={styles.h6}>cgfbvcfghfdghfdghfghfdfdhgfdghfdghfdgh</h6>
            <Recursive count={2}/>
            <Smoll />
            <div className={styles.imgvid}>
                <video
                    controls={true}
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
                    className={styles.vid}
                >
                    <audio
                        controls={true}
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/audio-placeholder.mp3"
                    ></audio>
                </video>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};
