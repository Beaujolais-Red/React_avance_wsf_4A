import React from 'react'
import { getAllUser } from '../api/user'
import { useEffect, useState } from 'react'
import UserProfile from './UserProfile'
import { User } from '../api/types'
import Field from '../private/Field'

const AllUsers = () => {

    const [author, setAuthor] = useState<Array<User>>([])

    async function _getAllUser() {
        const data = await getAllUser()
        setAuthor(data)
    }

    useEffect(() => {
        _getAllUser();
    }, []);

    function renderAuthors(values: User) {
        return (
            author && (
                <div className="user-profile-wrapper">
                    <Field label="Name">
                        <span>{values.name}</span>
                    </Field>
                    <Field label="Email">
                        <span>{values.email}</span>
                    </Field>
                    <Field label="Company">
                        <span>{values.company.name}</span>
                    </Field>
                    <Field label="Phone">
                        <span>{values.phone}</span>
                    </Field>
                    <Field label="Address">
                        <span>{values.address.street} - </span>
                        <span>{values.address.city} - </span>
                        <span>{values.address.zipcode}</span>
                    </Field>
                </div>
            )
            )
    }
    return <ul className="post-list">{author.map(renderAuthors)}</ul>
    // return null

        }


export default AllUsers
