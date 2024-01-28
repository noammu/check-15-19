import classNames from 'classnames';
import styles from './sdfsdf.module.scss';

export interface SdfsdfProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sdfsdf = ({ className }: SdfsdfProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            Sdfsdf
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            <video
                controls={true}
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
            />
        </div>
    );
};
