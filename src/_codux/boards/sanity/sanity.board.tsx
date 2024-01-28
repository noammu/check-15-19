import { createBoard } from '@wixc3/react-board';
import { Sanity } from '../../../components/sanity/sanity';

export default createBoard({
    name: 'Sanity',
    Board: () => <Sanity />,
    isSnippet: true,
});
