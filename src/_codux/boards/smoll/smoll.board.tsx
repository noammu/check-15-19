import '../../../index.css';
import { createBoard } from '@wixc3/react-board';
import { Smoll } from '../../../components/smoll/smoll';

export default createBoard({
    name: 'Smoll',
    Board: () => <Smoll className="sdf fff" />,
    isSnippet: true,
});
