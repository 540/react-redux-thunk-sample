export type Course = Readonly<{
    id: string
    title: string;
    watchHref: string;
    authorId: string;
    category: string;
    length: string;
}>;

export const builder = {
    empty: () => ({id: '', watchHref: '', title: '', authorId: '', length: '', category: ''})
};
