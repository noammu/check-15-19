import { createBoard } from '@wixc3/react-board';
import { BadShadow } from '../../../components/bad-shadow/bad-shadow';

export default createBoard({
    name: 'BadShadow',
    Board: () => <BadShadow />,
    isSnippet: true,
});
