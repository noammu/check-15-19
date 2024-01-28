import { createBoard } from '@wixc3/react-board';
import { Recursive } from '../../../components/recursive/recursive';

export default createBoard({
    name: 'Recursive',
    Board: () => <Recursive count={5} />,
    isSnippet: true,
});
