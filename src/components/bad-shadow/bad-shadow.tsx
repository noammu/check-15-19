import classNames from 'classnames';
import styles from './bad-shadow.module.scss';
import { Button, Icon } from 'semantic-ui-react';

export interface BadShadowProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const BadShadow = ({ className }: BadShadowProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            BadShadow
            <Button animated>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                    <Icon name="arrow right" />
                </Button.Content>
            </Button>
            <Button basic color="blue">
                Blue
            </Button>
            <Button animated>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                    <Icon name="arrow right" />
                </Button.Content>
            </Button>
        </div>
    );
};
