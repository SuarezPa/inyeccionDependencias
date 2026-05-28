export interface getClientAdapter {
    getClient(url: string): Promise<any>;
}