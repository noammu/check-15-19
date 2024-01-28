import { createBoard } from '@wixc3/react-board';
import { ClassnameStays } from '../../../components/classname-stays/classname-stays';

export default createBoard({
    name: 'ClassnameStays',
    Board: () => <ClassnameStays />,
    isSnippet: true,
});
