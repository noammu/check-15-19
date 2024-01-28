import { createBoard } from '@wixc3/react-board';
import { Percent } from '../../../components/percent/percent';

export default createBoard({
    name: 'Percent',
    Board: () => <Percent />,
    isSnippet: true,
});
