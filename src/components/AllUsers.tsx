import React from 'react'
import { getAllUser } from '../api/user'
import { useEffect, useState } from 'react'
import UserProfile from './UserProfile'
import { User } from '../api/types'
import Field from '../private/Field'
import { useParams } from 'react-router-dom'

const AllUsers = () => {
    const [author, setAuthor] = useState<Array<User>>([])
    async function _getAllUser() {
        const data = await getAllUser()
        return data
    }

    useEffect(() => {
        _getAllUser();
    }, []);

    return (
        author && (
            <div className="user-profile-wrapper">
                <Field label="Name">
                    <span>{author.name}</span>
                </Field>
                <Field label="Email">
                    <span>{author.email}</span>
                </Field>
                <Field label="Company">
                    <span>{author.company.name}</span>
                </Field>
                <Field label="Phone">
                    <span>{author.phone}</span>
                </Field>
                <Field label="Address">
                    <span>{author.address.street} - </span>
                    <span>{author.address.city} - </span>
                    <span>{author.address.zipcode}</span>
                </Field>
            </div>
        )
        )

    // return null

        }


export default AllUsers
