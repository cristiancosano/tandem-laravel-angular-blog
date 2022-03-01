export interface LaravelPagination<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    links: Array<{url: string, label: string, active: boolean}>
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}
