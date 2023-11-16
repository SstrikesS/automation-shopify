import db from '../db.server';
import type { QueryFilter } from '~/helper';

export type Template = {
    id: string,
    name: string,
    image: string,
    data: object,
    status: boolean,
    type: string,
    created_at?: Date,
    updated_at?: Date,
}



export async function getLists(query_filter: QueryFilter) {
    const templates = await db.templates.findMany({
        orderBy: {
            [query_filter.sort_by]: query_filter.sort,
        },
        where: {
            status: query_filter.status,
            [query_filter.search_by]: query_filter.key,
        },
        take: query_filter.limit,
        skip: (query_filter.page - 1) * query_filter.limit,
    });

    return Promise.all(templates);
}

export async function getListsCount(query_filter: QueryFilter) {
    const count = await db.templates.count({
        orderBy: {
            [query_filter.sort_by]: query_filter.sort,
        },
        where: {
            status: query_filter.status,
            [query_filter.search_by]: query_filter.key,
        },
        take: query_filter.limit,
        skip: query_filter.page * query_filter.limit - 1,
    });

    return count;
}

export async function getSampleList(limit?: number, key?: string, ingnore?: string[]) {
    if (key === undefined) {
        key = '%%';
    }

    const templates = await db.templates.findMany({
        orderBy: {
            id: 'asc'
        },
        take: limit,
        where: {
            type: 'Sample',
            name: key,
            NOT: {
                id: {
                    in: ingnore,
                }
            }
        }
    });

    return Promise.all(templates);
}

export async function getCustomList(limit?: number, key?: string, ingnore?: string) {
    if (key === undefined) {
        key = '%%';
    }

    const templates = await db.templates.findMany({
        orderBy: {
            id: 'asc'
        },
        take: limit,
        where: {
            type: 'Custom',
            name: key,
            NOT: {
                id: ingnore,
            }
        }
    });

    return Promise.all(templates);
}

export async function searchTemplates(key: string, limit?: number) {
    const templates = await db.templates.findMany({
        where: {
            name: key
        },
        take: limit ?? 4,
    })

    return Promise.all(templates);

}


// export async function create(post_data: Template) {
//     await prisma.templates.create({
//         data: {
//             name: post_data.name,
//             image: post_data.image,
//             data: JSON.stringify(post_data.data),
//             status: true,
//             type: 1,
//             created_at: new Date(),
//         },
//     });
// }