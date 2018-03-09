import { Author } from './authorModel';
import { Option } from '../../components/common/SelectInput';

export const authorsFormattedForDropDown = (authors: Author[]): Option[] =>
    authors.map(author => ({value: author.id, text: author.firstName + ' ' + author.lastName}));
