import { Table } from '@radix-ui/themes'
import React from 'react'
import { Skeleton } from '@/app/components'
import IssueAction from './IssueAction'

const LoadingIssuesPage = () => {
    const issues = [1, 2, 3, 4, 5]
    return (
        <>
            <IssueAction />
            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden md:table-cell'>Staus</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {issues.map(issue => (
                        <Table.Row key={issue}>
                            <Table.Cell>
                                <Skeleton />
                                <div className='block md:hidden mt-1'><Skeleton /></div>
                            </Table.Cell>
                            <Table.Cell className='hidden md:table-cell'><Skeleton /></Table.Cell>
                            <Table.Cell className='hidden md:table-cell'><Skeleton /></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </>
    )
}

export default LoadingIssuesPage