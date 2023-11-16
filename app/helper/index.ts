export type QueryFilter = {
    limit: number, // gioi han so luong items tra ve
    page: number, // trang hien tai
    sort: 'asc' | 'desc', // sap xep tu nho den lon (asc) va nguoc lai
    sort_by: 'name' | 'created_at' | 'updated_at' | 'id',
    key: string,
    search_by: 'name' | 'type',
    status: true | false
}
