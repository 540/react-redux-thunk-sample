export type Course = Readonly<{
    id: string
    title: string;
    watchHref: string;
    authorId: string;
    category: string;
    length: number;
}>;
