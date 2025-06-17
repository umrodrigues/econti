export interface IFooter {
    developer: string;
    links: {
        title: string;
        items: { text: string; url: string }[];
    }[];
}