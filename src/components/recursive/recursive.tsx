import classNames from 'classnames';
import styles from './recursive.module.scss';

export interface RecursiveProps {
    className?: string;
    count: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Recursive = ({ className, count }: RecursiveProps) => {
    if (count <= 0) {
    return null; // Base case: Stop recursion when count is 0 or negative
  }

  return (
    <div>
      <p>This is a recursive component with count: {count}</p>
      <Recursive count={count - 1} /> {/* Recursive call */}
    </div>
  );
};


