import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { Table, Tag, Popconfirm, Layout } from 'antd'
import axios from 'axios'
import { IUser } from '../../interfaces/IUser'
const columns: any = [
    {
        title: 'STT',
        dataIndex: '_id',
        key: '_id',
        width: '4%',
        render: (_: any, user: any, index: number) => {
            return <a href="">{user._id}</a>
        },
    },
    {
        title: 'Khách Hàng',
        dataIndex: 'fullname',
        key: 'fullname',
        render: (fullname: any) => (
            <div>
                <a href={'/user/detail/'}>
                    <h1>{fullname}</h1>
                </a>
            </div>
        ),
    },

    {
        title: 'Ngày mua',
        dataIndex: 'orderDate',
        key: 'orderDate',
        sorter: (a: any, b: any) => a.orderDate - b.orderDate,
    },
]

export default function UserBody() {
    const [users, setUser] = useState<IUser[]>([])
    // const [companys, setCompany] = useState<ICompany[]>([])
    useEffect(() => {
        axios
            .get('http://192.168.1.21:3000/api/user?role=cms')
            .then((response) => {
                console.log(response)
                setUser(response.data)
                console.log('object', users)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    return <Table columns={columns} dataSource={users} bordered scroll={{ x: true, y: 1000 }} />
}
